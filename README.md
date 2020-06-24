Run:
```
yarn karma start karma.conf.js
```

The errors will look something like this:

```
acls@n7 ~/karma-berry-virtual (master)> yarn karma start karma.conf.js
24 06 2020 13:15:11.500:ERROR [karma-server]: Server start failed on port 9876: Error: karma tried to access browserify, but it isn't declared in its dependencies; this makes the require call ambiguous and unsound.

Required package: browserify (via "browserify")
Required by: karma@https://github.com/karma-runner/karma.git#commit=90cce1057abaf8f6fbb9b4ec93d1100ca101ab1d (via /home/acls/karma-berry-virtual/.yarn/cache/karma-https-91223b4dd3-b0b1abe735.zip/node_modules/karma/lib/utils/)

Require stack:
- /home/acls/karma-berry-virtual/.yarn/cache/karma-https-91223b4dd3-b0b1abe735.zip/node_modules/karma/lib/utils/bundle-utils.js
- /home/acls/karma-berry-virtual/.yarn/cache/karma-https-91223b4dd3-b0b1abe735.zip/node_modules/karma/lib/server.js
- /home/acls/karma-berry-virtual/.yarn/cache/karma-https-91223b4dd3-b0b1abe735.zip/node_modules/karma/lib/cli.js
- /home/acls/karma-berry-virtual/.yarn/cache/karma-https-91223b4dd3-b0b1abe735.zip/node_modules/karma/bin/karma
```
