# 簡易仕様書

### アプリ名：Reflection App  



## 開発環境
### 動作対象ブラウザ
Chrome 89.0.4389.114

### 開発言語・フレームワーク・データーベース
- React.js 16.14.0
- Node.js 14.16.0
- MongoDB 4.4.0
- mongoose 5.11.13


## アプリケーション機能
### 機能一覧
- 新規登録・ログイン機能
- リフレクション記録機能
- リフレクション一覧表示機能
- ユーザー情報表示機能
- 権限ごとの画面表示機能

### ルーティング・DB設計
#### Node.js
| HTTP | url              | 意味                     |
|---   |---               |---                       | 
| POST | /api/auth/signup | 新規登録                  |
| POST | /api/auth/signin | ログイン                  |
| POST | /api/test/all    | パブリックコンテンツの取得  |
| GET  | /api/test/user   | ユーザーコンテンツの取得    |
| GET  | /api/test/mod    | モデレーターコンテンツの取得 |
| GET  | /api/test/admin  | 管理者コンテンツの取得      |
| GET  | /api/reflections | リフレクションの取得        |
| GET  | /api/create      | リフレクションの登録        |

#### React.js
| HTTP | url              | 意味                     |
|---   |---               |---                       | 
| POST | /api/auth/signup | 新規登録                  |
| POST | /api/auth/signin | ログイン                  |
| POST | /api/test/all    | パブリックコンテンツの取得  |
| GET  | /api/test/user   | ユーザーコンテンツの取得    |
| GET  | /api/test/mod    | モデレーターコンテンツの取得 |
| GET  | /api/test/admin  | 管理者コンテンツの取得      |
| GET  | /api/reflections | リフレクションの取得        |
| GET  | /api/create      | リフレクションの登録        |

#### データベース
| Users Collection | Role Collection | Reflection collection |
|---               |---              |---                    |
| name             | name            | user_id               |
| email            |                 | first_condition       |
| password         |                 | realization           |
| roles            |                 | action                |
|                  |                 | last_condition        |


## このアプリについて
### 作成に至った経緯
知人エンジニアから実際の案件としてReactとNodeとMongoDBの組み合わせでSPAができることを知り、何か作って見たいと思っていた。
わたし自信が参加していたコーチングのmeetupで、記録ツールとしてGoogleスプレッドシートを使用していたため、Webアプリ化してデータベースに保存して見たいと思った。

### アプリの内容
コーチングmeetupでの振り返りを記録し、いつでも見返すことができるアプリ。
コーチはメンバーの記録を見ることができる。

### コンセプト
ユーザーが使いやすいReflection App（振り返りアプリ）

### こだわったポイント
- ユーザーが使いやすい

### デザイン面でこだわったポイント
- クライアントの雰囲気に合わせて、シンプルで新鮮な印象を与えるNeumorphismデザインを採用した


### 自己評価


<details>
  <summary>
    見出し部分。ここをクリック。
  </summary>
  <div>

ここが隠れてる部分。

  </div>
</details>
