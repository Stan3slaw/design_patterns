class Editor {
  constructor(private state: string) {
    console.log(`Editor: I have such state: ${state}`);
  }

  doSomething() {
    console.log(`Editor: do something important`);
    this.state = this.generateRandomString();
    console.log(`Editor: state has changed to: ${this.state}`);
  }

  private generateRandomString() {
    return (Math.random() + 1).toString(36).substring(7);
  }

  save(): Memento {
    return new ConcreteMemento(this.state);
  }

  restore(memento: Memento): void {
    this.state = memento.getState();
    console.log(`Originator: My state has changed to: ${this.state}`);
  }
}

interface Memento {
  getState(): string;
  getName(): string;
  getDate(): string;
}

class ConcreteMemento implements Memento {
  private date: string;

  constructor(private state: string) {
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  public getState(): string {
    return this.state.substring(0, 10);
  }

  public getName(): string {
    return `${this.date} / ${this.state}...`;
  }

  public getDate(): string {
    return this.date;
  }
}

class Caretaker {
  private mementos: Memento[] = [];

  constructor(private editor: Editor) {}

  public backup(): void {
    console.log(`Caretaker: Saving Editor's state...`);
    this.mementos.push(this.editor.save());
  }

  public undo(): void {
    if (!this.mementos.length) {
      return;
    }

    const memento = this.mementos.pop();
    console.log(`Caretaker: restoring: ${memento!.getName()}`);
    this.editor.restore(memento!);
  }

  public showHistory() {
    console.log(`Caretaker: history: \n`);
    this.mementos.forEach((memento) => console.log(memento.getName));
  }
}

const clientCode = () => {
  const editor = new Editor('Initial state');
  const caretaker = new Caretaker(editor);

  caretaker.backup();
  editor.doSomething();

  caretaker.backup();
  editor.doSomething();

  caretaker.undo();
};

clientCode();
