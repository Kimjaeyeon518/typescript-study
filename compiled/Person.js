"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = (function () {
    function Person(name, occupation) {
        this._name = name;
        this._occupation = occupation;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "occupation", {
        get: function () {
            return this._occupation;
        },
        set: function (value) {
            this._occupation = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.print = function () {
        console.log('printing...');
        console.log("name: ".concat(this._name));
        console.log("occupation: ".concat(this._occupation));
    };
    Person.prototype.foo = function (value1, value2) {
        console.log("value1: ".concat(value1));
        if (value2) {
            console.log("value2: ".concat(value2));
        }
    };
    Person.prototype.call = function (printName, callback) {
        return function () {
        };
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map