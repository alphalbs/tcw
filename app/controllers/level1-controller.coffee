Controller = require 'controllers/base/controller'
HeaderView = require 'views/home/header-view'
HomePageView = require 'views/home/home-page-view'
GameView = require 'views/game-view'

module.exports = class Level1Controller extends Controller
  beforeAction: ->
    super
    @reuse 'header', HeaderView, region: 'header'
   # @reuse 'main', HomePageView, region: 'main'

  index: ->
    @view = new GameView region: 'game'
