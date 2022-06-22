interface Builder {
  setSeats(seats: number): void;
  setEngine(engine: string): void;
  setTripComputer(computer: boolean): void;
  setGPS(gps: boolean): void;
}

class Car {
  completeSet: string[] = [];

  getInfo(): void {
    console.log(`Car complete set: ${this.completeSet.join(', ')}`);
  }
}

class Manual {
  manual: string[] = [];

  getInfo(): void {
    console.log(`Car manual: ${this.manual.join(', ')}`);
  }
}

class CarBuilder implements Builder {
  private car: Car;

  constructor() {
    this.reset();
  }

  reset() {
    this.car = new Car();
  }

  setSeats(seats: number) {
    this.car.completeSet.push(`seats number: ${seats}`);
  }

  setEngine(engine: string) {
    this.car.completeSet.push(`${engine} engine`);
  }

  setTripComputer(computer: boolean) {
    this.car.completeSet.push(`trip computer: ${computer}`);
  }

  setGPS(gps: boolean) {
    this.car.completeSet.push(`GPS: ${gps}`);
  }

  getCar(): Car {
    const result = this.car;
    this.reset();
    return result;
  }
}

class CarManualBuilder implements Builder {
  private manual: Manual;

  constructor() {
    this.reset();
  }

  reset() {
    this.manual = new Manual();
  }

  setSeats(seats: number) {
    this.manual.manual.push(`info about seats number: ${seats}`);
  }

  setEngine(engine: string) {
    this.manual.manual.push(`info about ${engine} engine`);
  }

  setTripComputer(computer: boolean) {
    this.manual.manual.push(`info about trip computer: ${computer}`);
  }

  setGPS(gps: boolean) {
    this.manual.manual.push(`info about GPS: ${gps}`);
  }

  getManual(): Manual {
    const result = this.manual;
    this.reset();
    return result;
  }
}

class Director {
  private builder: Builder;

  setBuilder(builder: Builder) {
    this.builder = builder;
  }

  constructSportsCar() {
    this.builder.setSeats(2);
    this.builder.setEngine('4g63t');
    this.builder.setTripComputer(true);
    this.builder.setGPS(true);
  }
}

function clientCode(director: Director) {
  const carBuilder = new CarBuilder();
  director.setBuilder(carBuilder);

  console.log('Sport car:');
  director.constructSportsCar();
  carBuilder.getCar().getInfo();

  const manualBuilder = new CarManualBuilder();
  director.setBuilder(manualBuilder);

  console.log('Manual for sport car:');
  director.constructSportsCar();
  manualBuilder.getManual().getInfo();

  console.log('Custom car:');
  carBuilder.setEngine('6.3 amg');
  carBuilder.setSeats(4);
  carBuilder.setGPS(true);
  carBuilder.getCar().getInfo();
}

const director = new Director();
clientCode(director);
