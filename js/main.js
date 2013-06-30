(function(){

  window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Router: {}
  };

  var clear = function(){
    $(document.body).html('');
  };

  var vent = _.extend({}, Backbone.Events);

  App.Models.Appointment = Backbone.Model.extend({
  });

  App.Collections.Appointments = Backbone.Collection.extend({
    model: App.Models.Appointment
  });

  App.Views.Appointment = Backbone.View.extend({
    tagName: 'h1',

    template: _.template("<a href='#appointment/<%= id %>'><%= title %></a>"),

    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

  App.Views.Appointments = Backbone.View.extend({
    tagName: 'ul',

    initialize: function(){
      vent.on('appointment:show', this.showAppointment, this);
      vent.on('appointments:index', this.showAppointments, this);
    },

    render: function(){
      this.collection.each(this.addAppointment, this);
      return this;
    },

    showAppointments: function(){
      clear();
      $(document.body).append(this.render().el);
    },

    addAppointment: function(appointment){
      var appointmentView = new App.Views.Appointment({ model: appointment});
      this.$el.append( appointmentView.render().el);
    },

    showAppointment: function( id ) {
      var appointment = this.collection.get(id);
      var appointmentView = new App.Views.Appointment({ model: appointment });
      clear();
      $(document.body).append(appointmentView.render().el);
    }
  });

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'appointment/:id': 'showAppointment'
    },

    index: function(){
      vent.trigger('appointments:index');
    },

    showAppointment: function(appointmentId){
      vent.trigger('appointment:show', appointmentId);
    }

  });

  var appointments = new App.Collections.Appointments([
    {
      id: 1,
      title: 'Appointment 1'
    },
    {
      id: 2,
      title: 'Appointment 2'
    }
    ]);

  var appointmentsView = new App.Views.Appointments({collection: appointments});

  new App.Router;
  Backbone.history.start();

})();