module.exports = {
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    sourceType: "module"
  },

  env: {
    es6: true,
    node: true,
    mocha: true
  },

  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["import", "prettier", "mocha"],

  globals: {
    document: false,
    navigator: false,
    window: false,
    _: true,
    $: true,
    sequelize: true,
    Sequelize: true,
    POS_BASE_URL: true,
    PARTNER_BASE_URL: true,
    request: true,
    expect: true,
    should: true,
    Bootstrap: true
  },

  rules: {
    "arrow-parens": ["error", "always"],
    "no-underscore-dangle": 0,
    "no-console": "error",
    "mocha/no-exclusive-tests": "error",
    "prettier/prettier": [
      "error",
      {
        semi: true,
        printWidth: 120,
        singleQuote: true,
        arrowParens: "avoid"
      }
    ],
    "object-shorthand": ["error", "properties"],
    "no-return-assign": ["error", "except-parens"],
    "func-names": ["error", "never"],
    "comma-dangle": ["error", "never"],
    "no-unused-vars": [
      "error",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "one-var": ["error", { initialized: "never", uninitialized: "always" }],
    "no-param-reassign": ["error", { props: false }],
    "max-len": [
      "error",
      120,
      {
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        ignoreStrings: true
      }
    ]
  }
};
