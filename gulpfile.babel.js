"use strict";

import gulp from "gulp";
import run from "gulp-run";
import styleguide from "sc5-styleguide";
import sc5VisualTest from "sc5-styleguide-visualtest";
import shell from "gulp-shell";
import clean from"gulp-clean";
import fs from "fs";
import minimist from "minimist";

//import metalsmith from "gulp-metalsmith"
import metalsmith from "metalsmith"
import markdown from "metalsmith-markdown"
import multiLanguage from "metalsmith-multi-language"
import branch from "metalsmith-branch"
import copy from "metalsmith-copy"
import collections from "metalsmith-collections"
import templates from "metalsmith-templates"
import paths from "metalsmith-paths"
import permalinks from "metalsmith-permalinks"
import reactTemplates from "metalsmith-react-templates"
import snippet from "metalsmith-snippet"
import metadata from "metalsmith-collection-metadata"

import Handlebars from "handlebars"

import stringify from "json-stringify-safe"

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

Handlebars.registerHelper('json', function(context) {
   var str;
   for(var key in context) {
     str += key + ': ' + context[key].toString() + ', ';
   }
  return str;
});

gulp.task("metalsmith", ()=> {
  metalsmith(__dirname)
    .destination('build')
    .use(copy({
      pattern: '**/*.md',
      move: true,
      transform: f => {
        if (f.match(/index_en.md/i)) {
          return f.replace('_en.md', '.md');
        }
        if (f.match(/^.*_en.md/i)) {
          return 'en/' + f.replace('_en.md', '.md');
        }
        if (f.match(/^.*_ru.md/i)) {
          return 'ru/' + f.replace('_ru.md', '.md');
        }
        console.log('returned', f);
      }

    }))
    .use(collections({
      posts_en: {
        pattern: ['posts/**/*.md', '!posts/index.md'],
        sortBy: 'date',
        reverse: true
      },
      posts_ru: {
        pattern: ['ru/posts/**/*.md', '!ru/posts/index.md'],
        sortBy: 'date',
        reverse: true
      },
      life_en: {
        pattern: ['life/**/*.md', '!life/index.md'],
        sortBy: 'date',
        reverse: true
      },
      life_ru: {
        pattern: ['ru/life/**/*.md', '!ru/life/index.md'],
        sortBy: 'date',
        reverse: true
      },
      en: {
        pattern: ['**/*.md', '!ru/**/*.md']
      },
      ru: {
        pattern: ['ru/**/*.md']
      }
    }))
    .use(metadata({
      'collections.en': {
        lang: 'en'
      },
      'collections.ru': {
        lang: 'ru'
      }
    }))
    .use(permalinks({
      pattern: ':title',
      relative: false
    }))
    .use(paths({
      property: "paths"
    }))
    .use(markdown({
      smartypants: true,
      gfm: true,
      tables: true
    }))
    .use(snippet({
      stop: ['<excerpt/>'],
      stripHtml: false,
      suffix: ''
    }))
    .use(reactTemplates({
      babel: true,
      directory: 'src/templates',
      baseFile: 'base.html',
      defaultTemplate: 'Default.js',
      extension: null,
      static: true
    }))
    //.use(templates('handlebars'))
    .build((err, files) => {
      if (err) throw err;
    });
});

gulp.task("dev", ["metalsmith"], () => {
  gulp.watch(['src/**'], ['metalsmith'])
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
