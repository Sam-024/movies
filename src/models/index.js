const Movie = require("./Movie")
const Actor = require("./Actor")
const Director = require("./Director")
const Genre = require("./Genre")

//movie - actor
Movie.belongsToMany(Actor,{through: "movieActor"})
Actor.belongsToMany(Movie,{through: "movieActor"})

//movie - director
Movie.belongsToMany(Director, {through: "movieDirector"})
Director.belongsToMany(Movie, {through: "movieDirector"})

//movie - genre
Movie.belongsToMany(Genre, {through: "movieGenre"})
Genre.belongsToMany(Movie, {through: "movieGenre"})


