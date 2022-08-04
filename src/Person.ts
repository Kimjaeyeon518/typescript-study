import {Greeter} from "./Greeter";

export class Person implements Greeter {
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

  /**
   * 정보 출력
   */
  introduce(): void {
    console.log(`name: ${this._name}`);
  }

}