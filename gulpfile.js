
const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload
const sass        = require('gulp-sass')
const csso        = require('gulp-csso')
const autoprefixer = require('gulp-autoprefixer')

const server_root = "./_site"

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: server_root
        }
    })

    gulp.watch('styles/*.sass', ['sass'])
    gulp.watch(`${server_root}/**/*.*`).on('change', reload)
})

gulp.task('sass', function() {
    return gulp.src("styles/*.sass")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("styles"))
        .pipe(browserSync.stream())
})

gulp.task('csso', function () {
    return gulp.src('styles/*.css')
        .pipe(csso())
        .pipe(gulp.dest('styles'))
})