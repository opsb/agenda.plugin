$.widget("ui.agenda", {

	_init : function() {
		console.log("initialized agenda");
	},

	message : function() {
		return this.options.message;
	}

});

$.extend($.ui.agenda, {

  getter: "message",

  defaults: {
    message: "hello!"
  }

});
