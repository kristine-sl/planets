import gulp from 'gulp'
import deleteFolder from 'del'
import jade from 'gulp-jade'
import sass from 'gulp-sass'
import babel from 'gulp-babel'
import autoprefix from 'gulp-autoprefixer'
import minifyCss from 'gulp-clean-css'
import ngAnnotate from 'gulp-ng-annotate'
import minifyJavaScript from 'gulp-uglify'
import browserSync from 'browser-sync'
import concat from 'gulp-concat'
import browserify from 'browserify'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'

const server = browserSync.create(); 

const buildCss = () => {
	return gulp.src( 'src/sass/**' )
		.pipe( sass() )
		.pipe( autoprefix() )
		//.pipe( minifyCss() )
		.pipe( gulp.dest( 'public' ) )
		.pipe( server.reload( { stream: true } ) )
}

const buildHtml = () => {
	return gulp.src( 'src/index.jade' )
		.pipe( jade() )
		.pipe( gulp.dest( 'public' ) )
}

const buildJavaScript = () => {
	var bundler = browserify( './src/js/app.js', { debug: true } ).transform( babelify );

	return bundler.bundle()
		.pipe( source( 'app.js' ) )
		.pipe( buffer() )
		.pipe( ngAnnotate() )
		// .pipe( minifyJavaScript() )
		.pipe( gulp.dest( 'public' ) )
}

const clean = () => {
	return deleteFolder( 'public' )
}

const moveAssets = () => {
	return gulp.src( 'src/assets/**' )
		.pipe( gulp.dest( 'public' ) )
}

const connect = () => {
	return server.init( {
        server: "./public/"
    } )
}

const watch = () => {
	gulp.watch( 'src/index.jade', buildHtml );
	gulp.watch( 'src/js', buildJavaScript );
	gulp.watch( 'src/sass', buildCss );
	gulp.watch( 'src/assets', moveAssets );

	gulp.watch( 'public' ).on( 'change', server.reload );
}

const build = gulp.series( clean, gulp.parallel( buildCss, buildHtml, buildJavaScript ), moveAssets, gulp.parallel( connect, watch ) )

export default build;