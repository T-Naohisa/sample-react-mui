// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    // ルールの適用対象をTypeScriptファイルに限定
    files: ["**/*.{ts,tsx}"],
    // extendsでルールセットを指定
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    // languageOptionsでECMAScriptのバージョンやグローバル変数を指定
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    // pluginsで使用するプラグインを指定
    plugins: {
      prettier,
    },
    // rulesで個別のルールを指定
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.jsのビルトインモジュール
            "external", // npmでインストールした外部ライブラリ
            "internal", // エイリアス等で設定した内部モジュール
            ["parent", "sibling"], // 親や兄弟のファイル
            "index", // indexファイル
            "object", // オブジェクトのimport
            "type", // TypeScriptのtype
          ],
          pathGroups: [
            {
              pattern: "{react,react-dom/**}",
              group: "external",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          alphabetize: {
            order: "asc", // 昇順にソート
            caseInsensitive: false, // 大文字小文字を区別しない
          },
          "newlines-between": "always", // グループごとに改行を入れる
        },
      ],
      "prettier/prettier": "warn", // Prettierのルール違反を警告として表示
      "unused-imports/no-unused-imports": "error", // 未使用のインポートをエラーとして表示
    },
  },
  // storybookのルールセットを追加
  ...storybook.configs["flat/recommended"],
]);
