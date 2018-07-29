$(document).ready(() => {

$("#search-again").hide();

$("#pageloader").hide();

$("#moviedata").hide();

$("#error").hide();

$(".close, .close1").click(() =>{
	$(".modal-content").hide();
});

//search by titleName
$("#search1").click(() =>{
	if ($("#titleName").val() == "") {
		alert("Please Enter the Title");
	}else{
		let myTitle = document.getElementById("titleName").value;
		console.log(myTitle);
		getTheMovieDetails(myTitle, 1);
		$("#titleName").val('');
	}
});

//search by idNum
$("#search2").click(() =>{
	if ($("#idNum").val() == "") {
		alert("Please Enter the id Number");
	}else{
		let myID = document.getElementById("idNum").value;
		console.log(myID);
		getTheMovieDetails(myID, 2);
		$("#idNum").val('');
	}
});

//search by titleName1 and year
$("#search3").click(() =>{
	if ($("#titleName1").val() == "") {
		alert("Please Enter the Title");
	}
	else if ($("#releaseyear").val() == "") {
		alert("Please Enter the Movie Year");
	}
	else{
		let myTitle = document.getElementById("titleName1").value;
		let myYear = document.getElementById("releaseyear").value;
		getTheMovieDetails(myTitle, myYear);
		$('#titleName1').val('');
		$('#releaseyear').val('');
	}
});


});


let getTheMovieDetails = (movie,yearnum) =>{
		var link = "";
		if (movie !== undefined && yearnum === 1)
		{
			link+=`https://www.omdbapi.com/?t=${movie}&apikey=14571df`
		} 
		else if (movie !== undefined && yearnum === 2)
		{
			link+=`https://www.omdbapi.com/?i=${movie}&apikey=14571df`
		}
		else if ((movie !== undefined && yearnum !== 1) && (movie !== undefined && yearnum !== 2))
		{
			link+=`https://www.omdbapi.com/?t=${movie}&y=${yearnum}&apikey=14571df`
		}
		else{}

	$.ajax({

		type:"GET",
		dataType:"json",
		async: true,
		url: link,
		success: (response) =>{
		
				if (response.Response !== "False") 
				{
					$("#moviedata").show();
					$("#search-block").hide();
					$("#search-again").show();

					//
					if(response.Title !== undefined && response.Title !== null)
					{
						$("#movieTitle").text(response.Title);
					}
					else{}

					//	
					if(response.Released !== undefined && response.Released !== null)
					{
						$("#releaseDate").text(response.Released);
					}
					else{
						$("#releaseDate").text("N/A");
					}

					if(response.Poster !== undefined && response.Poster !== null)
					{
						$("#movie-poster").attr('src',response.Poster);
					}

					//	
					if(response.Year !== undefined && response.Year !== null)
					{
						$("#year").text(response.Year);
					}
					else{
						$("#year").text("N/A");
					}

					//	
					if(response.Plot !== undefined && response.Plot !== null)
					{
						$("#plot").text(response.Plot);
					}
					else{
						$("#plot").text("N/A");
					}		

					//	
					if(response.Genre !== undefined && response.Genre !== null)
					{
						$("#genre").text(response.Genre);
					}
					else{
						$("#genre").text("N/A");
					}	

					//	
					if(response.Type !== undefined && response.Type !== null)
					{
						$("#type").text(response.Type);
					}
					else{
						$("#type").text("N/A");
					}	

					//	
					if(response.Runtime !== undefined && response.Runtime !== null)
					{
						$("#runtime").text(response.Runtime);
					}
					else{
						$("#runtime").text("N/A");
					}	

					//	
					if(response.BoxOffice !== undefined && response.BoxOffice !== null)
					{
						$("#box-office").text(response.BoxOffice);
					}
					else{
						$("#box-office").text("N/A");
					}	

					//	
					if(response.Language !== undefined && response.Language !== null)
					{
						$("#language").text(response.Language);
					}
					else{
						$("#language").text("N/A");
					}	

					//	
					if(response.Country !== undefined && response.Country !== null)
					{
						$("#country").text(response.Country);
					}
					else{
						$("#country").text("N/A");
					}	

					//	
					if(response.Website !== undefined && response.Website !== null)
					{
						$("#website").text(response.Website);
					}
					else{
						$("#website").text("N/A");
					}	

					//	
					if(response.Awards !== undefined && response.Awards !== null)
					{
						$("#awards").text(response.Awards);
					}
					else{
						$("#awards").text("N/A");
					}	

					//	
					if(response.Response !== undefined && response.Response !== null)
					{
						$("#response").text(response.Response);
					}
					else{
						$("#response").text("N/A");
					}	

					//	
					if(response.Actors !== undefined && response.Actors !== null)
					{
						$("#actors").text(response.Actors);
					}
					else{
						$("#actors").text("N/A");
					}	

					//	
					if(response.Director !== undefined && response.Director !== null)
					{
						$("#director").text(response.Director);
					}
					else{
						$("#director").text("N/A");
					}	

					//	
					if(response.Writer !== undefined && response.Writer !== null)
					{
						$("#writers").text(response.Writer);
					}
					else{
						$("#writers").text("N/A");
					}	

					//	
					if(response.imdbID !== undefined && response.imdbID !== null)
					{
						$("#imdbid").text(response.imdbID);
					}
					else{
						$("#imdbid").text("N/A");
					}	
					
					//
					if(response.Ratings !== undefined && response.Ratings !== null)
					{
						let allRatings = "";
						let theRatings = response.Ratings;
						for(x of theRatings)
						{
							allRatings+= (x.Source +" ("+x.Value+") | ");
							console.log(allRatings);
						}
							$("#rating").text(allRatings);
					}
					else{
						$("#voting").text("N/A");
					}	


					//	
					if(response.imdbVotes !== undefined && response.imdbVotesimdbVotes !== null)
					{
						$("#voting").text(response.imdbVotes);
					}
					else{
						$("#voting").text("N/A");
					}	

					//	
					if(response.Metascore !== undefined && response.Metascore !== null)
					{
						$("#metascore").text(response.Metascore);
					}
					else{
						$("#metascore").text("N/A");
					}		


				}
				else{
					$("#search-block").hide();
					$("#moviedata").hide();
					$("#error").show();
				}
		
		},

		timeout:10000,

		error: (request, errorType, errorMessage) => {
			console.log("error caught");
			 if(errorType==="timeout")
			{
				alert("Request timed out.");      
			} 
			else {
			        console.log("success");
			   	}
			},

		beforeSend: () =>{
			$("#pageloader").show();
			$("#search-block").hide();
		},
		complete: () =>{
			$("#pageloader").hide();			
		}
	});
}