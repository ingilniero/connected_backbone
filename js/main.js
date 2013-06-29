var template = function(id) {
  return _.template( $('#' + id).html() );
};

// Person Model
var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe',
    age: 20,
    occupation: 'worker'
  }
});

// A list of people
var PeopleCollection = Backbone.Collection.extend({
  model: Person
});

// View for all people
var PeopleView = Backbone.View.extend({
  tagName: 'ul',

  render: function(){
    //filter through all items in a collection
    this.collection.each(function(person){
      //create a personView for each person
      var personView = new PersonView({model: person});
      //append to root element
      this.$el.append(personView.render().el); 
    }, this);
    return this;
  }
});

// The View for a Person
var PersonView = Backbone.View.extend({
  tagName: 'li',

  template: template('personTemplate'),

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});

// Data
var peopleCollection = new PeopleCollection([
    {
      name: 'Aris',
      age: 25
    },
    {
      name: 'Alba',
      age: 10
    }
  ]);

var peopleView = new PeopleView({ collection: peopleCollection});
$(document.body).append(peopleView.render().el);