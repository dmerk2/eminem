$('button').on('click', function() {
	var p = $(this).data('person');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({
	 		url: queryURL,
	  	method: 'GET'
		})
		.done(function(response) {
	var results = response.data;

for (var i = 0; i < results.length; i++) {
    var gifDiv = $('<div class="item">')

    var personImage = $('<img>');
    personImage.attr('src', results[i].images.fixed_height.url);

    gifDiv.append(personImage)
    console.log(p)

    $('#gifsAppearHere').prepend(gifDiv);

  	}
	});
});

