$(document).ready(function() {
	$('#agenda').agenda({
		events: function() {
			return [
					{ day: 1, column: 1, startHour: 1, endHour: 2, name: "keynote" 		 },
					{ day: 2, column: 1, startHour: 3, endHour: 4, name: "lunch break!" }				
			]
		}
	});
});
