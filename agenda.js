$.widget("ui.agenda", {

	_init : function() {
		this._render();
	},

	message : function() {
		return this.options.message;
	},
	
	_render : function() {
		definition = 
			"<table>\
				<tbody>\
					<tr>\
						<td>one</td>\
						<td>two</td>\
					</tr>\
				</tbody>\
			</table>";
		
		$(definition).appendTo(this.element);
	}

});

$.extend($.ui.agenda, {

  getter: "message",

  defaults: {
    message: "hello!"
  }

});
