# 1.プロジェクト概要

React + Vite + Materiak UIの検証用プロジェクト  
コンポーネントの活用法やレイアウトの構成を確認する

# 2.技術スタック

React:19.2.0  
vite:7.2.4  
mui:7.3.7

# 3.コンポーネント設計

src/  
├── components/ # 汎用的な部品（UIライブラリに近いもの）  
│ ├── atoms/  
│ └── molecules/ # ここに SelectableTreeView.tsx など  
├── features/ # 機能単位（今回なら「ItemSelection」など）  
│ └── ItemSelection/  
│ ├── components/ # この機能でしか使わない部品  
│ ├── hooks/ # この機能専用のロジック  
│ └── types/ # 型定義  
├── hooks/ # プロジェクト共通のフック（useAxiosなど）  
├── context/ # AuthContext.tsx など  
└── pages/ # 各画面のルートコンポーネント

# 4.データの流れ

# 5.起動方法

`npm run dev`
