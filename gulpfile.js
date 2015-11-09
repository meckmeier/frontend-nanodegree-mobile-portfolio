//using John's gulp file as a template, i will only pick the
// tasks that I can understand... there's a lot he does that I don't know what they are for
// so i will omit them.
var gulp = require('gulp'), //need this to do anything
    uglify = require('gulp-uglify'), //need this to minimize js files
    imagemin = require('gulp-imagemin'), //need this to optimize images
    minifyhtml = require('gulp-minify-html'); //and this for minify html
    minifycss = require('gulp-minify-css'); //i added this one.
    pako = require('gulp-pako');

// Compiles scss files and outputs them to build/css/*.css

gulp.task('minifycss', function() {
  gulp.src('css/*.css')
    .pipe(pako.deflate())
    .pipe(gulp.dest("build/css"));
});
gulp.task('minifycss2', function() {
  return gulp.src('views/css/*.css')
    .pipe(minifycss())
    .pipe(gulp.dest('./build/views/css/'));
});


gulp.task('uglify', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'));
});
gulp.task('uglify2', function() {
    return gulp.src('views/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('./build/views/js/'));

});
// Minifies our HTML files and outputs them to build/*.html



// task
gulp.task('minifyhtml', function () {
    gulp.src('./*.html') // path to your files
    .pipe(minifyhtml())
    .pipe(gulp.dest('build'));
});
gulp.task('minifyhtml2', function () {
    gulp.src('./views/*.html') // path to your files
    .pipe(minifyhtml())
    .pipe(gulp.dest('build/views'));
});


// Optimizes our image files and outputs them to build/image/*

gulp.task('images', function() {
    return gulp.src('img/*.jpg')
    .pipe(imagemin({progressive:true}))
    .pipe(gulp.dest('build/img'));
});
gulp.task('images2', function(){
    return gulp.src('img/*.png')
    .pipe(imagemin({optimizationlevel:1}))
    .pipe(gulp.dest('build/img'));
});

gulp.task('images3', function(){
    return gulp.src('views/images/*.png')
    .pipe(imagemin({optimizationlevel:1}))
    .pipe(gulp.dest('build/views/images'));
});
gulp.task('images4', function() {
    return gulp.src('views/images/SmallPizzeria.jpg')
    .pipe(imagemin({progressive:true}))
    .pipe(gulp.dest('build/views/images'));
});
gulp.task('images5', function() {
    return gulp.src('views/images/TinyPizzeria.jpg')
    .pipe(imagemin({progressive:false}))
    .pipe(gulp.dest('build/views/images'));
});


gulp.task('default', ['minifycss', 'minifycss2', 'uglify', 'uglify2','minifyhtml', 'minifyhtml2','images', 'images2','images3','images4', 'images5']);
