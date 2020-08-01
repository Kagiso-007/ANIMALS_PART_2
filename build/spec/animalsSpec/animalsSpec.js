"use strict";
exports.__esModule = true;
// const Dog_1 = require('../../src/Dog/Dog');
// const Cat_1 = require('../../src/Cat/Cat')
var Dog_1 = require("../../src/Dog/Dog");
var Cat_1 = require("../../src/Cat/Cat");
var spike = new Dog_1.Dog("spike");
var tom = new Cat_1.Cat("Tom");
describe("Dog", function () {
    it("Should return 'Food!!'", function () {
        expect(spike.eats()).toEqual("Food!!");
    });
    it("Should return 'Bark!!'", function () {
        expect(spike.sound()).toEqual("Bark!!");
    });
});
describe("Cat", function () {
    it("Should return 'Food!!'", function () {
        expect(tom.eats()).toEqual("Food!!");
    });
    it("Should return 'Meoow'", function () {
        expect(tom.sound()).toEqual("Meoow");
    });
});
