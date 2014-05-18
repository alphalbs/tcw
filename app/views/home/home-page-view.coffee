View = require 'views/base/view'
mediator  = Chaplin.mediator


module.exports = class HomePageView extends View
  autoRender: true
  className: 'home-page'
  template: require './templates/home'
