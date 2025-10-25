'use client'

import { useState, useEffect, useRef } from 'react'
import { Bell, X, Check, AlertCircle, FileText } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Notification {
  id: string
  type: 'lab_result_uploaded' | 'lab_result_abnormal' | 'patient_message' | 'consultation_update' | 'system_alert'
  title: string
  message: string
  patientId?: string
  consultationId?: string
  labResultId?: string
  isRead: boolean
  readAt?: string | null
  actionUrl?: string | null
  metadata?: any
  createdAt: string
}

export function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Fetch notifications
  const fetchNotifications = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/doctor/notifications?limit=10')
      if (response.ok) {
        const data = await response.json()
        setNotifications(data.notifications || [])
        setUnreadCount(data.unreadCount || 0)
      }
    } catch (error) {
      console.error('Failed to fetch notifications:', error)
    } finally {
      setLoading(false)
    }
  }

  // Mark notification as read
  const markAsRead = async (notificationId: string) => {
    try {
      const response = await fetch(`/api/doctor/notifications/${notificationId}/read`, {
        method: 'POST',
      })
      if (response.ok) {
        setNotifications(notifications.map(n =>
          n.id === notificationId ? { ...n, isRead: true, readAt: new Date().toISOString() } : n
        ))
        setUnreadCount(Math.max(0, unreadCount - 1))
      }
    } catch (error) {
      console.error('Failed to mark notification as read:', error)
    }
  }

  // Mark all as read
  const markAllAsRead = async () => {
    try {
      const response = await fetch('/api/doctor/notifications/mark-all-read', {
        method: 'POST',
      })
      if (response.ok) {
        setNotifications(notifications.map(n => ({ ...n, isRead: true, readAt: new Date().toISOString() })))
        setUnreadCount(0)
      }
    } catch (error) {
      console.error('Failed to mark all notifications as read:', error)
    }
  }

  // Delete individual notification
  const deleteNotification = async (notificationId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      const response = await fetch(`/api/doctor/notifications/${notificationId}/delete`, {
        method: 'DELETE',
      })
      if (response.ok) {
        const wasUnread = notifications.find(n => n.id === notificationId)?.isRead === false
        setNotifications(notifications.filter(n => n.id !== notificationId))
        if (wasUnread) {
          setUnreadCount(Math.max(0, unreadCount - 1))
        }
      }
    } catch (error) {
      console.error('Failed to delete notification:', error)
    }
  }

  // Clear all notifications
  const clearAllNotifications = async () => {
    try {
      const response = await fetch('/api/doctor/notifications/clear-all', {
        method: 'DELETE',
      })
      if (response.ok) {
        setNotifications([])
        setUnreadCount(0)
      }
    } catch (error) {
      console.error('Failed to clear all notifications:', error)
    }
  }

  // Handle notification click
  const handleNotificationClick = async (notification: Notification) => {
    if (!notification.isRead) {
      await markAsRead(notification.id)
    }

    if (notification.actionUrl) {
      setIsOpen(false)
      router.push(notification.actionUrl)
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    fetchNotifications()
    const interval = setInterval(fetchNotifications, 30000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isOpen) {
      fetchNotifications()
      if (unreadCount > 0) {
        markAllAsRead()
      }
    }
  }, [isOpen])

  // Get icon for notification type
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'lab_result_abnormal':
        return <AlertCircle className="w-5 h-5 text-blue-500" />
      case 'lab_result_uploaded':
        return <FileText className="w-5 h-5 text-blue-500" />
      default:
        return <Bell className="w-5 h-5 text-white/70" />
    }
  }

  // Format time ago
  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (seconds < 60) return 'Just now'
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`
    return date.toLocaleDateString()
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Notifications"
      >
        <Bell className="w-5 h-5 text-white/90" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-black/50 backdrop-blur-lg rounded-lg shadow-lg shadow-blue-500/20 border border-white/30 z-50 max-h-[600px] flex flex-col">
          <div className="px-4 pt-4 pb-3 border-b border-white/20">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white/95 text-base">Notifications</h3>
              <div className="flex items-center gap-2">
                {notifications.length > 0 && (
                  <>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-xs text-blue-500 hover:text-blue-600 font-medium transition-colors"
                      >
                        Mark all read
                      </button>
                    )}
                    <button
                      onClick={clearAllNotifications}
                      className="text-xs text-white/75 hover:text-white font-medium transition-colors"
                    >
                      Clear all
                    </button>
                  </>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded-md transition-colors ml-1"
                  aria-label="Close notifications"
                >
                  <X className="w-4 h-4 text-white/85" />
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-y-auto flex-1">
            {loading && notifications.length === 0 ? (
              <div className="p-8 text-center text-white/85">Loading...</div>
            ) : notifications.length === 0 ? (
              <div className="p-8 text-center text-white/85">
                <Bell className="w-12 h-12 mx-auto mb-3 text-white/50" />
                <p>No notifications yet</p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`group relative border-b border-white/10 transition-colors hover:bg-white/10 ${
                    !notification.isRead ? 'bg-blue-500/10' : ''
                  }`}
                >
                  <div
                    className="flex items-start gap-3 p-4 pr-10 cursor-pointer"
                    onClick={() => handleNotificationClick(notification)}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      {getNotificationIcon(notification.type)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-medium text-white/95 text-sm leading-snug">
                          {notification.title}
                        </p>
                        {!notification.isRead && (
                          <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-1"></span>
                        )}
                      </div>
                      <p className="text-sm text-white/80 mt-1 line-clamp-2">
                        {notification.message.split(/\b((?:[A-Z][a-z]+ )+[A-Z][a-z]+)\b/).map((part, i) =>
                          i % 2 === 1 ? <span key={i} className="font-bold text-white">{part}</span> : part
                        )}
                      </p>
                      <p className="text-xs text-white/85 mt-2">
                        {formatTimeAgo(notification.createdAt)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => deleteNotification(notification.id, e)}
                    className="absolute top-3 right-3 p-1.5 opacity-0 group-hover:opacity-100 hover:bg-white/20 rounded-md transition-all"
                    title="Dismiss"
                    aria-label="Dismiss notification"
                  >
                    <X className="w-3.5 h-3.5 text-white/85" />
                  </button>
                </div>
              ))
            )}
          </div>

          {notifications.length > 0 && (
            <div className="p-3 border-t border-slate-200 text-center">
              <button
                onClick={() => {
                  setIsOpen(false)
                  router.push('/doctor/notifications')
                }}
                className="text-sm text-blue-500 hover:text-blue-600 font-medium"
              >
                View all notifications
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
