const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buff = require('vinyl-buffer');
const watchify = require('watchify');
const copy = require('gulp-copy');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const gzip = require('gulp-gzip');



function compile(watch, prod) {
	var bundler, bf = browserify('src/js/client/app.js', { debug: true });

	if (watch) {
		bundler = watchify(bf).transform(babelify);
		bundler.on('update', function() {
			console.log('-> bundling...');
			rebundle();
		});
	} else {
		bundler = bf.transform(babelify);
	}

	function rebundle() {
		var p = bundler.bundle()
			.on('error', function(err) { console.error(err); this.emit('end'); })
			.pipe(source('app.js'))
			.pipe(buff());
		
			if (prod){
				p = p.pipe(uglify())
			} else {
				p = p.pipe(sourcemaps.init({ loadMaps: true }))
				.pipe(sourcemaps.write('./'));
			}
			
			p.pipe(gzip())
			.pipe(gulp.dest('./dist'));
	}


	rebundle();
}

gulp.task('js', function (cb) {
	compile(false, true);
});

gulp.task('js:watch', function (cb) {
	compile(true, false);
});



gulp.task('sass', () => {
	return gulp.src('src/sass/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(gzip())
		.pipe(gulp.dest('dist'));
});

gulp.task('sass:watch', function () {
	// gulp.watch('src/sass/**/*.scss', ['sass']);
	watch('src/sass/**/*.scss', (events, done) => {
        gulp.start('sass');
    });
});


gulp.task('index', function (cb) {
	return gulp.src('src/index.html')
		.pipe(copy('dist/', {prefix: 1}))
});

gulp.task('index:watch', function (cb) {
	watch('src/index.html', (events, done) => {
        gulp.start('index');
    });
});

gulp.task('build', ['index', 'js', 'sass'])
gulp.task('default', ['index', 'sass', 'sass:watch', 'js:watch', 'index:watch'])