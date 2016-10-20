$(document).ready(function() {
		$.get('/accounts', function(data) {
			console.log(data);
			var arr = $.map(data, function(el) { return el });
			for (i = 0; i < arr.length; ++i) {
			    var currentarr = arr[i];
			    $('#maintable').append("<tr><td>" + currentarr.name+ "</td><td>" + currentarr.description + "</td><td>" + currentarr.incomes+ "</td><td>" + currentarr.spends + "</td></tr>");
			}
		});

});