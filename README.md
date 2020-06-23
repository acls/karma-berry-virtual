Run:
```
yarn karma start karma.conf.js
```

Then open [http://0.0.0.0:9876/](http://0.0.0.0:9876/) in a browser.

The errors will look something like this:

```
23 06 2020 01:40:51.029:WARN [web-server]: 404: /base/.yarn/$virtual/karma-jasmine-virtual-d5e825a809/0/cache/karma-jasmine-npm-3.3.1-3b2922b99a-5eda66e5ce.zip/node_modules/karma-jasmine/lib/boot.js?760d54bbca4f739f1f8b252c1636d76201cc4e88
23 06 2020 01:40:51.029:WARN [web-server]: 404: /base/.yarn/$virtual/karma-jasmine-virtual-d5e825a809/0/cache/karma-jasmine-npm-3.3.1-3b2922b99a-5eda66e5ce.zip/node_modules/karma-jasmine/lib/adapter.js?e14e485cb2a825ba86577e6749e91dda740e6c04
23 06 2020 01:40:51.045:WARN [web-server]: 404: /base/.yarn/$virtual/karma-jasmine-virtual-d5e825a809/0/cache/karma-jasmine-npm-3.3.1-3b2922b99a-5eda66e5ce.zip/node_modules/karma-jasmine/lib/boot.js?760d54bbca4f739f1f8b252c1636d76201cc4e88
23 06 2020 01:40:51.049:WARN [web-server]: 404: /base/.yarn/$virtual/karma-jasmine-virtual-d5e825a809/0/cache/karma-jasmine-npm-3.3.1-3b2922b99a-5eda66e5ce.zip/node_modules/karma-jasmine/lib/adapter.js?e14e485cb2a825ba86577e6749e91dda740e6c04
```

Notice `.yarn/$virtual` is not `.yarn/$$virtual`.
