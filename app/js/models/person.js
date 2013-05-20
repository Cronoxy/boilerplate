define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {

  var Person = Backbone.Model.extend({
    // model's constructor method
    initialize: function() {
      console.log('Model "Person" was instantiated');
      // on change
      this.bind('change:name', function() {
        console.log(this.get('name') + ' is now the value for name');
      });
      // on error
      this.bind('error', function(model, error) {
        console.log(error);
      }); 
    },
    // default values
  	defaults : {
  		name : 'Marius-Constantin Postolache',
  		height : 180,
  	},
    // validate the data on set
    validate: function(attributes) {
      console.log(attributes.name);
      // if it is no return, it will assume that it is corect validation
      // if a string is returned, that string will be the error
      if (attributes.name == 'Joe') {
        return 'Uh ah, you are Joe!';
      }
    }
  });

  return Person;

});
