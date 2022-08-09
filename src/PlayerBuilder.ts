import {Player} from "./Player";
import {Agent} from "./Agent";
import {FreeAgent} from "./FreeAgent";
import {Teams} from "./Teams";

export class PlayerBuilder {

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  setTeam(value: Teams): PlayerBuilder {
    this._team = value;
    return this;
  }

  setContractPeriodMonth(value: number): PlayerBuilder {
    this._contractPeriodMonth = value;
    return this;
  }

  setAgent(value: Agent): PlayerBuilder {
    this._agent = value;
    return this;
  }

  /* 이름 */
  private _name: string;
  /* 팀 */
  private _team: Teams = Teams.NA;
  /* 계약기간 */
  private _contractPeriodMonth: number = 0;
  /* 에이전트 */
  // @ts-ignore
  private _agent: Agent = FreeAgent;

  constructor(name: string) {
    this._name = name;
  }

  build(): Player {
    return new Player(this);
  }
}