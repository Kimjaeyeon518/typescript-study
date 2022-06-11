import {Agent} from "./Agent";

export class Player {
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get team(): string {
    return this._team;
  }

  set team(value: string) {
    this._team = value;
  }

  get contractPeriodMonth(): number {
    return this._contractPeriodMonth;
  }

  set contractPeriodMonth(value: number) {
    this._contractPeriodMonth = value;
  }

  get agent(): Agent {
    return <Agent>this._agent;
  }

  set agent(value: Agent) {
    this._agent = value;
  }

  /* 이름 */
  private _name: string;
  /* 팀 */
  private _team: string = 'FA';
  /* 계약기간 */
  private _contractPeriodMonth: number = 0;
  /* 에이전트 */
  private _agent: Agent | undefined;

  constructor(name: string) {
    this._name = name;
  }

  introduce(): void {
    console.log(`이름: ${this._name}`);
    console.log(`소속팀: ${this._team}`);
    console.log(`계약기간: ${this._contractPeriodMonth}`);
    console.log(`에이전트: ${this._agent?.name}`);
  }

  join(team: string, contractMonth: number): void {
    this._team = team;
    this._contractPeriodMonth = contractMonth;
  }

  leave(): void {
    this._team = 'FA';
  }

  extendContract(periodMonth: number): void {
    this._contractPeriodMonth += periodMonth;
  }

  managedBy(agent: Agent): void {
    this._agent = agent;
  }
}