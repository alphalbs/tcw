# Application routes.
module.exports = (match) ->
  match '', 'home#index'
  match ':level1', 'level1#index'
