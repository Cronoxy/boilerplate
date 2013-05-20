define([
	'jquery',
	'backbone',
	'models/link'
], function($, Backbone, LinkModel) {
	var App = Backbone.View.extend({
		// view's constructor method
		initialize: function() {
			console.log('View "App" was instantiated');
			// get the options from the instatiated object
			// console.log(this.options.blankOption);

			this.template = $('#list-template').children();
		},
		events: {
			// click on button
			// button is a child of the container
			'click button': 'render'
		},
		render: function() {
			console.log('button pressed');

			var link = new LinkModel();

			var data = link.get('data');

			for (var i = 0, l = data.length; i < l; i++) {
				var li = this.template.clone().find('a').attr('href', data[i].href).text(data[i].text).end();
				this.$el.find('ul').append(li);
			}
		}
	});

	return App;
});