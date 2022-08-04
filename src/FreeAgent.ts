import {Agent} from "./Agent";

// @ts-ignore
export class FreeAgent extends Agent {

  get name(): string {
    return this._name;
  }

  /* 이름 */
  private readonly _name: string = "FA";

  constructor() {
    // @ts-ignore
    super(this._name);
  }

  introduce(): void {
    console.log(`agent name: ${this._name}`);
  }
}