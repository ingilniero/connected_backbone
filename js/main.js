var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe',
    age: 20,
    ocuppation: 'worker'
  },

  //Called on object.(object, {validate: true} ) or save()
  validate: function( attrs, options ) {
    if (attrs.age < 0 ){
      return "Age must be positive.";
    }

    if(!attrs.name ){
      return "Every person must have a name.";
    }
  },

  work: function(){
    return this.get('name') + ' is working';
  }
});