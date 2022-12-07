const { resolve } = require('path');

module.exports = {
  parserOptions: {
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration
    // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#eslint
    // Needed to make the parser take into account 'vue' files
    extraFileExtensions: ['.vue'],
    parser: '@typescript-eslint/parser',
    project: resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
  },
  extends: [
    `eslint:recommended`,
    `plugin:@typescript-eslint/recommended`,
    `plugin:vue/vue3-recommended`,
    `airbnb-base`,
  ],
  overrides: [
    {
      files: [`*.vue`],
      rules: {
        indent: `off`,
        'sort-keys': `off`,
        'vue/sort-keys': [`warn`, `asc`],
      },
    },
    {
      // disable the rule specifically for JavaScript files
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': `off`,
        '@typescript-eslint/explicit-module-boundary-types': `off`,
      }
    },
    {
      files: [`*.enum.ts`],
      rules: {
        'no-shadow': `off`, // false positives in enum files
      },
    },
  ],
  plugins: [
    `@typescript-eslint`,
    `import-quotes`,
    `vue`,
  ],
  rules: {
    '@typescript-eslint/array-type': [`error`, { 'default': `array` }],
    '@typescript-eslint/ban-ts-comment': [`warn`],
    '@typescript-eslint/default-param-last': [`error`],
    '@typescript-eslint/explicit-function-return-type': [`error`, {
      'allowHigherOrderFunctions': false,
    }],
    '@typescript-eslint/func-call-spacing': [`error`],
    '@typescript-eslint/member-delimiter-style': [`error`, {
      'multiline': {
        'delimiter': 'semi',
        'requireLast': true,
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': false ,
      },
    }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        custom: {
          regex: '^I[A-Z]',
          match: true
        },
        format: ['PascalCase'],
        selector: 'interface'
      },
      {
        custom: {
          regex: '^E[A-Z]',
          match: true
        },
        format: ['PascalCase'],
        selector: 'enum',
      },
      {
        custom: {
          regex: '^T[A-Z]',
          match: true
        },
        format: ['PascalCase'],
        selector: 'typeAlias',
      },
    ],
    '@typescript-eslint/no-dupe-class-members': ['error'],
    '@typescript-eslint/no-empty-function': ['error'],
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-vars': [`error`],
    '@typescript-eslint/no-useless-constructor': ['error'],
    '@typescript-eslint/space-before-function-paren': [`error`, {
      anonymous: `never`,
      asyncArrow: `always`,
      named: `never`,
    }],
    'arrow-body-style': `off`,
    'arrow-parens': [`error`, `as-needed`],
    'block-scoped-var': `warn`,
    'class-methods-use-this': `off`,
    'default-param-last': `off`,
    'function-paren-newline': "off",
    'func-call-spacing': `off`,
    'guard-for-in': [`warn`],
    'import/default': [`error`],
    'import/export': [`error`],
    'import/extension': 0,
    'import/extensions': [
      `off`,
      {
        ignorePackages: true,
        js: `never`,
        jsx: `never`,
        ts: `never`,
        tsx: `never`,
      },
    ],
    'import/first': `off`,
    'import/named': [`error`],
    'import/namespace': [`error`],
    'import/no-cycle': [`off`],
    'import/no-extraneous-dependencies': `off`,
    'import/no-unresolved': `off`,
    'import/prefer-default-export': `off`,
    'import-quotes/import-quotes': [1, `single`],
    'indent': [`error`, 2, {
      SwitchCase: 1,
    }],
    'keyword-spacing': [
      `error`,
      {
        after: true,
        before: true,
        overrides: {
          catch: { after: false },
          for: { after: false },
          if: { after: false },
          switch: { after: false },
        },
      },
    ],
    'linebreak-style': 0,
    'lines-between-class-members': `off`,
    'max-len': [`warn`, {
      code: 200,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
    }],
    'no-console': [`warn`, { allow: [`error`, `groupCollapsed`, `groupEnd`, `info`, `trace`, `warn`] }],
    'no-continue': `off`,
    'no-dupe-class-members': 'off',
    'no-else-return': `warn`,
    'no-empty-function': 'off',
    'no-nested-ternary': `warn`,
    'no-param-reassign': [
      `warn`,
      {
        props: false,
      },
    ],
    'no-plusplus': `off`,
    'no-redeclare': ['off'],
    'no-restricted-syntax': [
      `warn`,
      `ForInStatement`,
      `LabeledStatement`,
      `WithStatement`,
    ],
    'no-return-assign': [`error`],
    'no-shadow': 'off',
    'no-spaced-func': `off`,
    'no-unused-expressions': [`error`, { allowTernary: true }],
    'no-unused-vars': `off`,
    'no-useless-constructor': 'off',
    'no-void': `off`,
    'prefer-const': [`error`, { ignoreReadBeforeAssign: false }],
    'prefer-destructuring': `warn`,
    'prefer-promise-reject-errors': `off`,
    quotes: [`error`, `backtick`],
    semi: [`error`, `always`],
    'sort-keys': [`warn`, `asc`],
    'space-before-function-paren': "off",
    'vue/attribute-hyphenation': [`error`, `always`],
    'vue/attributes-order': [`warn`, {
      alphabetical: true,
      order: [
        `CONDITIONALS`,
        `LIST_RENDERING`,
        `DEFINITION`,
        `RENDER_MODIFIERS`,
        `GLOBAL`,
        `UNIQUE`,
        `TWO_WAY_BINDING`,
        `OTHER_DIRECTIVES`,
        `OTHER_ATTR`,
        `EVENTS`,
        `CONTENT`,
      ],
    }],
    'vue/component-name-in-template-casing': [`error`, `PascalCase`],
    'vue/component-tags-order': [`error`, { order: [`template`, `script`, `style`] }],
    'vue/first-attribute-linebreak': [`error`, {
      multiline: `below`,
      singleline: `beside`,
    }],
    'vue/html-closing-bracket-newline': [`error`, {
      multiline: `never`,
      singleline: `never`,
    }],
    'vue/html-closing-bracket-spacing': [`error`],
    'vue/html-end-tags': [`error`],
    'vue/html-indent': [`error`, 2],
    'vue/html-quotes': [`error`, `double`],
    'vue/html-self-closing': [`error`, {
      html: {
        component: `always`,
        normal: `never`,
        void: `always`,
      },
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 1
      },
      "multiline": {
        "max": 1
      }
    }],
    'vue/multiline-html-element-content-newline': [`error`],
    'vue/multi-word-component-names': 'off',
    'vue/mustache-interpolation-spacing': [`error`],
    'vue/component-definition-name-casing': [`error`, `PascalCase`],
    'vue/no-multi-spaces': [`error`],
    'vue/no-multiple-template-root': [`off`],
    'vue/no-spaces-around-equal-signs-in-attribute': [`error`],
    'vue/no-template-shadow': [`warn`],
    'vue/no-use-v-if-with-v-for': [`error`],
    'vue/no-v-html': [`warn`],
    'vue/order-in-components': [`error`, {
      order: [
        `name`,
        `components`,
        `mixins`,
        `validate`,
        `model`,
        `emits`,
        `data`,
        `computed`,
        `props`,
        `middleware`,
        `LIFECYCLE_HOOKS`,
        `methods`,
        `watch`,
      ],
    }],
    'vue/prop-name-casing': [`error`],
    'vue/require-default-prop': [`error`],
    'vue/require-prop-types': [`error`],
    'vue/require-v-for-key': `error`,
    'vue/script-indent': [`error`, 2, {
      baseIndent: 1,
      switchCase: 1,
    }],
    'vue/script-setup-uses-vars': `error`,
    'vue/singleline-html-element-content-newline': [`error`],
    'vue/this-in-template': [`error`],
    'vue/v-bind-style': [`error`],
    'vue/v-on-style': [`error`],
    'vue/valid-template-root': [`error`],
  },
}
