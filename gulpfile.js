var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function(){
    // Origem (src)
    gulp.src('./src/sass/**/*.scss')
    //pipe seria a ligação entre os dois pontos 
    .pipe(sass())

    // Destino (dest)
    .pipe(gulp.dest('./src/css/'));
})

gulp.task('listener', function(){
    gulp.watch('./src/sass/**/*.scss', ['sass'])
})
