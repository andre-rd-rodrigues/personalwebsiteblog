module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true // Defines things like process.env when generating through node
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:cypress/recommended"
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest", // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  plugins: ["react", "import", "cypress"],
  root: true, // For configuration cascading.
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "cypress/no-async-tests": "error",
    "cypress/no-pause": "error",
    "no-unused-vars": "warn",
    "import/order": [
      "warn",
      {
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before"
          },
          {
            pattern: "styles",
            group: "external",
            position: "after"
          }
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          caseInsensitive: true,
          order: "asc"
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ]
      }
    ]
  },

  settings: {
    react: {
      version: "detect" // Detect react version
    }
  }
};
