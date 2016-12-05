var gulp = require("gulp"),
htmlmin = require("gulp-html-minifier"),
cssmin = require("gulp-csso"),
less = require("gulp-less"),

dist = "dist/";

gulp.task("min-css", function(){

	gulp.src("css/style.css")
	.pipe(cssmin())
	.pipe(gulp.dest(dist + "/css"));

});

gulp.task("min-html", function(){
    gulp.src("index.html")
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
	.pipe(gulp.dest(dist));

});

gulp.task("less", function(){
    gulp.src("menu.less")
    .pipe(less())
    .pipe(gulp.dest(dist + "/css"));
})

gulp.task("default", ["min-html", "min-css"]);
