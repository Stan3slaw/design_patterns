interface Car {
  engine: () => string;
}

class Tesla implements Car {
  engine() {
    return `Tesla's motor`;
  }
}

class Mitsubishi implements Car {
  engine() {
    return `Mitsubishi's 4g63t engine`;
  }
}

abstract class Factory {
  abstract createCar(): Car;

  engineInfo(): string {
    const car = this.createCar();
    return `Info: ${car.engine()}`;
  }
}

class TeslaFactory extends Factory {
  createCar(): Car {
    return new Tesla();
  }
}

class MitsubishiFactory extends Factory {
  createCar(): Car {
    return new Mitsubishi();
  }
}

function client(factory: Factory) {
  console.log(factory.engineInfo());
}

client(new TeslaFactory());
client(new MitsubishiFactory());
