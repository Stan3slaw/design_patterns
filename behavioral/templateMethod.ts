abstract class AbstractClass {
  public templateMethod(): void {
    this.baseOperation1();
    this.requiredOperation1();
    this.baseOperation2();
    this.hook1();
    this.requiredOperation2();
    this.baseOperation3();
    this.hook2();
  }

  protected baseOperation1(): void {
    console.log(`AbstractClass: performing baseOperation1`);
  }

  protected baseOperation2(): void {
    console.log(`AbstractClass: performing baseOperation2`);
  }

  protected baseOperation3(): void {
    console.log(`AbstractClass: performing baseOperation3`);
  }

  protected abstract requiredOperation1(): void;

  protected abstract requiredOperation2(): void;

  protected hook1(): void {}

  protected hook2(): void {}
}

class ConcreteClass1 extends AbstractClass {
  protected requiredOperation1(): void {
    console.log(`ConcreteClass1: performing requiredOperation1`);
  }

  protected requiredOperation2(): void {
    console.log(`ConcreteClass1: performing requiredOperation2`);
  }
}

class ConcreteClass2 extends AbstractClass {
  protected requiredOperation1(): void {
    console.log(`ConcreteClass2: performing requiredOperation1`);
  }

  protected requiredOperation2(): void {
    console.log(`ConcreteClass2: performing requiredOperation2`);
  }

  protected hook2(): void {
    console.log(`ConcreteClass2: performing hook2`);
  }
}

const clientCode = () => {
  const concreteClass1 = new ConcreteClass1();
  concreteClass1.templateMethod();
  const concreteClass2 = new ConcreteClass2();
  concreteClass2.templateMethod();
};

clientCode();
