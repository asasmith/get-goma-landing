const gulp = require('gulp')
const postcss = require('gulp-postcss')
const syntax = require('postcss-scss');
const atImport = require('postcss-import')
const nested = require('postcss-nested')
const rucksack = require('rucksack-css')
const autoprefixer = require('autoprefixer')
const customProperties = require('postcss-custom-properties')
const mediaQuery = require('postcss-custom-media')
const rename = require('gulp-rename')
const browserSync = require('browser-sync').create()

gulp.task('css', function () {
  const plugins = [ atImport(), customProperties(), nested(), mediaQuery(), rucksack(), autoprefixer() ]
  return gulp.src('src/**/main.scss')
    .pipe(postcss(plugins, { parser: syntax }))
    .pipe(rename('/main.css'))
    .pipe(gulp.dest('public/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('watch', ['browserSync', 'css'], function () {
  gulp.watch('src/**/*.scss', ['css'])
  gulp.watch(['public/**/*.html', 'public/assets/js/*.js'], browserSync.reload)
})

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: './public/'
    },
    open: false
  })
})
