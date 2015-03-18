//* Autor: Esteban Vera
// Twitter: @kiokotzu
// Email:esteban.vg@outlook.com, esteban.vera@imagina.co */



/*------------------------------------*\
    $DEPENDECIAS
\*------------------------------------*/

var gulp        = require('gulp'),
    stylus      = require('gulp-stylus'),
    nib         = require('nib'),
    plumber     = require('gulp-plumber'),
    concat      = require('gulp-concat'),
    watch       = require('gulp-watch'),
    uglify      = require('gulp-uglify'),
    notify      = require("gulp-notify"),
    jshint      = require('gulp-jshint'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant');





/*------------------------------------*\
    $RUTAS
\*------------------------------------*/

var src_stylus = "assets/src/stylus/base.styl",
    //importante tener cuidado con el orden de este array, posee las rutas de los archivos .js, esto implica no tener conflictos entre librerias
    src_js     = ['assets/src/js/lib/jquery-1.11.0.min.js','assets/src/js/funciones.js','assets/src/js/**/*.js'],
    src_imgs   = "assets/src/imgs/*.*",
    dest_css   = "assets/dist/css",
    dest_js    = "assets/dist/js",    
    dest_imgs  = "assets/dist/imgs/";










/*------------------------------------*\
    $LINEA ERROR
\*------------------------------------*/
var linea = function(e){
  console.log(e);
  this.emit('termino');
}














/*----------------------------------------------------------------------------------------*\
    $TAREAS
\*----------------------------------------------------------------------------------------*/


/*------------------------------------*\
    $STYLUS
\*------------------------------------*/
gulp.task('stylus', function () {

  return gulp.src(src_stylus)
    .pipe(plumber({
      errorHandler : linea
    }))
    .pipe(stylus({
      compress: false,
      use: [nib()]
    }))
    .pipe(gulp.dest(dest_css))
    .pipe(notify("Compilo Stylus"));

});


/*------------------------------------*\
    $JAVASCRIPT
\*------------------------------------*/

gulp.task('js',function(){

  return gulp.src(src_js)
    .pipe(plumber({
      errorHandler : linea
    }))
    .pipe(jshint())
    // .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest(dest_js))
    .pipe(notify("Compilo JS"));

});


/*------------------------------------*\
    $IMAGENES
\*------------------------------------*/

gulp.task('img', function () {
    return gulp.src([src_imgs])
        .pipe(imagemin({
            progressive: false,
            optimizationLevel : 6,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(dest_imgs))
        .pipe(notify("Compilo Imagenes"));
});













/*------------------------------------*\
    $AUTO COMPILAR
\*------------------------------------*/

gulp.task('watch',function(){
  gulp.watch(src_stylus,['stylus']);
  gulp.watch(src_js,['js']);
});







/*------------------------------------*\
    $POR DEFECTO
\*------------------------------------*/

gulp.task('default',['watch','js', 'stylus']);