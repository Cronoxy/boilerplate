require.config({
  paths: {
  	'jquery': 'lib/jquery/jquery',
  	'underscore': 'lib/underscore-amd/underscore',
  	'backbone': 'lib/backbone-amd/backbone'
  }
});

require(['models/person'], function(PersonModel) {
  var person = new PersonModel();
  person.set({name: 'Joe', height: 190});

  console.log(person.toJSON());
});

require(['models/link'], function(LinkModel) {
  var link = new LinkModel();

  console.log(link.toJSON());
});


require(['views/app'], function(AppView) {
  /*var app = new AppView({
  	// an options available in initialize constructor
  	// blankOption: 'empty string'
  	//
  	//
  	// the DOM element to reprezent the view
  	// use a selector string
  	el: '#container'
  	//
  	//
  	// the DOM element to reprezent the view
  	// use a JQuery object
  	// el: $('#container')
  	//
  	//
  	// the DOM element to reprezent the view
  	// use a native JavaScript object
  	// el: document.getElementById('container')
  	//
  	//
  	// the view will automatically create an element
    // based on the AppView params:
  	// tagName, className, id, attributes
  });*/
  var app = new AppView();
});
