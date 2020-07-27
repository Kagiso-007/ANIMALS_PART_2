"use strict";
exports.__esModule = true;

var Dog_1 = require("../../src/Dog/Dog")
var Cat_1 = require("../../src/Cat/Cat")

describe("Dog", function () {
    var spike = new Dog_1.Dog("spike");
    it("Should return 'Food!!'", function () {
        expect(spike.eats()).toEqual("Food!!");
    });

    it("Should return 'Bark!!'", function(){
        expect(spike.sound()).toEqual("Bark!!");
    });
});

describe("Cat",function() {
    var tom = new Cat_1.Cat("Tom");
    it("Should return 'Food!!'", function(){
        expect(tom.eats()).toEqual("Food!!")
    });

    it("Should return 'Meoow'", function(){
        expect(tom.sound()).toEqual("Meoow")
    })
})