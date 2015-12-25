var gulp = require('gulp');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var compass = require('gulp-compass');
var	browserSync = require('browser-sync');

gulp.task('server', function() {
	browserSync({
		port: 9000,
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('reload', function() {
	gulp.watch([
		'app/pages/*.html',
		'app/js/**/*.js',
		'app/css/**/*.css'
	]).on('change', browserSync.reload);
});
var jadePath = 'app/markups/_pages/*.jade';
gulp.task('jade', function() {
	var YOUR_LOCALS = {};

	gulp.src(jadePath)
			.pipe(plumber())
			.pipe(jade({
				locals: YOUR_LOCALS,
				pretty : '\t',
			}))
			.pipe(gulp.dest('app'))
});



gulp.task('compass', function() {
	gulp.src('app/sass/main.scss')
			.pipe(plumber())
			.pipe(compass({
				config_file: 'app/config.rb',
				css: 'app/css',
				sass: 'app/sass'
			}))
});


gulp.task('watch', function(){
	gulp.run('server');
	gulp.run('reload');
	gulp.watch(jadePath, ['jade']);
	gulp.watch('app/sass/**/*.scss', ['compass'])
});