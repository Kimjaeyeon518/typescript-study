export class Agent {

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  /* 이름 */
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  introduce(): void {
    console.log(`에이전트 이름: ${this._name}`);
  }
}