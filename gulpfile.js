var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    include = require('gulp-file-include');

// Copia arquivos da src para a dist de forma seletiva
gulp.task('copy', function(){
    gulp.src(['src/components/**/*', 'src/css/**/*','src/js/**/*', 'src/imagens/**/*'], {"base": "src"})
    .pipe(gulp.dest('dist'))
})


gulp.task('sass', function(){
    // Origem (src)
    gulp.src('./src/sass/**/*.scss')
    //pipe seria a ligação entre os dois pontos 
    .pipe(sass())

    // Destino (dest)
    .pipe(gulp.dest('./dist/css/'));
})
// Atualiza a pasta dist com arquivos da src
gulp.task('html', function(){
    gulp.src('./src/index.html')
    
    .pipe(include())

    .pipe(gulp.dest('./dist/'));
})
// Inicia o gulp server, motirando alterações em todos os arquivos e atualizando automaticamente a dist e o navegador
gulp.task('server', function(){
    browserSync.init({
        server:{
            baseDir: 'dist'
        }
    })

    gulp.watch('./dist/**/*').on('change', browserSync.reload)
    
    gulp.watch('./src/sass/**/*.scss', ['sass'])
    gulp.watch('./src/**/*.html', ['html'])
})