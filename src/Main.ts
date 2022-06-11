import {Person} from "./Person";
import {Player} from "./Player";
import {Agent} from "./Agent";

// const kris: Person = new Person('Kris', 'Programmer');
//
// const callback: Function = function () {
//   console.log("I'm a callback !");
// }
//
// const callee = kris.call("jaeyeon", callback);

const player: Player = new Player('Jack');
const agent: Agent = new Agent('Bigin');

player.introduce();
console.log("------------------")

player.join('Kakao', 10);
player.introduce();
console.log("------------------")

player.leave();
player.introduce();
console.log("------------------")

player.extendContract(5);
player.introduce();
console.log("------------------")

player.managedBy(agent);
player.introduce();
console.log("------------------")

agent.introduce();
