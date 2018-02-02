var gulp = require('gulp'),
less = require('gulp-less'),
livereload = require('gulp-livereload')
http = require('http'),
st = require('st');

gulp.task('less', function() {
gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('watch', ['server'], function() {
    livereload.listen();
    gulp.watch('less/*.*', ['less']);
});

gulp.task('server', function(done) {
    http.createServer(
      st({ path: __dirname + '/', index: 'index.html', cache: false })
    ).listen(8080, done);
  });