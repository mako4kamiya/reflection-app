// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");

// App.scssをタスクを作成する
gulp.task("default", function() {
  // App.scssファイルを取得
    return (
        gulp
        .src("src/css/App.scss")
        // Sassのコンパイルを実行
        .pipe(sass())
        // cssフォルダー以下に保存
        .pipe(gulp.dest("src/css"))
    );
});