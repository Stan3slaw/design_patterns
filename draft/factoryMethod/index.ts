// interface Product {
//   operation(): string;
// }

// class ConcreteProduct1 implements Product {
//   operation(): string {
//     return `concrete product 1`;
//   }
// }

// class ConcreteProduct2 implements Product {
//   operation(): string {
//     return `concrete product 2`;
//   }
// }

// abstract class Creator {
//   abstract createProduct(): Product;

//   operationExecutor(): string {
//     const product = this.createProduct();
//     return `This is ${product.operation()}`;
//   }

//   hello(): string {
//     const product = this.createProduct();
//     return `Hello ${product.operation()}`;
//   }
// }

// class ConcreteCreator1 extends Creator {
//   createProduct() {
//     return new ConcreteProduct1();
//   }
// }

// class ConcreteCreator2 extends Creator {
//   createProduct() {
//     return new ConcreteProduct2();
//   }
// }

// function clientCode(creator: Creator) {
//   console.log(creator.operationExecutor());
//   console.log(creator.hello());
// }

// clientCode(new ConcreteCreator1());
// clientCode(new ConcreteCreator2());

// interface Car {
//   engine: () => string;
// }

// class Tesla implements Car {
//   engine() {
//     return `Tesla's motor`;
//   }
// }

// class Mitsubishi implements Car {
//   engine() {
//     return `Mitsubishi's 4g63t engine`;
//   }
// }

// abstract class Factory {
//   abstract createCar(): Car;

//   engineInfo(): string {
//     const car = this.createCar();
//     return `Info: ${car.engine()}`;
//   }
// }

// class TeslaFactory extends Factory {
//   createCar() {
//     return new Tesla();
//   }
// }

// class MitsubishiFactory extends Factory {
//   createCar() {
//     return new Mitsubishi();
//   }
// }

// function client(factory: Factory) {
//   console.log(factory.engineInfo());
// }

// client(new TeslaFactory());
// client(new MitsubishiFactory());
