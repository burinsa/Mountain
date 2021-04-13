//подключаем модули галпа
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');

// Таски на стили css
function styles() {
    return gulp.src("./src/css/*.css")
    .pipe(concat('style.css'))
    .pipe(autoprefixer({
        overrideBrowserslist: ["last 4 versions",
        "ie >= 9",
        "> 5%"],
        cascade: false
    }))
    .pipe(gulp.dest('./build/css'))
}

// Таски на скрипты 
function scripts() {
    return gulp.src('./src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./build/js'))
}

function watch() {
    // следить за CSS файлами
    gulp.watch('./src/css/*.css', styles)
    // следить за JS файлами
    gulp.watch('./src/js/*.js', scripts)
}

// Таск вызывающий функцию 'styles'
gulp.task('styles', styles);

// Таск вызывающий функцию 'scripts'
gulp.task('scripts', scripts);

// Таск отслеживающий изменения
gulp.task('watch', watch);