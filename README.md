# Introduction
This repo contains sample project structure for different types of scoped apps.

## example-scoped-app
This is a minimum structure of a scoped application. It doesn't need to use any of the JS tooling (preprocessors SASS, SCSS, transpilers, etc).

## example-spa-scoped-app
This is a more complex structure that utilizes modern JS tooling (webpack, gulp, npm, etc).  Use this structure if you know what you're doing.

## Latest versions
Both of the above examples use a parent pom to hide most of the complexity in a maven build. See [https://code.devsnc.com/dev/snc-parent-pom] for implementation details.

When you make copy of these projects, please make sure to use the latest parent version by running the following command in your new project:

	$ mvn versions:update-parent