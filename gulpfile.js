var gulp = require("gulp");
var babelify = require("babelify");
var browserify = require("browserify");
var source = require("vinyl-source-stream");


gulp.task("build", function(){
    return browserify({
        entries: ["./js/app.js"]
    })
        .transform(babelify)
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("./build"));
});