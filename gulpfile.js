const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
//const cleanCSS = require('gulp-clean-css');
//const  cssbeautify = require('gulp-cssbeautify');
//const compressCss = require('gulp-css-format-oneline')
const removeEmptyLines = require('gulp-remove-empty-lines');
const browserSync = require('browser-sync').create();


function style() {
    //1. where is my scss file
    //return gulp.src('./seoulwomen/src/scss/*.scss')
    return gulp.src('./scss/*.scss')
    //2. pass that file through sass complier
    .pipe(sass({outputStyle: 'compact'}).on('error',sass.logError))   
    .pipe(autoprefixer())
	//.pipe(cleanCSS({}))
	.pipe(removeEmptyLines())
	//.pipe(cssbeautify({indent: '',openbrace: 'end-of-line',autosemicolon: true}))
	///pipe(compactCss({clearLine: false,clearComment: false,merge: false,ext: null}))
    //3. where do I save the complie		
    .pipe(gulp.dest('./css'))	
	//pipe(removeEmptyLines(removeComments: true))
    //4. stream changes to all browser
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            basedir : './'
        }
    });

    gulp.watch('./scss/*.scss',style);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/*.js').on('change',browserSync.reload);    
}

exports.style = style;
exports.watch = watch;
