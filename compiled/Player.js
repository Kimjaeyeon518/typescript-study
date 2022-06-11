"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = (function () {
    function Player(name) {
        this._team = 'FA';
        this._contractPeriodMonth = 0;
        this._name = name;
    }
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "team", {
        get: function () {
            return this._team;
        },
        set: function (value) {
            this._team = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "contractPeriodMonth", {
        get: function () {
            return this._contractPeriodMonth;
        },
        set: function (value) {
            this._contractPeriodMonth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "agent", {
        get: function () {
            return this._agent;
        },
        set: function (value) {
            this._agent = value;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.introduce = function () {
        var _a;
        console.log("\uC774\uB984: ".concat(this._name));
        console.log("\uC18C\uC18D\uD300: ".concat(this._team));
        console.log("\uACC4\uC57D\uAE30\uAC04: ".concat(this._contractPeriodMonth));
        console.log("\uC5D0\uC774\uC804\uD2B8: ".concat((_a = this._agent) === null || _a === void 0 ? void 0 : _a.name));
    };
    Player.prototype.join = function (team, contractMonth) {
        this._team = team;
        this._contractPeriodMonth = contractMonth;
    };
    Player.prototype.leave = function () {
        this._team = 'FA';
    };
    Player.prototype.extendContract = function (periodMonth) {
        this._contractPeriodMonth += periodMonth;
    };
    Player.prototype.managedBy = function (agent) {
        this._agent = agent;
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map