"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agent = void 0;
var Agent = (function () {
    function Agent(name) {
        this._name = name;
    }
    Object.defineProperty(Agent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Agent.prototype.introduce = function () {
        console.log("\uC5D0\uC774\uC804\uD2B8 \uC774\uB984: ".concat(this._name));
    };
    return Agent;
}());
exports.Agent = Agent;
//# sourceMappingURL=Agent.js.map