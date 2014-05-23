exports.config =
  files:
    javascripts:
      joinTo:
        'js/app.js': /^(app|core)/
        'js/vendor.js': /^(vendor|bower_components)/

      pluginHelpers: 'js/app.js'

    stylesheets:
      joinTo:
        'css/app.css': /^app/
        'css/vendor.css': /^(vendor|bower_components)/

    templates:
      joinTo: 'js/app.js'

  plugins:
    autoReload:
      enabled:
        js: on
        css: on
        assets: off

    imageoptimizer:
      path: 'images'
      smushit: no

    coffeelint:
      pattern: /^(app|core)\/.*\.coffee$/

      options:
        max_line_length:
          level: "ignore"

  conventions:
    assets: /(assets|vendor\/assets|font)/
