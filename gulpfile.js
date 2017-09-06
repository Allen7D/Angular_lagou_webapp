var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); //获取模块，并实例化
var open = require('open');

// 全局变量
var app = {
  srcPath: 'src/',    //源码文件
  devPath: 'build/',  //运行文件
  prdPath: 'dist/'    //部署文件
};


//gulp任务
gulp.task('lib', function() {
  gulp.src('bower_components/**/*.js')
      .pipe(gulp.dest(app.devPath + 'vendor'))  //pipe拷贝
      .pipe(gulp.dest(app.prdPath + 'vendor'))
      .pipe($.connect.reload());                 //通知服务器「刷新浏览器」
});

gulp.task('html', function() {
  gulp.src(app.srcPath + '**/*.html')
      .pipe(gulp.dest(app.devPath))
      .pipe(gulp.dest(app.prdPath))
      .pipe($.connect.reload());
})


gulp.task('json', function() {
  gulp.src(app.srcPath + 'data/**/*.json')
      .pipe(gulp.dest(app.devPath + 'data'))
      .pipe(gulp.dest(app.prdPath + 'data'))
      .pipe($.connect.reload());
});

gulp.task('less', function() {
  gulp.src(app.srcPath + 'style/index.less')  //less的总入口文件
  .pipe($.plumber())
  .pipe($.less())     //编译
  .pipe(gulp.dest(app.devPath + 'css'))
  .pipe($.cssmin())   //压缩
  .pipe(gulp.dest(app.prdPath + 'css'))
  .pipe($.connect.reload());
});

gulp.task('js', function() {
  gulp.src(app.srcPath + 'script/**/*.js')
  .pipe($.plumber())
  .pipe($.concat('index.js')) //合并成一个文件
  .pipe(gulp.dest(app.devPath + 'js'))
  .pipe($.uglify())   //压缩
  .pipe(gulp.dest(app.prdPath + 'js'))
  .pipe($.connect.reload());
});

gulp.task('image', function() {
  gulp.src(app.srcPath + 'image/**/*')
  .pipe($.plumber())
  .pipe(gulp.dest(app.devPath + 'image'))
  .pipe($.imagemin())   //压缩
  .pipe(gulp.dest(app.prdPath + 'image'))
  .pipe($.connect.reload());
});

//总的任务（一次性执行），依赖[]执行结束
gulp.task('build', ['image', 'js', 'less', 'lib', 'html', 'json']);

//清除任务（dist & build）
gulp.task('clean', function() {
  gulp.src([app.devPath, app.prdPath])
  .pipe($.clean());
});


gulp.task('serve', ['build'], function() {
  $.connect.server({
    root: [app.devPath],  //开发目录
    livereload: true,     //热更新（刷新浏览器）
    port: 3000            //3000端口
  });

  open('http://localhost:3000'); //打开网址
  //watch监控文件
  gulp.watch('bower_components/**/*', ['lib']);
  gulp.watch(app.srcPath + '**/*.html', ['html']);
  gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
  gulp.watch(app.srcPath + 'style/**/*.less', ['less']);
  gulp.watch(app.srcPath + 'script/**/*.js', ['js']);
  gulp.watch(app.srcPath + 'image/**/*', ['image']);
});

gulp.task('default', ['serve']);
