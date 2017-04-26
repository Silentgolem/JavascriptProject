/// <binding ProjectOpened='watch' />
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', ['browserSync'], function (){
  gulp.watch('Javascript Project/*.html', browserSync.reload); 
  gulp.watch('Javascript Project/*.js', browserSync.reload);   
  gulp.watch('Javascript Project/*.css', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'Javascript Project'
    },
  })
})