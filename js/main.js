(function(){

  window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Router: {}
  };

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'show/:id': 'show',
      'download/*filename':'download',
      'search/:query': 'search',
      '*other': 'default'
    },

    index: function(){
      console.log("hello from index");
    },

    show: function(id){
      console.log("show route for "+ id);
    },

    download: function(filename){
      console.log("downloading..."+ filename);
    },

    search: function(query){
      console.log(query);
    },

    default: function(other){
      alert('Hmmmmm...not sure of what you want');
    }

  });

  new App.Router;
  Backbone.history.start();

})();