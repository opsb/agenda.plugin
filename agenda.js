$.widget("ui.agenda", {

	_init : function() {
		this._render();
	},

	message : function() {
		return this.options.message;
	},

	_render : function() {
		var template = new EJS({url: 'template.ejs'});
		this.element.html(template.render(this));
	}

});

$.extend($.ui.agenda, {

  getter : "message",

  defaults: {
    message: "hello!"
  }

});
