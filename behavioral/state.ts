class Context {
  constructor(private state: State) {
    this.transitionTo(state);
  }

  public transitionTo(state: State): void {
    console.log(`Context: transition to ${state.constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  public request1(): void {
    console.log(`Context: making request1.`);
    this.state.handle1();
  }

  public request2(): void {
    console.log(`Context: making request2.`);
    this.state.handle2();
  }
}

abstract class State {
  protected context: Context;

  public setContext(context: Context): void {
    this.context = context;
  }

  abstract handle1(): void;

  abstract handle2(): void;
}

class ConcreteStateA extends State {
  public handle1(): void {
    console.log(`ConcreteStateA handles request1.`);
    console.log(`ConcreteStateA wants to change the state of the context.`);
    this.context.transitionTo(new ConcreteStateB());
  }

  public handle2(): void {
    console.log(`ConcreteStateA handles request2.`);
  }
}

class ConcreteStateB extends State {
  public handle1(): void {
    console.log(`ConcreteStateB handles request1.`);
  }

  public handle2(): void {
    console.log(`ConcreteStateB handles request2.`);
    console.log(`ConcreteStateB wants to change the state of the context.`);
    this.context.transitionTo(new ConcreteStateA());
  }
}

const clientCode = () => {
  const context = new Context(new ConcreteStateA());

  context.request1();
  context.request2();
};

clientCode();
