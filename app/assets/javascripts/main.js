(function(){

  window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Router: {}
  };

  App.Models.Task = Backbone.Model.extend({
    defaults: {
      title: '',
      completed: false
    },
    urlRoot: 'tasks'
  });

})();
