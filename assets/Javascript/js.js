//Search Movie Info	
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
});


//Search Giphys
  
var inputBox = $('#giphy-input')

$('#findGiphy').on('click', function(){
	var userChoice = $('#giphy-input').val();
	renderImage(userChoice);
});

function renderImage(userChoice) {
		var image = $('<img>');
		image.text(userChoice);
		$('#giphyButton').append(image);
		
		return false;
		var giphy = $(this).data('giphy');

	// Here we assemble our URL 
	var queryURLgiphy = "http://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({url: queryURLgiphy, method: "GET"})
		.done(function(response){
	  	console.log(response);
			var results = response.data;

			for (var i = 0; i < response.data.length; i++) {
				var giphyDiv = response.data[i].images.fixed_height.url;
				image.attr('src', giphyDiv);
				image.attr('alt', 'image');
				$('#giphyView').prepend(image);
 		  };
	 });   
};


//Eminem Giphys
$('button').on('click', function() {
	var p = $(this).data('person');
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=20";

		$.ajax({url: queryURL, method: 'GET'})
			.done(function(response) {
				console.log(response);
				var results = response.data;

				for (var i = 0; i < response.data.length; i++) {
					var imageUrl = response.data[i].images.fixed_height.url;

	    		var personImage = $('<img>');
			    personImage.attr('src', imageUrl);
			    personImage.attr('alt', 'personImage');

			    $("#gifsAppearHere").prepend(personImage);
				};  	
		 });
	});
