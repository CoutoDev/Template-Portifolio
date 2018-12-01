// imports que o gulp utilizara
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    clean = require('gulp-clean'),
    autoPrefixer = require('gulp-autoprefixer'),
    uncss = require('gulp-uncss'),
    include = require('gulp-file-include');


gulp.task('clean', function(){
    return gulp.src('dist')
    .pipe(clean())
})
// Copia arquivos da src para a dist de forma seletiva
gulp.task('copy', function(){
    gulp.src([
    'src/components/**/*', 
    'src/css/**/*','src/js/**/*', 
    'src/imagens/**/*'],
        {"base": "src"})
    .pipe(gulp.dest('dist'))
})

// Automação do sass
gulp.task('sass', function(){
    // Origem (src)
    gulp.src('./src/sass/**/*.scss')
    //pipe seria a ligação entre os dois pontos height: 100%;;
    .pipe(sass())

    .pipe(autoPrefixer())

    // Destino (dest)
    .pipe(gulp.dest('./dist/css/'));
})
// Atualiza a pasta dist com arquivos html da src
gulp.task('html', function(){
    return gulp.src('./src/**/*.html')
    
    .pipe(include())

    .pipe(gulp.dest('./dist/'));
})

gulp.task('uncss', ['html'], function(){
    return gulp.src('./dist/components/**/*.css')
        .pipe(uncss({
            html: ['./dist/*.html']
            })
        )
        .pipe(gulp.dest('./dist/components/'))

})

// Inicia o gulp server, motirando alterações em todos os arquivos e atualizando automaticamente a dist e o navegador
gulp.task('server', ['uncss'], function(){
    browserSync.init({
        server:{
            baseDir: 'dist'
        }
    })

    gulp.watch('./dist/**/*').on('change', browserSync.reload)
    
    gulp.watch('./src/sass/**/*.scss', ['sass'])
    gulp.watch('./src/**/*.html', ['html'])
})