(function(){

  window.App = {
    Models: {},
    Collections: {},
    Views: {}
  };

  window.template = function(id) {
    return _.template( $('#' + id).html() );
  };

  App.Models.Task = Backbone.Model.extend({
    validate: function( attrs ){
      if(! $.trim(attrs.title)){
        return "Task must have a title";
      }
    }
  });

  App.Collections.Tasks = Backbone.Collection.extend({
    model: App.Models.Task
  });

  App.Views.Tasks = Backbone.View.extend({
    tagName: 'ul',

    render: function(){
      this.collection.each(this.addOne, this);
      return this;
    },

    addOne: function(task){
      taskView = new App.Views.Task( { model: task });
      this.$el.append(taskView.render().el);
    }
  });

  App.Views.Task = Backbone.View.extend({
    tagName: 'li',

    template: template('taskTemplate'),

    initialize: function(){
      this.model.on('change', this.render, this);
    },

    events: {
      'click .edit': 'editTask'
    },

    editTask: function(){
      var newTaskTitle = prompt("What would you like to change the text to?", this.model.get('title'));
      if (! newTaskTitle ) return;
      this.model.set('title', newTaskTitle, { validate: true });
    },

    render: function(){
      var template = this.template(this.model.toJSON());
      this.$el.html( template );
      return this;
    }
  });

  //Data
  var tasksCollection = new App.Collections.Tasks([
    {
      title: 'Go to the store',
      priority: 4
    },
    {
      title: 'Go to the mall',
      priority: 3
    }
  ]);

  var tasksView = new App.Views.Tasks({ collection: tasksCollection });
  $('.tasks').append(tasksView.render().el);
})();