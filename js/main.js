(function(){
  window.App = {
    Models: {},
    Collections: {},
    Views: {}
  };

  window.template = function(id) {
    return _.template( $('#' + id).html() );
  };

  App.Models.Person = Backbone.Model.extend({
    defaults: {
      name: 'John Doe',
      age: 20,
      occupation: 'worker'
    }
  });

  App.Collections.People = Backbone.Collection.extend({
    model: App.Models.Person
  });

  App.Views.People = Backbone.View.extend({
    tagName: 'ul',

    render: function(){
      //filter through all items in a collection
      this.collection.each(function(person){
        //create a personView for each person
        var personView = new App.Views.Person({model: person});
        //append to root element
        this.$el.append(personView.render().el);
      }, this);
      return this;
    }
  });

  App.Views.Person = Backbone.View.extend({
    tagName: 'li',

    template: template('personTemplate'),

    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  // Data
  var peopleCollection = new App.Collections.People([
      {
        name: 'Aris',
        age: 25
      },
      {
        name: 'Alba',
        age: 10
      }
    ]);

  var peopleView = new App.Views.People({ collection: peopleCollection});
  $(document.body).append(peopleView.render().el);

})();