interface Component {
  operation(): void;
}

class Leaf implements Component {
  constructor(private name: string) {}

  operation = () => {
    console.log(`leaf ${this.name} operation`);
  };
}

class Composite implements Component {
  private components: Component[];
  constructor(private name: string) {
    this.components = [];
  }

  operation = (): void => {
    console.log(`composite ${this.name} operation`);
    this.components.forEach((component) => {
      component.operation();
    });
  };

  add = (component: Component): void => {
    this.components.push(component);
  };

  remove = (component: Component): void => {
    const componentIndex = this.components.indexOf(component);
    this.components.splice(componentIndex, 1);
  };
}

function clientCode() {
  const leaf1 = new Leaf('1');
  const leaf2 = new Leaf('2');
  const leaf3 = new Leaf('3');

  const composite1 = new Composite('Composite1');
  const composite2 = new Composite('Composite2');

  composite1.add(leaf1);
  composite1.add(leaf2);
  composite1.add(leaf3);

  composite1.remove(leaf3);

  composite2.add(leaf1);
  composite2.add(leaf3);

  composite1.operation();
  composite2.operation();
}

clientCode();
