var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var zip = require('gulp-zip');
var browserSync = require('browser-sync');
var less = require('gulp-less');
var clean = require('gulp-clean');
var autoprefixer = require('gulp-autoprefixer');

//启动
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

//监控改动并自动刷新任务;

//命令行使用gulp auto启动;
//
gulp.task('auto',function() {
        gulp.watch('./src/less/*.less',['less']);
        gulp.watch('./**/*.*').on('change',browserSync.reload)
    });

// //less
gulp.task('less',function () {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
})

gulp.task('default',['server','auto']);
//
// //css
// gulp.task('css', function () {
//     gulp.src('src/css/*.css')
//         .pipe(cssnano())
//         .pipe(gulp.dest('dist/css'))
// })
//
// //js
// gulp.task('js', function () {
//     gulp.src('src/js/*.js')
//         .pipe(concat('merge.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js/'));
// });
//
// //图片
// gulp.task('img', function () {
//     gulp.src('src/img/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/imgs'));
// });
//

