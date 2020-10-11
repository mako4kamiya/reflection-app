// ミドルウエアの読み込み
const express = require("express");
const cors = require("cors");

// expressのインスタンス作成
const app = express();

// CORS設定：http://localhost:8081 をセットする
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Hello, World!" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});