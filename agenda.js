$.widget("ui.agenda", {

	_init : function() {
		this._render();
	},

	message : function() {
		return this.options.message;
	},

	_render : function() {
		
		this.element.html(
			new EJS({url: 'template.ejs'}).render({
				days: 			3,
				columns: 		4,
				startHour: 	9,
				endHour: 		17
			})
		);
		
	}

});

$.extend($.ui.agenda, {

  getter : "message",

  defaults: {
    message: "hello!"
  }

});
