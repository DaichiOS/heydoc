import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable unused vars warnings - common in landing pages with demo code
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
      
      // Allow unescaped entities - common in marketing copy
      "react/no-unescaped-entities": "off",
      
      // Allow any type - useful for quick prototyping
      "@typescript-eslint/no-explicit-any": "off",
      
      // Disable console warnings - useful for debugging
      "no-console": "off",
      
      // Allow empty functions
      "@typescript-eslint/no-empty-function": "off",
      
      // Allow unused parameters (common with event handlers)
      "@typescript-eslint/no-unused-params": "off",
      
      // Allow missing return types
      "@typescript-eslint/explicit-function-return-type": "off",
      
      // Allow implicit returns
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
];

export default eslintConfig;
