
const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload

const server_root = "./_site"

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: server_root
        }
    })

    gulp.watch(`${server_root}/**/*.*`).on('change', reload)
})