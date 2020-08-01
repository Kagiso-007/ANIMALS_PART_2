import { Dog } from '../src/Dog/Dog';
import { Cat } from '../src/Cat/Cat';

const spike = new Dog("spike");
const tom = new Cat("Tom");

describe("Dog", () => {
    it("Should return 'Food!!'", () => {
        expect(spike.eats()).toEqual("Food!!");
    });

    it("Should return 'Bark!!'", () =>{
        expect(spike.sound()).toEqual("Bark!!");
    });
});

describe("Cat",() => {
    it("Should return 'Food!!'", () =>{
        expect(tom.eats()).toEqual("Food!!")
    });

    it("Should return 'Meoow'",() =>{
        expect(tom.sound()).toEqual("Meoow")
    })
})