var gulp = require('gulp'),
	watch = require('gulp-watch'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');
	reload = browserSync.reload;

var compileSass = function() {
	return gulp.src('./styles.scss')
		.pipe(sass(
			{ 
				errLogToConsole: true, 
				// sourceComments: 'map' // broken due to nan dependency
			}))
		.pipe(gulp.dest('.')).pipe(reload({"stream": true}));
}

gulp.task("default", function() {
	browserSync({
		server: {
			baseDir: "."
		}
	});

	compileSass();

	gulp.src('index.html')
		.pipe(watch(function(file) {
			return file.pipe(reload({"stream": true }));
		}));

	watch({ glob: ['../*.scss', '../foundation-modifiers/**/*.scss'] }, function() {
		return compileSass();
	});
});