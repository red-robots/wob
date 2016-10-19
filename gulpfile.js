/**
 * Created by fritz on 10/19/16.
*/

var gulp = require('gulp');
var webpack =require('webpack-stream');
var rename = require("gulp-rename");
var notify = require('gulp-notify');

gulp.task('default', ['webpack','watch']);
gulp.task('webpack', function() {
    return gulp.src('lib/main.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(notify("Webpack Complete!"))
        .pipe(rename("index.js"))
        .pipe(gulp.dest('./build/'));
});
gulp.task('watch',function() {
    gulp.watch('lib/**/*', ['webpack']);
});