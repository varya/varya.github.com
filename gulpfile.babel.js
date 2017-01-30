"use strict";

import gulp from "gulp";
import run from "gulp-run";
import styleguide from "sc5-styleguide";
import sc5VisualTest from "sc5-styleguide-visualtest";
import minimist from "minimist";

const outputPath = 'src/styleguide';

gulp.task("styleguide:generate", () => {

  return gulp.src(["src/templates/**/*.css", "src/assets/**/*.css"])
    .pipe(styleguide.generate({
        title: "Varya.me Styleguide",
        rootPath: outputPath,
        appRoot: "/styleguide",
        overviewPath: "src/data/styleguide.md",
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
  return gulp.src("dist/assets/*.css")
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task("styleguide", ["styleguide:generate", "styleguide:applystyles"]);

gulp.task("styleguide-watch", ["styleguide"], () => {
  // Start watching changes and update styleguide whenever changes are detected
  // Styleguide automatically detects existing server instance
  gulp.watch(["src/templates/**/*.css", "src/assets/**/*.css"], ["styleguide"]);
});

const productionUrl = "http://varya.me/styleguide/#";
const styleGuidePath = outputPath;
const knownOptions = {
  "string": "section",
  "default": { "section": false }
};
var options = minimist(process.argv.slice(2), knownOptions);

const customTests = {
  "2.1": "./test_2.1_custom.js",
  "3.5": "./test_3.5_custom.js",
  "4.3": "./test_4.3_custom.js",
  "5.1": "./test_5.1_custom.js"
};

gulp.task("test:update", ["test:visual:update"]);

gulp.task("test", ["test:visual"]);

gulp.task("test:visual", () => {
  gulp.src(styleGuidePath, { read: false })
    .pipe(sc5VisualTest.test({
      configDir: "./tests/visual/config",
      gridScreenshotsDir: "./tests/visual/grid-screenshots",
      rootUrl: "http://localhost:3000/styleguide/#",
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
