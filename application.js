$(document).ready(function() {
	$('#agenda').agenda({
		events: function() {
			return [
					{ startHour: 1, endHour: 2, name: "keynote" 		 },
					{ startHour: 3, endHour: 4, name: "lunch break!" }				
			]
		}
	});
});
