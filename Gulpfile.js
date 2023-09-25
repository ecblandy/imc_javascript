const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

function compilaStyles(){
    return gulp.src('./src/styles/main.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('dist/styles'))
}

function compilaScripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
}


exports.default = gulp.parallel(compilaStyles,compilaScripts)
exports.watch = () => {
    gulp.watch('./src/styles/*.scss', gulp.parallel(compilaStyles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(compilaScripts))
}