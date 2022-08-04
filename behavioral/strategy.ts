class Context {
  constructor(private strategy: Strategy) {}

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public sort(): void {
    console.log(`Context: sorting data using ${this.strategy.constructor.name}`);
    const result = this.strategy.doAlgorithm(['b', 'a', 'd', 'e']);
    console.log(result.join(','));
  }
}

interface Strategy {
  doAlgorithm(data: string[]): string[];
}

class SortStartegy implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

class ReverseSortStartegy implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort().reverse();
  }
}

const clientCode = () => {
  const context = new Context(new SortStartegy());
  context.sort();
  context.setStrategy(new ReverseSortStartegy());
  context.sort();
};

clientCode();
