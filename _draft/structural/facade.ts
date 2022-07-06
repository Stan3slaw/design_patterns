class Facade {
  constructor(
    protected subsystem1: Subsystem1 | null = null,
    protected subsystem2: Subsystem2 | null = null,
  ) {
    this.subsystem1 = subsystem1 || new Subsystem1();
    this.subsystem2 = subsystem2 || new Subsystem2();
  }

  operation(): string {
    let result = 'Facade initializes subsystems: \n';
    result += this.subsystem1?.operation1();
    result += this.subsystem2?.operation1();
    result += `Facade orders subsystems to perform the action: \n`;
    result += this.subsystem1?.operation2();
    result += this.subsystem2?.operation2();

    return result;
  }
}

class Subsystem1 {
  operation1(): string {
    return 'Subsystem1 ready\n';
  }

  operation2(): string {
    return 'Subsystem1 go\n';
  }
}

class Subsystem2 {
  operation1(): string {
    return 'Subsystem2 ready\n';
  }

  operation2(): string {
    return 'Subsystem2 go\n';
  }
}

function clientCode() {
  const subsystem1 = new Subsystem1();
  const subsystem2 = new Subsystem2();

  const facade1 = new Facade(subsystem1, subsystem2);
  console.log(facade1.operation());

  const facade2 = new Facade();
  console.log(facade2.operation());
}

clientCode();
