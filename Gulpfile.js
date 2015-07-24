var gulp = require("gulp"),
  run = require('gulp-run'),
  styleguide = require("sc5-styleguide"),
  shell = require("gulp-shell"),
  fs = require('fs'),

  outputPath = 'out/styleguide';

gulp.task("styleguide:generate", function() {

  return gulp.src(["desktop.blocks/**/*.css"])
    .pipe(styleguide.generate({
        title: "Varya.me Styleguide",
        rootPath: outputPath,
        appRoot: '/styleguide',
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

gulp.task('styleguide:applystyles', function() {
  return gulp.src('desktop.bundles/index/index.min.css')
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);

gulp.task("styleguide-watch", ["styleguide"], function() {
  // Start watching changes and update styleguide whenever changes are detected
  // Styleguide automatically detects existing server instance
  gulp.watch(["desktop.blocks/**/*.css"], ["styleguide"]);
});

gulp.task("bem-build", function() {
  run('./node_modules/enb/bin/enb make --no-cache').exec();
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

var spawn = require('child_process').spawn;
var phantomProcess;

gulp.task("phantom", function() {
  phantomProcess = spawn('phantomjs',  ['--webdriver', '4444', '--disk-cache', 'true'])
});

var geminiRunObj =  {
  templateData: {
    f: function(root, path) {
      return '.' + path.substr(root.length);
    }
  }
};

var productionUrl = 'http://varya.me';
var styleGuidePath = outputPath;

gulp.task("test:pages-list", function() {
  var styleguideData = JSON.parse(fs.readFileSync(styleGuidePath + "/styleguide.json"));
  var examples = [];
  styleguideData.sections.forEach(function(section) {
    if (!section.markup) { // For sections with markup only
      return;
    }
    if (section.modifiers.length === 0) {
      // Only for the pages with markup
      examples.push(section.reference);
    } else {
      for(var m = 1;m<=section.modifiers.length;m++) {
        examples.push(section.reference + '-' + m);
      }
    }
  });
  fs.writeFileSync('tests/pages-list.js', 'module.exports = ' + JSON.stringify(examples, null, 4));
});

gulp.task("gemini:gather", ["phantom", "test:pages-list"], function(){
  var stream = gulp.src("tests/*.js", { read: false })
    .pipe(shell([
        './node_modules/gemini/bin/gemini gather --root-url ' + productionUrl + ' <%= f(file.cwd, file.path) %>'
      ], geminiRunObj));
  stream.on('end', function() {
    phantomProcess.kill('SIGINT');
  });
  stream.on('error', function(err) {
    done(err);
  });
});

gulp.task("gemini:test", ["phantom"], function(done){
  var stream = gulp.src("tests/*.js", { read: false })
    .pipe(shell([
        './node_modules/gemini/bin/gemini test --reporter html --reporter flat <%= f(file.cwd, file.path) %>'
      ], geminiRunObj));
  stream.on('end', function() {
    phantomProcess.kill('SIGINT');
  });
  stream.on('error', function(err) {
    done(err);
  });
});

gulp.task("gemini:clean", shell.task(["rm -rf ./gemini"]));

gulp.task("test:update", ["gemini:clean", "gemini:gather"]);

gulp.task("test", ["gemini:test"]);
