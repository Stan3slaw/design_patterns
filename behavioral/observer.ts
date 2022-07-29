interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  public state: number;

  public attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);

    if (isExist) {
      return console.log(`Subject: observer already attached`);
    }

    console.log(`Subject: attaching observer`);
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex === -1) {
      console.log(`Subject: observer does not exist`);
    }

    this.observers.splice(observerIndex, 1);
    console.log(`Subject: detached observer`);
  }

  public notify(): void {
    console.log('Subject: Notifying observers...');
    this.observers.forEach((observer) => observer.update(this));
  }

  public doSomeBusinessLogic() {
    console.log(`Subject: I'm doing something important.`);
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log(`Subject: My state has just changed to: ${this.state}`);
    this.notify();
  }
}

interface Observer {
  update(subject: Subject): void;
}

class ConcreteObserverA {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state > 5) {
      console.log('ConcreteObserverA: Reacted to the event.');
    }
  }
}

class ConcreteObserverB {
  update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && subject.state <= 5) {
      console.log('ConcreteObserverB: Reacted to the event.');
    }
  }
}

const clientCode = () => {
  const subject = new ConcreteSubject();
  const observerA = new ConcreteObserverA();
  const observerB = new ConcreteObserverB();

  subject.attach(observerA);
  subject.attach(observerB);

  subject.doSomeBusinessLogic();
  subject.doSomeBusinessLogic();

  subject.detach(observerA);
  subject.doSomeBusinessLogic();
};

clientCode();
