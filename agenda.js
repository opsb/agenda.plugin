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
		this.element.html(
			new EJS({url: 'template.ejs'}).render(this.options)
		);
	},
	
	_renderEvents : function() {
		$(this.options.events()).each(function(event) {
			console.log(event);
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
		days: 			3,
		columns: 		4,
		startHour: 	9,
		endHour: 		17,
		events: 		function() { return [] }
  }

});
