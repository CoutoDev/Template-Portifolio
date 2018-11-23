var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function(){
    // Origem (src)
    gulp.src('./src/sass/**/*.scss')
    //pipe seria a ligação entre os dois pontos 
    .pipe(sass())

    // Destino (dest)
    .pipe(gulp.dest('./src/css/'));
})

gulp.task('server', function(){
    browserSync.init({
        server:{
            baseDir: 'src'
        }
    })

    gulp.watch('./src/css/*.css').on('change', browserSync.reload)
    gulp.watch('./src/*.html').on('change', browserSync.reload)
    gulp.watch('./src/sass/**/*.scss', ['sass'])

})