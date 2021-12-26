const gulp = require('gulp'); 
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps'); 
const Fiber = require('fibers'); 
const dartSass = require('dart-sass'); 
const autoprefixer = require('autoprefixer'); 
const browserSync = require('browser-sync').create();
//const postcss = require('gulp-postcss'); 


const apfBrwsowsers = [ 
  'ie >= 8', // 익스플로러 버전 8 이상 
];

gulp.task('sass', function(){ 
  const options = {
    sass : { 
      outputStyle: 'compact', // 스타일:   nested(default),   expanded, compact, compressed 
      indentType: 'tab', // 들여쓰기 타입:    space(default),     tab 
      indentWidth: 1, // 들여쓰기 수: 2(default) 
      compiler: dartSass 
    }, 
    // postcss:[autoprefixer({
    //   overrideBrowserslist: apfBrwsowsers,
    // }) ]
  };
  return gulp
    .src("scss/*.scss") // 불러올 scss 위치 지정
    .pipe(sourcemaps.init()) 
    .pipe(sass({fiber:Fiber}).on('error', sass.logError))
    //.pipe(postcss(options,postcss))
    .pipe(sourcemaps.write('./css')) // 저장할 map 저장 위치 지정
    .pipe(gulp.dest("css")) // 변환된 css 저장 위치 지정
    .pipe(browserSync.stream());
   });
   gulp.task('browserSync', function() { 
     browserSync.init({ 
       server: { 
         baseDir: './', // 서버에 띄울 폴더 위치 지정 
        directory: false 
      } 
    }); 
    gulp.watch("css/*").on("change", browserSync.reload); // src 안의 파일들을 감시하고 있다가, 내용이 변동되면 재실행
    gulp.watch('scss/*.scss',sass);
    gulp.watch('scss/*.scss').on("change", sass);
    gulp.watch('scss/*.scss').on('change',browserSync.reload);
    gulp.watch('*.html').on('change',browserSync.reload);
    gulp.watch('./js/*.js').on('change',browserSync.reload);   
   });


   gulp.task( 
     "default", 
     gulp.parallel("browserSync","sass")      
    );