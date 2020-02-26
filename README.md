# liri-node-app

In this assignment, I made a LIRI bot. LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back the data you are searching for.

# Expected Outcomes

The LIRI Bot was designed to produce search results based on the following commands:

* node liri.js concert-this
* node liri.js spotify-this-song
* node liri.js movie-this
* node liri.js do-what-it-says

Each command produced different search results as listed below:

## node liri.js concert-this “artist/band name” to include:

* Name of venue
* Venue location
* Date of the event  (MM/DD/YYYY format)


## node liri.js spotify-this-song “song/track name” to include: 

* Artist
* Song
* Spotify song preview url
* Album

## node liri.js movie-this “movie title” to include:

* Title of the movie
* Year the movie came out
* IMDB Rating of the movie
* Country where the movie was produced
* Language of the movie
* Plot of the movie
* Actors in the movie
* Rotten Tomatoes Rating of the movie

## node liri.js do-what-it-says will:

* Print the results stored in the random.txt file 


# Commands

## "concert-this"
This command used the Bands in Town Artist Events API. An **axios.get** command sent the search request and the results were logged to the console using moment to change the format of the returned date.

![Image of concert-this](.../assets/images/concert image.jpg)

## "spotify-this-song"
This command used the Spotify request API. A **node-spotify-api spotify.request** command sent the search request and the results were logged to the console.

![Image of spotify-this-song]("./assets/images/spotify image.jpg")
  
  
## "movie-this"**
This command used the OMBD API. An **axios.get** command sent the search request and the results were logged to the console.

![Image of movie-this]("./assets/images/movie image.jpg")


## "do-what-it-says"
This command pulled information from the local **random.txt** file.
