import antfu from '@antfu/eslint-config'
import eslintParserTypeScript from '@typescript-eslint/parser'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'

export default antfu(
  {
    nextjs: true,
    typescript: true,
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
    stylistic: {
      indent: 2,
    },
    ignores: ['public/**', '**/*.md'],
    rules: {
      'regexp/no-unused-capturing-group': 'warn',
      'no-console': 'off',
      'ts/no-use-before-define': 'warn',
      'unused-imports/no-unused-vars': 'warn',
      'no-cond-assign': 'warn',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: eslintParserTypeScript,
      parserOptions: {
        project: true,
      },
    },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
      ...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,
      'better-tailwindcss/enforce-consistent-line-wrapping': [
        'warn',
        { group: 'never', preferSingleLine: true, printWidth: 80 },
      ],
      'better-tailwindcss/no-unregistered-classes': [
        'warn',
        {
          detectComponentClasses: true,
          ignore: [],
        },
      ],
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'app/globals.css',
      },
    },
  },
)
