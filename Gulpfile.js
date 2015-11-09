var gulp = require("gulp"),
  run = require('gulp-run'),
  styleguide = require("sc5-styleguide"),
  sc5StyleguideGemini = require('sc5-styleguide-visualtest'),
  shell = require("gulp-shell"),
  clean = require("gulp-clean"),
  fs = require('fs'),

  outputPath = 'out/styleguide';

gulp.task("styleguide:generate", function() {

  return gulp.src(["desktop.blocks/**/*.css"])
    .pipe(styleguide.generate({
        title: "Varya.me Styleguide",
        rootPath: outputPath,
        appRoot: "/styleguide",
        overviewPath: "src/styleguide/overview.md",
        extraHead: [
          '<script src="http://yandex.st/jquery/1.7.2/jquery.min.js"></script>',
          '<script src="/desktop.bundles/index/index.min.js"></script>',
          [ '<script>',
            '(function(d, s, l, r) {',
            "if (typeof(s) !== 'undefined' && l.getItem('varya.me.fonts')) {",
                'r = [',
                    "'<style>',",
                    "l.getItem('varya.me.fonts'),",
                    "'</style>'",
                '];',
                "document.write(r.join(''));",
            '}',

            '})(document, Storage, localStorage);',
            '</script>' ].join(''),
          '<script src="/styleguide/i-bem__init_styleguide.js"></script>'
        ],
        disableEncapsulation: true,
        disableHtml5Mode: true
      }))
    .pipe(gulp.dest(outputPath));
});

gulp.task("styleguide:applystyles", function() {
  return gulp.src("desktop.bundles/index/index.min.css")
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task("styleguide", ["styleguide:generate", "styleguide:applystyles"]);

gulp.task("styleguide-watch", ["styleguide"], function() {
  // Start watching changes and update styleguide whenever changes are detected
  // Styleguide automatically detects existing server instance
  gulp.watch(["desktop.blocks/**/*.css"], ["styleguide"]);
});

gulp.task("bem-build", function() {
  run("./node_modules/enb/bin/enb make --no-cache").exec();
})

gulp.task("bem-copy", ["bem-build"], function() {
  gulp.src(["desktop.blocks/**/*", "desktop.bundles/**/*"], { base: "."})
    .pipe(gulp.dest("out/"));
});

gulp.task("single-files", function() {
  gulp.src(["CNAME", "data/**"], { base: "." })
    .pipe(gulp.dest("out/"));
});

gulp.task("bem-watch", ["bem-watch-files", "bem-watch-build"]);

gulp.task("bem-watch-files", function() {
  gulp.watch(["desktop.blocks/**/*"], ["bem-build"]);
});

gulp.task("bem-watch-build", function() {
  gulp.watch(["desktop.build/**/*"], ["bem-copy"]);
});

gulp.task("dev", ["bem-watch", "styleguide-watch"]);

var productionUrl = "http://varya.me/styleguide/#";
var styleGuidePath = outputPath;
gulp.task("test:update", ["test:visual:update"]);

gulp.task("test", ["test:visual"]);

gulp.task("test:visual", function() {
  gulp.src(styleGuidePath, { read: false })
    .pipe(sc5StyleguideGemini.test({
      configDir: "./tests/visual/config",
      gridScreenshotsDir: "./tests/visual/grid-screenshots",
      rootUrl: "http://localhost:9778/styleguide/#"
    }));
});

gulp.task("test:visual:config", function() {
  return gulp.src(styleGuidePath, { read: false })
    .pipe(sc5StyleguideGemini.configure({
      excludePages: []
    }))
    .pipe(gulp.dest("./tests/visual/config"));
});

gulp.task("test:visual:update", ["test:visual:config"], function() {
  gulp.src(styleGuidePath, { read: false })
    .pipe(sc5StyleguideGemini.gather({
      configDir: "./tests/visual/config",
      gridScreenshotsDir: "./tests/visual/grid-screenshots",
      rootUrl: productionUrl
    }));
});
