"use strict";

import gulp from "gulp";
import run from "gulp-run";
import styleguide from "sc5-styleguide";
import sc5VisualTest from "sc5-styleguide-visualtest";
import shell from "gulp-shell";
import clean from"gulp-clean";
import fs from "fs";
import minimist from "minimist";

const outputPath = 'out/styleguide';

gulp.task("styleguide:generate", () => {

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

gulp.task('styleguide:applystyles', () => {
  return gulp.src("desktop.bundles/index/index.min.css")
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task("styleguide", ["styleguide:generate", "styleguide:applystyles"]);

gulp.task("styleguide-watch", ["styleguide"], () => {
  // Start watching changes and update styleguide whenever changes are detected
  // Styleguide automatically detects existing server instance
  gulp.watch(["desktop.blocks/**/*.css"], ["styleguide"]);
});

gulp.task("bem-build", () => {
  run("./node_modules/enb/bin/enb make --no-cache").exec();
})

gulp.task("bem-copy", ["bem-build"], () => {
  gulp.src(["desktop.blocks/**/*", "desktop.bundles/**/*"], { base: "."})
    .pipe(gulp.dest("out/"));
});

gulp.task("single-files", () => {
  gulp.src(["CNAME", "data/**"], { base: "." })
    .pipe(gulp.dest("out/"));
});

gulp.task("bem-watch", ["bem-watch-files", "bem-watch-build"]);

gulp.task("bem-watch-files", () => {
  gulp.watch(["desktop.blocks/**/*"], ["bem-build"]);
});

gulp.task("bem-watch-build", () => {
  gulp.watch(["desktop.build/**/*"], ["bem-copy"]);
});

gulp.task("dev", ["bem-watch", "styleguide-watch"]);

const productionUrl = "http://varya.me/styleguide/#";
const styleGuidePath = outputPath;
const knownOptions = {
  "string": "section",
  "default": { "section": false }
};
var options = minimist(process.argv.slice(2), knownOptions);

const customTests = {
  "2.1": "./test_2.1_custom.js",
  "3.5": "./test_3.5_custom.js"
};

gulp.task("test:update", ["test:visual:update"]);

gulp.task("test", ["test:visual"]);

gulp.task("test:visual", () => {
  gulp.src(styleGuidePath, { read: false })
    .pipe(sc5VisualTest.test({
      configDir: "./tests/visual/config",
      gridScreenshotsDir: "./tests/visual/grid-screenshots",
      rootUrl: "http://localhost:9778/styleguide/#",
      sections: options.section
    }));
});

gulp.task("test:visual:update", () => {
  gulp.src(styleGuidePath, { read: false })
    .pipe(sc5VisualTest.gather({
      configDir: "./tests/visual/config",
      gridScreenshotsDir: "./tests/visual/grid-screenshots",
      rootUrl: productionUrl,
      excludePages: [],
      customTests: customTests,
      sections: options.section
    }))
    .pipe(gulp.dest('./tests/visual/config'));
});
