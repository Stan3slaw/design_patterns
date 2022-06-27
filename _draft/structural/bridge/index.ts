class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction: Base operation with:\n${result}`;
  }
}

class ExtendedAbstraction extends Abstraction {
  operation(): string {
    const result = this.implementation.operationImplementation();
    return `ExtendedAbstraction: Extended operation with:\n${result}`;
  }
}

interface Implementation {
  operationImplementation(): string;
}

class ConcreteImplementationA {
  operationImplementation(): string {
    return `concrete implementation A`;
  }
}

class ConcreteImplementationB {
  operationImplementation(): string {
    return `concrete implementation B`;
  }
}

function clientCode() {
  let concreteImplementation = new ConcreteImplementationA();
  let abstraction = new Abstraction(concreteImplementation);

  console.log(abstraction.operation());

  abstraction = new ExtendedAbstraction(concreteImplementation);

  console.log(abstraction.operation());

  concreteImplementation = new ConcreteImplementationB();
  abstraction = new Abstraction(concreteImplementation);

  console.log(abstraction.operation());

  abstraction = new ExtendedAbstraction(concreteImplementation);

  console.log(abstraction.operation());
}

clientCode();
