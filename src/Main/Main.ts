import { Dog } from '../Dog/Dog'
import { Cat } from '../Cat/Cat'
import { Home } from '../Home/Home'

const home = new Home();
const dog = new Dog("Spike");
const cat = new Cat("Tom");

console.log(dog.eats());
console.log(cat.eats());

home.adoptPet(dog);
home.adoptPet(cat);

home.makeAllSounds();


