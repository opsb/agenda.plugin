Element.prototype.add = function(elementName, attrs) {
  var element = document.createElement(elementName);
  this.appendChild(element);
	for(var key in attrs) {
		element.setAttribute(key, attrs[key]);
	}
  return element;
};

$.widget("ui.agenda", {

	_init : function() {
		this._render();
	},

	_render : function() {
		this._renderGrid();
		this._renderEvents();
	},
	
	_renderGrid : function() {
		
		var table = this.element[0].add("table", {style: "width:100%;background:blue;"});
		var tbody = table.add("tbody");
		
		for( var day = 1; day <= this.options.days; day++ ) {	
			for( var hour = this.options.startHour; hour <= this.options.endHour; hour++ ) {
				var row = tbody.add("tr");
				for( var column = 1; column <= this.options.columns; column++ ) {
					var cell = $(row.add("td"));
					cell.data("day", 		day);
					cell.data("column", column);
					cell.data("hour",		hour);
					cell.css("height",	this.options.periodHeight);
				}
			}
		}

	},
	
	_renderEvents : function() {
		self = this;
		$(this.options.events()).each(function(index, event) {
			var eventElement = $(new EJS({url: 'event.ejs'}).render(event));
			
			eventElement.data("day", event.day			  );
			eventElement.data("column", event.column  );
			eventElement.data("hour", event.startHour );
			eventElement.css("position", "absolute");
			eventElement.css("top", self.options.periodHeight * event.day);
			eventElement.css("left", 300 * event.column);
			eventElement.show();
			self.element.append(eventElement);
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
