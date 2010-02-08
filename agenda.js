$.widget("ui.agenda", {

	_init : function() {
		this._render();
	},

	_render : function() {
		this._renderGrid();
		this._renderEvents();
		this._addCalendarInformationToGrid();
	},
	
	_renderGrid : function() {
		grid = $(new EJS({url: 'grid.ejs'}).render(this.options));
		grid.find('td').css("height", this.options.periodHeight);
		this.element.append(grid);
	},
	
	_renderEvents : function() {
		self = this;
		$(this.options.events()).each(function(event) {
			self.element.append(new EJS({url: 'event.ejs'}).render(event));
		});
	},
	
	_addCalendarInformationToGrid : function() {
		var rows = this.element.find('table tbody tr')
		var rowIndex = 0;
		var columnIndex = 0;
		for( var day = 1; day <= this.options['days']; day++ ) {
			for( var hour = this.options['startHour']; hour <= this.options['endHour']; hour++ ) {
				var row	= rows.get(rowIndex);
				for( var column = 1; column <= this.options['columns']; column++ ) {
					var cell = $(row.cells[columnIndex]);
					cell.data("day", 		day);
					cell.data("column", column);
					cell.data("hour", 	hour);
					columnIndex++;
				}
				columnIndex = 0;
				rowIndex++;
			}
		}
	}

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
