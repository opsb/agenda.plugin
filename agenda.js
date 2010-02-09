$.widget("ui.agenda", {

	_init : function() {
		this._render();
	},

	_render : function() {
		this._renderGrid();
		this._renderEvents();
	},
	
	_renderGrid : function() {	

		var table = $(document.createElement("table"));
		table.css("width","100%");
		table.show();
		this.element.append(table);
		
		var tbody = $(document.createElement("tbody"));
		table.append(tbody);
		
		var tr = $(document.createElement("tr"));
		tbody.append(tr);
		
		for( var day = 1; day <= this.options.days; day++ ) {	
			for( var hour = this.options.startHour; hour <= this.options.endHour; hour++ ) {
				var row = $(document.createElement("tr"));
				tbody.append(row);
				for( var column = 1; column <= this.options.columns; column++ ) {
					var cell = $(document.createElement("td"));
					row.append(cell);
					cell.data("day", 		day);
					cell.data("column", column);
					cell.data("hour",		hour);
					cell.css("height",	this.options.periodHeight);
					row.append(cell);
				}
			}
		}

	},
	
	_renderEvents : function() {
		self = this;
		$(this.options.events()).each(function(event) {
			var eventElement = $(new EJS({url: 'event.ejs'}).render(event));
			eventElement.data("day", event.day			  );
			eventElement.data("column", event.column  );
			eventElement.data("hour", event.startHour );
			self.element.append(event);
		});
	},

});

$.extend($.ui.agenda, {

  getter : "data options",

  defaults: {
		days: 				3,
		columns: 			4,
		startHour: 		9,
		endHour: 			17,
		periodHeight: 10,
		events: 			function() { return [] }
  }

});
