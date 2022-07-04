interface Component {
  operation(): string;
}

class ConcreteComponent implements Component {
  operation(): string {
    return 'ConcreteComponent';
  }
}

class Decorator implements Component {
  constructor(protected component: Component) {}

  operation() {
    return this.component.operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  operation() {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

class ConcreteDecoratorB extends Decorator {
  operation() {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

function print(component: Component): void {
  console.log(`Result: ${component.operation()}`);
}

function clientCode() {
  const simple = new ConcreteComponent();
  print(simple);

  const decoratorA = new ConcreteDecoratorA(simple);
  const decoratorB = new ConcreteDecoratorB(decoratorA);
  print(decoratorB);
}

clientCode();
