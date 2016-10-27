	// This .on("click") function will trigger the AJAX Call
	$('#findMovie').on('click', function(){

		// Here we grab the text from the input box 
		var movie = $('#movie-input').val();

		// Here we assemble our URL 
		var queryURLomdb = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";

		$.ajax({url: queryURLomdb, method: "GET"})
		.done(function(response){
		  console.log(response);
		  $('#movieView').html(JSON.stringify(response));
		 
		});
		return false;
	})




$('button').on('click', function() {
	var p = $(this).data('person');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({
	 		url: queryURL,
	  	method: 'GET'
		})
		.done(function(response) {
			console.log(response)
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

