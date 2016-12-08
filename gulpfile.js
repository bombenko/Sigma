var gulp = require("gulp"),
htmlmin = require("gulp-html-minifier"),
cssmin = require("gulp-csso"),
less = require("gulp-less"),

devdist = "dev/",
releasedist = "release/";

gulp.task("min-css", function(){

	gulp.src(devdist + "css/style.css")
	.pipe(cssmin())
	.pipe(gulp.dest(releasedist + "css/"));

});

gulp.task("min-html", function(){
    gulp.src(devdist + "index.html")
	.pipe(htmlmin({
		collapseBooleanAttributes: true,
		collapseWhitespace: true,
		minifyCSS: true,
		minifyJS: true,
		processConditionalComments: true,
		removeComments: true,
		removeScriptTypeAttributes: true,
		removeStyleLinkTypeAttributes: true,
	}))
	.pipe(gulp.dest(releasedist));

});

gulp.task("less", function(){
    gulp.src(devdist + "css/style.less")
    .pipe(less())
    .pipe(gulp.dest(devdist + "css/"));
})

gulp.task("default", ["less", "min-html", "min-css"]);
