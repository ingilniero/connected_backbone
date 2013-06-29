var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe',
    age: 20,
    ocuppation: 'worker'
  }
});


var PersonView = Backbone.View.extend({
  tagName: 'li',
  id: 'person-id',
  className: 'person',

  initialize: function(){
    this.render();
  },

  render: function(){
    // anti-pattern
    this.$el.html(this.model.get('name') + '('+this.model.get('age')+") - "+this.model.get('ocuppation'));
  }

});

var person = new Person()
var personView = new PersonView({ model: person });