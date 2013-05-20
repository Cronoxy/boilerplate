define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {

  var Link = Backbone.Model.extend({
    // model's constructor method
    initialize: function() {
      console.log('Model "Link" was instantiated');
    },
    // default values
  	defaults : {
  		text : 'Google',
  		href : 'http://google.com',
  	},
    data: [
      {
        text: 'Google',
        href: 'http://google.com'
      },
      {
        text: 'Facebook',
        href: 'http://facebook.com'
      },
      {
        text: 'Youtube',
        href: 'http://youtube.com'
      }
    ]
  });

  return Link;

});
