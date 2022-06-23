class Target {
  public request(): string {
    return "Target: The default target's behavior.";
  }
}

class Adaptee {
  public reverseRequest(): string {
    return '.eetpadA eht fo roivaheb laicepS';
  }
}

class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request(): string {
    const normalString = this.adaptee.reverseRequest().split('').reverse().join('');
    return `Adapted target: ${normalString}`;
  }
}

function print(target: Target) {
  console.log(target.request());
}

function clientCode() {
  const target = new Target();
  const adaptee = new Adaptee();
  const adapter = new Adapter(adaptee);

  print(target);
  print(adapter);
}

clientCode();
