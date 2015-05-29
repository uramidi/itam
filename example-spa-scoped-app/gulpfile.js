"use strict";

var gulp = require('gulp');
var del = require('del');
var gutil = require('gulp-util');
var fs = require("fs");
var xml2js = require('xml2js');
var replace = require('gulp-replace');
var moment = require('moment');

var paths = {
	src : {
		base   : './src/main/plugins'
	},
	target : {
		base   : './target'
	}
};

/**
 * Basic Tasks
 */

gulp.task('default', ['build']);

gulp.task('clean', function(cb) {
	del(['target'], cb);
});

gulp.task('watch', ['build', 'watch-resources']);

gulp.task('build', ['resources']);

gulp.task('help', function() {
	gutil.log(
		'Tasks:\n' +
		'  watch      : build project and watch for updates\n' +
		'  build      : package up the project\n' +
		'  clean      : remove build and temporary files'
	);
});

/**
 * Support Tasks.  Likely not needed for day-to-day direct usage.
 */
gulp.task('resources', function() {
	var projectVersion = parseProjectVersion();
	gutil.log("Using ${project.version}: " + projectVersion);

	return gulp.src([
		paths.src.base + '/**/*'
	])
		.pipe(replace('${project.version}', projectVersion, { 
			skipBinary: true 
		}))
		.pipe(gulp.dest(paths.target.base))
});

gulp.task('watch-resources', ['resources'], function() {
	return gulp.watch([
			paths.src.base + '/**/*'			
		],
		['resources']);
});

function parseProjectVersion() {
	var projectVersion;
	var pom = fs.readFileSync('pom.xml').toString();
	var parser = new xml2js.Parser();
	parser.parseString(pom, function(err, result) {
		var candidateVersion = (result.project.version ? result.project.version : result.project.parent[0].version)[0];
		var snapshotTimestamp = moment().utc().format('YYYYMMDDHHmmss');
		projectVersion = candidateVersion.replace('-SNAPSHOT', '.' + snapshotTimestamp);
	});
	return projectVersion;
}