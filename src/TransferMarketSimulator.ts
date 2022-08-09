
export class TransferMarketSimulator {
  private static instance: TransferMarketSimulator;

  private constructor() {
  }

  static getInstance(): TransferMarketSimulator {
    if(!TransferMarketSimulator.instance) {
      TransferMarketSimulator.instance = new TransferMarketSimulator();
    }

    console.log(`returned TransferMarketSimulator Instance.`);
    return TransferMarketSimulator.instance;
  }

  simulate(): void {

  }
}