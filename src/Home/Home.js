"use strict";
exports.__esModule = true;
var Home = /** @class */ (function () {
    function Home() {
        this.pets = [];
    }
    Home.prototype.adoptPet = function (pet) {
        this.pets.forEach(function (Adopted_pet) {
            if (Adopted_pet == pet) {
                throw new Error('Pet: ' + pet.name + ' already adopted');
            }
        });
        this.pets.push(pet);
    };
    Home.prototype.makeAllSounds = function () {
        this.pets.forEach(function (pet) {
            console.log(pet.sound());
        });
    };
    return Home;
}());
exports.Home = Home;
