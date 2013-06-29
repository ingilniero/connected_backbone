var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe',
    age: 20,
    occupation: 'worker'
  }
});


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

var person = new Person;
var personView = new PersonView({ model: person });