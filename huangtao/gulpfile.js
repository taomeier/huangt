var gulp = require('gulp');
var sass = require("gulp-sass");
var server = require("gulp-webserver");
var fs = require("fs");
var url = require('url')
var listData = require("./mock/data")
gulp.task("sass", function() {
    gulp.src("src/scss/*.{scss,sass}")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
});

gulp.task("server", function() {
    gulp.src('src')
        .pipe(server({
            port: 6060,
            open: true,
            host: "localhost",
            middleware: function(req, res, next) {
                if (req.url === '/favicon.ico') {
                    return;
                };
                var pathname = url.parse(req.url).pathname;
                pathname = pathname === '/' ? '/index.html' : pathname;
                if (req.url === '/api/list') {
                    res.end(JSON.stringify(listData))
                } else if (pathname === '/api/add') {
                    var info = url.parse(req.url, true).query;
                    info.message = [];
                    listData.data.unshift(info);
                    fs.writeFileSync("./mock/data.json", JSON.stringify(listData));
                    res.end('{"resule":1}')
                } else {
                    res.end(fs.readFileSync(require('path').join(__dirname, "src", pathname)))
                }
            }
        }))
});
gulp.task('watch', function() {
    gulp.watch("src/scss/*.{scss,sass}", ['sass'])
});
gulp.task('dev', ['server', 'watch'])