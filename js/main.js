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

// The View for a Person
var PersonView = Backbone.View.extend({
  tagName: 'li',

  template: _.template($('#personTemplate').html()),

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  }

});

// Data
var person = new Person;
var personView = new PersonView({ model: person });

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

peopleCollection.add(person);

var person2 = new Person({ name: 'Gilberto Villa', age: 22 });
var personView2 = new PersonView({model: person2});
peopleCollection.add(person2);
