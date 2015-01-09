var gulp = require("gulp"),
  styleguide = require("sc5-styleguide");

gulp.task("styleguide", function() {
  var outputPath = 'src/public/styleguide';

  return gulp.src(["desktop.blocks/**/*.css"])
    .pipe(styleguide({
        title: "My Styleguide",
        rootPath: outputPath,
        appRoot: '/styleguide',
        overviewPath: "src/styleguide/overview.md"
      }))
    .pipe(gulp.dest(outputPath));
});

gulp.task("styleguide-watch", ["styleguide"], function() {
  // Start watching changes and update styleguide whenever changes are detected
  // Styleguide automatically detects existing server instance
  gulp.watch(["desktop.blocks/**/*.css"], ["styleguide"]);
});
