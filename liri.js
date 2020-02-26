require("dotenv").config();

//adding all global variables//
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var fs = require('fs');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var input = process.argv[2];
var searchType = process.argv.splice(3).join();


//user input commands//

//this is for OMBD//
if (input === 'movie-this'){
  movieThis(searchType);
}  
//this is for Bands In Town//
else if (input === 'concert-this'){
  concertThis(searchType);
}
//this is for Spotify//
else if (input === 'spotify-this-song'){
  spotifyTrack(searchType);
}
else if (input === 'do-what-it-says'){
  doWhatItSays(searchType);
}
//this is to console log an error to the user//
else {
  console.log ('Please choose one of the given commands!');
};


//functions for "movie" user input//
function movieThis(movie) {
  var movieQuery = movie || "Mr.Nobody"
  http://www.omdbapi.com/?apikey=[yourkey]&

  axios.get("http://www.ombdapi.com/?&t=" + movieQuery + '&y=&plot=short&tomatoes=true&apikey=trilogy').then(function(response) {

    var divider = "\n-------------------------------------------------------------\n\n";
    var jsonData = response.data;

     if (jsonData.title != undefined){
     }
     else{
     }

    var movieData = [
      "Title: " = jsonData.Title,
      "Year: " = jsonData.Year,
      "IMBD Rating: " = jsonData.imbdRating,
      "Producing Country: " = jsonData.Country,
      "Movie Language: " = jsonData.Language,
      "Plot: " = jsonData.Plot,
      "Movie Cast: " = jsonData.Actors,
    ].join("\n\n");

    fs.appendFile("log.txt", movieData + divider, function(err) {
      if(err) throw err;
      console.log(divider + movieData);
    });
  })
};

//function for "concert" user input//
function concertThis(artist){
  //var concertQuery = concert

  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response) {
    var jsonData = response.data;

    for (var i = 0; i < jsonData.length; i++) {
      var divider = "\n------------------------------------------------------------\n\n";
      var concertFind = [
        "\nVenue Name: " + jsonData[i].venue.name,
        "\nLocation: " + jsonData[i].venue.city,
        "\nConcert Date: " + moment(jsonData[i].datetime).format("MM/DD/YYYY"),
      ].join("\n\n")
     
    
     fs.appendFile("log.txt", concertFind + divider, function(err) {
      if(err) throw err;
      console.log(divider + concertFind);
      });
    console.log(divider + concertFind);
    };
  });
};

//function for "spotify" user input//
function spotifyTrack(track){
 
  console.log(track);

    spotify.search({ type: 'track', query: track}, function(err, response) {
        if (err) {
          return console.log('An error has occurred: ' + err);
        }
        
    var jsonData = response.tracks;
    console.log(jsonData);
    
    for (var i = 0; i < 5; i++) {
      var divider = "\n------------------------------------------------------------\n\n";
      var trackInfo = [
        "/nArtist: " + jsonData.items[i].artists[0].name,
        "/nTrack Name: " + jsonData.items[i].name,
        "/nAlbum Name: " + jsonData.items[i].album.name,
        "/nPreview Track: " + jsonData.items[i].preview_url,
      ]

      console.log(divider + trackInfo);

      fs.appendFile("log.txt", trackInfo + divider, function(err) {
        if(err) throw err;
        console.log(divider + trackInfo);
        });
      }
    });
    
function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(err, response) {
    if (err) throw err

    var responseArr = response.split(',');
    console.log('');
    console.log('---MAIN--CONTENT---');
    console.log('');

    for (var i = 0; i < responseArr.length; i++) {
      if (responseArr[i] === 'movie-this'){
        movieThis(searchType);
      }  
      //this is for Bands In Town//
      else if (responseArr[i] === 'concert-this'){
        concertThis(searchType);
      }
      //this is for Spotify//
      else if (responseArr[i] === 'spotify-this-song'){
        spotifyTrack(searchType);
      }
      else {
        console.log ("Command not found!");
      }


    }

  })
}  

}














