import eslint from '@eslint/js'
import pluginTs from 'typescript-eslint'
import globals from 'globals'
import pluginImport from 'eslint-plugin-import-x'
import pluginTsParser from '@typescript-eslint/parser'
import pluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'

export default pluginTs.config(
  { ignores: ['**/cache/**'] },
  eslint.configs.recommended,
  pluginTs.configs.recommendedTypeChecked,
  pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        parser: pluginTsParser,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: ['.vue'],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
      },
    },
    extends: [
      pluginImport.flatConfigs.recommended,
      pluginImport.flatConfigs.typescript,
    ],
    settings: {
      'import-x/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
      'import-x/internal-regex': '^~/',
    },
    rules: {
      'import-x/no-named-as-default-member': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    plugins: {
      '@stylistic': stylistic,
    },
    extends: [
      stylistic.configs['recommended-flat'],
    ],
  },
)
