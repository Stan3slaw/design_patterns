interface Command {
  execute(): void;
}

class SimpleCommand implements Command {
  constructor(private payload: string) {}

  execute(): void {
    console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
  }
}

class ComplexCommand implements Command {
  constructor(private receiver: Receiver, private a: string, private b: string) {}

  execute(): void {
    console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}

class Receiver {
  doSomething(a: string): void {
    console.log(`Receiver: Working on (${a}.)`);
  }

  doSomethingElse(b: string): void {
    console.log(`Receiver: Also working on (${b}.)`);
  }
}

class Invoker {
  private onStart: Command;
  private onFinish: Command;

  setOnStart(command: Command): void {
    this.onStart = command;
  }

  setOnFinish(command: Command): void {
    this.onFinish = command;
  }

  private isCommand(object: Command): boolean {
    return object.execute !== undefined;
  }

  doSomethingImportant(): void {
    console.log('Invoker: Does anybody want something done before I begin?');
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log('Invoker: ...doing something really important...');

    console.log('Invoker: Does anybody want something done after I finish?');
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }
}

const clientCode = (): void => {
  const invoker = new Invoker();
  const receiver = new Receiver();

  invoker.setOnStart(new SimpleCommand('Say hi!'));
  invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Send report'));

  invoker.doSomethingImportant();
};

clientCode();
