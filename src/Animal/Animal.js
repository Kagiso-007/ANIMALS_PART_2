"use strict";
exports.__esModule = true;
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eats = function () {
        return "Food!!";
    };
    Animal.prototype.sound = function () {
        return this.name + "Sound...";
    };
    return Animal;
}());
exports.Animal = Animal;
