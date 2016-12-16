var gulp = require("gulp"),
htmlmin = require("gulp-html-minifier"),
cssmin = require("gulp-csso"),
less = require("gulp-less"),

devDist = "dev/",
releaseDist = "release/";

gulp.task("min-css", function(){

	gulp.src(devDist + "css/style.css")
	.pipe(cssmin())
	.pipe(gulp.dest(releaseDist + "css/"));

});

gulp.task("min-html", function(){
    gulp.src(devDist + "index.html")
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
	.pipe(gulp.dest(releaseDist));

});

gulp.task("less", function(){
    gulp.src(devDist + "css/style.less")
    .pipe(less())
    .pipe(gulp.dest(devDist + "css/"));
})

gulp.task("default", ["less", "min-html", "min-css"]);
