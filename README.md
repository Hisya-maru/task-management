-アプリ名- 
To Do リスト

-アプリ概要- 
タスクの追加、削除、完了管理のできるシンプルなタスク管理アプリです。
フロントエンドはReactとCSS、バックエンドはExpressを使用し、Prismaを介してPostgreSQLと接続しています。
API通信によってタスクのCRUDを行います。

-使用技術- 
・React(フロントエンド)
・Express
・Prisma
・PostgreSQL
・Node.js

-主な機能- 
・タスク追加 
・タスク削除
・タスク完了切り替え

-データベース構成-
・id  Int　主キー
・title  string 　タスク名
・completed  Boolean　　完了状態
・createAt  DateTime　　作成日時
・updatedAt  DateTime　　更新日時

-API一覧-
・GET/api/todos
・POST/api/todos
・PUT/api/todos/id
・DELETE/api/todos/id

-工夫した点-
・バックエンドフォルダ構成をroutes/contorollers/libraryに分け保守性を高めました。
・フロントとバックを完全に分離し、ＡＰＩ通信で状態管理を行う構成を採用しました。

-画面イメージ- 
<img width="886" height="447" alt="image-2" src="https://github.com/user-attachments/assets/df1a236c-334e-4836-82f3-8cae10fa6d1a" />

-今後の改善予定- 
・緊急度に合わせたソートの実装 
・タスクの一括完了、削除機能
・ログイン、認証機能
