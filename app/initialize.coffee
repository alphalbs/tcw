Application = require 'application'
routes = require 'routes'

# Initialize the application on DOM ready event.
$ ->
  new Application {
    title: 'AlphaLabs - The Circle of Waste',
    controllerSuffix: '-controller',
    routes
  }
