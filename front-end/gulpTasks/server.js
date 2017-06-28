const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('server', ['watch'], function() {
  gulp.src('public').pipe(webserver({
    livereload: true,
    port: 3000,
    //Abrir browser automaticamente
    // open: true
  }))
})

gulp.task('watch', function() {
  //Se modificou html
  watch('app/**/*.html', () => gulp.start('app.html'))
  //Se modificou css
  watch('app/**/*.css', () => gulp.start('app.css'))
  //Se modificou js
  watch('app/**/*.js', () => gulp.start('app.js'))
  //Se modificou arquivos em assets
  watch('assets/**/*.*', () => gulp.start('app.assets'))
})
