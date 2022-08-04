export class Agent {

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  /* 이름 */
  private _name: string = "FA";

  constructor(name: string) {
    this._name = name;
  }

  introduce(): void {
    console.log(`agent name: ${this._name}`);
  }
}