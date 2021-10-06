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
const getAllDogsName = (callback, array) =>  {
    const dogs = callback(array)
    return dogs.map(dog => dog.name)
}
console.log(getAllDogsName(getAllDogs, animals))
//
const sum = (param1, param2) => param1 + param2;
const soustraction = (param1, param2) => param1 - param2;
const multiply = (param1, param2) => param1 * param2;
const division = (param1, param2) => param1 / param2;

const calculator = (fonction, param1, param2) => fonction(param1, param2);

// console.log(calculator(sum, 2,3), "Resultat attendu 5");
// console.log(calculator(multiply, 2,3), "Resultat attendu 6");
// console.log(calculator(soustraction, 5,3), "Resultat attendu 2");
// console.log(calculator(division, 9,3), "Resultat attendu 3");

// Ecrire une fonction qui prend en parametre un tableau et qui retourne un tableau de chats
const getAllCats = (array) => { /** */}
// Ecrire une fonction qui prend en parametre "la précedente fonction" et un tableau et qui retourne un tableau
// contenant tous les noms de cats