module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb', // Airbnb's base JS and React style guide
    'airbnb/hooks', // Airbnb's hooks rules
    'plugin:react/recommended', // Recommended React rules
  ],
  parserOptions: {
    ecmaVersion: 12, // ECMAScript 2021
    sourceType: 'module', // Allow use of ES6 modules
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
  },
  plugins: [
    'react', // React plugin
  ],
  rules: {
    // Add or modify rules as needed
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }], // Allow .jsx and .js file extensions for JSX
    'react/prop-types': 'off', // Disable prop-types rule, if not using TypeScript
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/jsx-no-bind': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react/function-component-definition': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
  overrides: [
    {
      files: ['.eslintrc.js'], // Exclude this config file
      parserOptions: {
        project: null, // No specific project settings for this file
      },
    },
  ],
};
