import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unuserdPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';
export default tseslint.config(
  // 無視するファイルを指定
  { ignores: ['dist', 'node_modules'] },
  // 推奨設定
  js.configs.recommended,
  ...tseslint.configs.strict,
  // 個別設定
  {
    // 読み込みファイルの設定
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unuserdPlugin,
      import: importPlugin,
    },
    // 個別のルール
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'error',
      complexity: ['error', { max: 4 }],
      'unused-imports/no-unused-imports': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.jsのビルトインモジュール
            'external', // npmでインストールした外部ライブラリ
            'internal', // エイリアス等で設定した内部モジュール
            ['parent', 'sibling'], // 親や兄弟のファイル
            'index', // indexファイル
            'object', // オブジェクトのimport
            'type', // TypeScriptのtype
          ],
          pathGroups: [
            {
              pattern: '{react,react-dom/**}',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always', // グループごとに改行を入れる
        },
      ],
    },
  },
);
