// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
   // Your custom configs here
   {
      rules: {
         // // Tắt rule html-self-closing
         // 'vue/html-self-closing': 'off', // Tắt rule tự đóng thẻ trong Vue

         // // Chuyển tất cả các rule còn lại thành cảnh báo (warn)
         // 'no-console': 'warn', // Show a warning if console.log is used
         // 'vue/max-attributes-per-line': [
         //    'warn',
         //    { singleline: 3, multiline: 1 },
         // ], // Customize Vue attribute rule
         // 'semi': ['warn', 'always'], // Enforce semicolons
         // 'quotes': ['warn', 'single'], // Enforce single quotes for strings
         // 'eqeqeq': ['warn', 'always'], // Enforce strict equality (=== and !==)
         // 'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }], // Warn about unused variables (allow unused args starting with '_')
         // 'curly': ['warn', 'all'], // Enforce curly braces for all control statements
         // 'indent': ['warn', 3], // Enforce 2 spaces for indentation
         // 'no-trailing-spaces': 'warn', // Disallow trailing spaces
         // 'space-before-function-paren': ['warn', 'always'], // Enforce space before function parentheses
         // 'arrow-spacing': ['warn', { 'before': true, 'after': true }], // Enforce spacing around arrow functions
         // 'prefer-const': 'warn', // Enforce the use of 'const' when variables are not reassigned
         // 'camelcase': ['warn', { 'properties': 'always' }], // Enforce camelCase naming convention
         // 'no-magic-numbers': ['warn', { 'ignore': [0, 1] }], // Warn against magic numbers (except 0 and 1)
      },
   }
);
