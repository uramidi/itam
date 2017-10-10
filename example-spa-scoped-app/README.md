This is a sample scoped app that uses a npm tool (gulp).

Available maven commands:

	$ mvn test -Pnpm-watch
	$ mvn test -Pnpm-watch -Dnpm.script="run <script>"
	$ mvn install

Use the wrapper script:

	$ ./build.sh watch  # watch for changes and copy to target folder
	$ ./build.sh <script>  # execute "npm run <script>"

