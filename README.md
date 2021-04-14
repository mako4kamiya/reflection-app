# 簡易仕様書

### アプリ名：Reflection App  

### リポジトリURL：https://github.com/mako4kamiya/reflection-app

### 作者：神谷真子

### 作成に至った経緯
知人エンジニアから実際の案件としてReact.js + Node.js + Express + MongoDB組み合わせ(MERN stack)でSPAができることを知り、何か作って見たいと思っていた。
わたし自信が参加していたコーチングのmeetupで、振り返り内容の記録ツールとしてGoogleスプレッドシートを使用していたため、Webアプリ化してデータベースに保存して見たいと思った。

### アプリの内容
コーチングmeetupでの振り返りを記録し、いつでも見返すことができるアプリ。
コーチはメンバーの記録を見ることができる。

### コンセプト
ユーザーが使いやすいReflection App（振り返りアプリ）

### こだわったポイント
- ユーザーmeetupでの振り返りの内容をいつでもさっと確認できるように、ログイン後のホーム画面はユーザーコンテンツ画面（振り返り一覧）にした。

### デザイン面でこだわったポイント
- クライアントの雰囲気に合わせて、シンプルで新鮮な印象を与えるNeumorphismデザインを採用した。



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
- 新規登録機能
- ログイン機能
- 振り返り内容の記録機能
- 振り返り内容の一覧表示機能
- ユーザー情報表示機能
- 権限ごとの画面表示機能
- Reflection App - ホーム画面
![Reflection App - ホーム画面](https://user-images.githubusercontent.com/52666344/114739913-4c859980-9d84-11eb-9d62-6685d81e7510.png)

### ルーティング・DB設計
#### Node.js
| HTTP | url              | 意味                   |
|---   |---               |---                    | 
| POST | /api/auth/signup | ユーザー登録            |
| POST | /api/auth/signin | ログイン                |
| post | /api/create      | 振り返り内容の登録        |
| GET  | /api/test/all    | パブリックコンテンツの取得   |
| GET  | /api/test/user   | ユーザーコンテンツの取得    |
| GET  | /api/test/mod    | モデレーターコンテンツの取得 |
| GET  | /api/test/admin  | 管理者コンテンツの取得     |
| GET  | /api/reflections | 振り返り内容の取得        |


#### React.js
| HTTP | url        | 意味                   |
|---   |---         |---                    | 
| GET  | /signup    | ユーザー登録画面         |
| GET  | /login     | ログイン画面             |
| GET  | /, /public | パブリックコンテンツ画面     |
| GET  | /, /user   | ユーザーコンテンツ画面     |
| GET  | /mod       | モデレーターコンテンツ画面  |
| GET  | /admin     | 管理者コンテンツ画面      |
| GET  | /add       | 振り返り内容も登録画面     |
| GET  | /profile   | ユーザー情報表示画面      |

#### データベース
| Users Collection | Role Collection | Reflection collection |
|---               |---              |---                    |
| name             | name            | user_id               |
| email            |                 | first_condition       |
| password         |                 | realization           |
| roles            |                 | action                |
|                  |                 | last_condition        |

#### 「オンラインホワイトボードmiro」を使用して要件定義やアクティビティ図の検討を行った。
![reflection_app](https://user-images.githubusercontent.com/52666344/114733562-6ae89680-9d7e-11eb-9660-0bd3bf32ce93.png)



***

## 自己評価
今回作ったアプリは、私が学びたい技術の組み合わせでチュートリアルを進めながら実装したため、実用的なものにならなかった。
技術はクライアントの欲しい機能や要望を実装するために最適な物を選ぶことが大切だと思うので、これからもアンテナを張っていろんな技術に触れていこうと思う。

### スキル習得や学習面での評価
- チュートリアルを進めながら、気になる用語を調べて[ブログ](https://makolog.xyz/tag/react-js/)にまとめていくことで理解を深めていった。

### 学べたこと
 - npmコマンドによるモジュールなどのインストール、require・inportして使用する流れ
 - サーバーサイドでデータベースとのやりとりを行い、クライアントサイドではJSONデータのを受け取って必要箇所のみを変更するSPA開発の仕組み
 - MongoDBのコマンド操作、SQLデータベースと違い、ドキュメント型データベースは事前に列名やデータタイプを設定する必要がないこと

### 課題
- Promiseなど非同期処理などJavascriptの基礎、React・Nodeの基礎の理解がまだまだ薄かった。「現代のJavascriptチュートリアル」にそって習得する。
- ログイン機能を実装するにあたって、実装したことのなかったJWTを選択したが、クライアントサイドのローカルストレージにトークンを保存する方法では、XSSで悪意のあるJSに情報を抜き取られてしまう恐れがあり、セキュリティを強化するためには、「Access Token および Refresh Token」の概念の理解が必要である。



## 参考サイト・リンク集
- [Node.js + MongoDB: User Authentication & Authorization with JWT](https://bezkoder.com/node-js-mongodb-auth-jwt/)
- [React Hooks: JWT Authentication (without Redux) example](https://bezkoder.com/react-hooks-jwt-auth/)
- [mongoose](https://mongoosejs.com/docs/guide.html)
- [React](https://ja.reactjs.org/docs/getting-started.html)
- [ui-neumorphism](https://akaspanion.github.io/ui-neumorphism/)
- [themesberg neumorphism-ui](https://demo.themesberg.com/neumorphism-ui/) 
- [春を感じる淡い色を集めてみた](https://pulpxstyle.com/post-214/)
- [アイコン React - Material Design Icons](https://www.npmjs.com/package/@mdi/react)
