var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe',
    age: 20,
    ocuppation: 'worker'
  },

  work: function(){
    return this.get('name') + ' is working';
  }
});

// var Person = function(config) {
//   this.name = config.name;
//   this.age = config.age;
//   this.ocuppation = config.ocuppation;
// };

// Person.prototype.work = function() {
//   return this.name + " is working";
// };