define(function(require){
  var
    rad   = require('radagast')
  // , utils = require('utils')
  ;

  return rad.App.extend({
    initialize: function(){
    }
  , render: function(){
      this.$el.html("<h1>Consumer Panel</h1>");
    }
  });
});