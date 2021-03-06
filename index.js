const chalk = require('chalk')

const animals = [
    { name: "Robyn", species: "Dog", age: 1, owner: "Jenny" },
    { name: "Dodo", species: "Cat", age: 6, owner: "Jenny" },
    { name: "Gaby", species: "Dog", age: 10, owner: "Jenny's mum" },
    { name: "Ely", species: "Dog", age: 9, owner: "Jenny's mum" },
    { name: "Moon", species: "Cat", age: 0, owner: "Marvin" },
    { name: "Rita", species: "Dog", age: 3, owner: "Diane" },
    { name: "Leo", species: "Cat", age: 8, owner: "Diane" },
    { name: "Oscar", species: "Dog", age: 5, owner: "Jade" },
    { name: "Aria", species: "Dog", age: 11, owner: "La voisine" },
    { name: "Simba", species: "Cat", age: 1, owner: "Mathilde" },
    { name: "Plop", species: "Dog", age: 1 },
];

// Récupérer un tableau de tous les noms des animaux | map => output tableau
const nameAnimals = animals.map(animal => animal.name)
    //console.log(nameAnimals)

// Récupérer un tableau de tous les animaux qui ont plus de 3 ans | filter => output tableau
const animalsLessThan3 = animals.filter(animal => animal.age > 3)
    //console.log(animalsLessThan3)
    // Récupérer un tableau tous les animaux qui ont moins de 3 ans ou 3 ans | filter => output tableau
const animalsMoreThan3 = animals.filter(animal => animal.age <= 3)
    //console.log(animalsMoreThan3)
    // Récuperer un tableau de tous les chiens | filter => output tableau
const dogs = animals.filter(animal => animal.species === "Dog")
    //console.log(dogs)
    // Tester si tous les animaux ont un propriétaire | every => output true ou false
const animalsHaveOwner = animals.every(animal => animal.owner)
    //console.log(animalsHaveOwner)

// NOTIONS CALLBACK & FONCTION D'ORDRE SUPP
// Ecrire une fonction qui prend en parametre un tableau et qui retourne un tableau de chiens
const getAllDogs = (array) => array.filter(item => item.species === "Dog");
//console.log(getAllDogs(animals))
// Ecrire une fonction qui prend en parametre "la précedente fonction" et un tableau et qui retourne un tableau
// contenant tous les noms de chiens
const getAllDogsName = (callback, array) => {
        const dogs = callback(array)
        return dogs.map(dog => dog.name)
    }
    //console.log(getAllDogsName(getAllDogs, animals))


// Plusieurs fonction simple qui serviront de callback
const sum = (param1, param2) => param1 + param2;
const soustraction = (param1, param2) => param1 - param2;
const multiply = (param1, param2) => param1 * param2;
const division = (param1, param2) => param1 / param2;
// Fonction de haut niveau => avec callback
const calculator = (callback, param1, param2) => callback(param1, param2);

// console.log(calculator(sum, 2, 3), chalk.blue("5"));
// console.log(calculator(multiply, 2, 3), chalk.blue("6"));
// console.log(calculator(soustraction, 5, 3), chalk.blue("2"));
// console.log(calculator(division, 9, 3), chalk.blue("3"));

// Ecrire une fonction qui prend en parametre un tableau et qui retourne un tableau de chats
const getAllCats = (array) => {
        const cats = array.filter(item => item.species === "Cat")
        return cats;
    }
    // console.log(getAllCats(animals))
const shorterGetAllCats = (array) => array.filter(item => item.species === "Cat");
// console.log(shorterGetAllCats(animals))

// Ecrire une fonction qui prend en parametre "la précedente fonction" et un tableau et qui retourne un tableau
// contenant tous les noms de cats
const getAllCatsName = (callback, array) => {
        const cats = callback(array);
        const nameCats = cats.map(cat => cat.name)
        return nameCats;
    }
    //console.log("Ligne 77", getAllCatsName(getAllCats, animals));

const shorterBisGetAllCats = (callback, array) => callback(array).map(cat => cat.name);
//console.log("Ligne 79", shorterBisGetAllCats(getAllCats, animals));


const movies = [
    { title: "Forest Gump", duration: 140, year: 1994, category: "Drame" },
    { title: "Mr Nobody", duration: 138, year: 2009, category: "Drame" },
    { title: "Mademoiselle", duration: 184, year: 2016, category: "Romance" },
    { title: "Le parrain", duration: 175, year: 1972, category: "Crime" },
    { title: "Le roi lion", duration: 89, year: 1994, category: "Animé" },
    { title: "The Dark Knight, Le Chevalier Noir", duration: 153, year: 2008, category: "Action" },
    { title: "Pulp Fiction", duration: 159, year: 1994, category: "Action" },
    { title: "Scarface", duration: 170, year: 1983, category: "Crime" },
];

// Ecrire une fonction qui prend en param un tableau et qui permette de savoir si tous les films ont une categorie | haveCategory
const haveCategory = (array) => {
        const movieCategory = array.every(movie => movie.category)
        return movieCategory;
    }
    //console.log("Ligne 98 : ", haveCategory(movies))

const shorterHaveCategory = (array) => array.every(movie => movie.category);

//console.log("Ligne 101 : ", shorterHaveCategory(movies))

// Ecrire un fonction qui prend en param un tableau de films et qui retourne uniquement les films de crime.| getCrimeMovie
const getMovieCrime = (array) => {
        const crimeMovies = array.filter(item => item.category === "Crime")
        return crimeMovies;
    }
    //console.log("Ligne 109 : ", getMovieCrime(movies))
const shorterGetCrimeMovie = (array) => array.filter(movie => movie.category === "Crime")
    //console.log("Ligne 111 :", shorterGetCrimeMovie(movies))

// Ecrire un fonction qui prend en param un tableau de films et qui retourne uniquement les films d'action.| getActionMovie
const getActionMovies = (array) => {
    const moviesAction = array.filter(item => item.category === "Action") // Fonctionne avec ==
    return moviesAction;
}
//console.log("ligne : 118", getActionMovies(movies))

const shorterGetActionMovies = (array) => array.filter(movie => movie.category === "Action")
//console.log("ligne : 121", shorterGetActionMovies(movies))

// Ecrire un fonction qui prend en param un tableau de films et qui retourne uniquement les films d'avant 2000.| getOldMovie

// Ecrire un fonction qui prend en param un tableau de films et qui retourne un nouveau tableau de leurs titres.| getMovieTitle 
const getMovieTitle = (array) => {
    const movieTitles = array.map(movie => movie.title)
    return movieTitles
}
console.log("ligne 130 :", getMovieTitle(movies))

const shorterGetMovieTitle = (array) => array.map(movie => movie.title)
console.log("ligne133 :", shorterGetMovieTitle(movies));

// Ecrire un fonction qui prend en param un tableau de films ainsi qu'une fonction (callbackCategorie) qui filtre les films par genre
// et qui retourne leurs titres | getMovieTitleByCategorie
const getMovieTitleByCategorie = (callback, array) => {
    const movies = callback(array)
    const titleMovies = movies.map(movie => movie.title)
    return titleMovies;
}
//console.log("ligne 143 :", getMovieTitleByCategorie(shorterGetCrimeMovie, movies))
//getMovieTitleByCategorie(shorterGetCrimeMovie, movies)
//getMovieTitleByCategorie(getActionMovies, movies)
// Test => retourner les titres des crimes movies | callback used : getCrimeMovie 
// Test => retourner les titres des action movies | callback used : getActionMovie &
// Test => retourner les titres des old movies | callback used : getOldMovie
const getMovieTitleByCategorieBis = (callbackGetCategory, callbackGetTitle, array) => {
    const movieCategory = callbackGetCategory(array)
    //console.log("Ligne 150 : ", movieCategory)
    const titleMovies = callbackGetTitle(movieCategory)
    //console.log("Ligne 152 : ", titleMovies)
    return titleMovies;
}

console.log("Ligne 155 ", getMovieTitleByCategorieBis(getMovieCrime, getMovieTitle, movies))
// Reecrire la meme fonction en ajoutant un 3eme parametres dit "callbackTitle"
// getMovieTitleByCategorieBis 

// Test => retourner les titres des crimes movies | callback used : getCrimeMovie & getMovieTitle
// Test => retourner les titres des action movies | callback used : getActionMovie & getMovieTitle
// Test => retourner les titres des old movies | callback used : getOldMovie & getMovieTitle


// En reprenant la meme logique et les fonctions ecrites plus haut 
// Ecrire une fonction qui permette de retourner les titres de films par genre uniquement si ils ont une categorie
// Tips : use callback haveCategory | getMovieTitle 

// Réecrire les fonctions suivante en ES6 
function getAllTitle(array) {
    return array.map(item => item.title)
}

function filterYear(array) {
    return array.filter(item => item.year < 2000)
}

function getCalcul(callback, a, b) {
    return callback(a, b)
}

function getSomething(array, callback) {
    const result = callback(array)
    return result.every(item => item.title)
}