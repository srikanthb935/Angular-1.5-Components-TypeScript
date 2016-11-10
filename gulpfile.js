var gulp = require('gulp');
// Include Our Plugins
var webServer = require('gulp-webserver');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json")
var del = require('del');

// Launch webserver and LiveReload
gulp.task('serve', function () {
    gulp.src(__dirname)
        .pipe(webServer({
            port: '9001',
            livereload: true,
            directoryListing: false,
            open: true,
            fallback: 'index.html'
        }));
});
gulp.task('ts-js', ['clean-dist'], function () {
    return gulp.src(['app/*.ts', 'app/**/*.ts', 'app/**/**/*.ts'])
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});
gulp.task('clean-dist', function () {
    return del('dist');
});