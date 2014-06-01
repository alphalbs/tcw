View = require 'views/base/view'

# Site view is a top-level view which is bound to body.
module.exports = class GameView extends View
  container: 'page-container'
  id: 'game-div'
  regions: main: '#game-div'
