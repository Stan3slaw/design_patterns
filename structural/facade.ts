class PlumbingSystem {
  private isTurnedOn: boolean = false;
  private pressure: number;

  setPressure(pa: number): void {
    this.pressure = pa;
  }

  turnOn(): void {
    this.isTurnedOn = true;
  }

  turnOff() {
    this.isTurnedOn = false;
    this.pressure = 0;
  }
}

class ElectricalSystem {
  private isTurnedOn: boolean = false;
  private voltage: number;

  setVoltage(v: number) {
    this.voltage = v;
  }

  turnOn() {
    this.isTurnedOn = true;
  }

  turnOff() {
    this.isTurnedOn = false;
    this.voltage = 0;
  }
}

class House {
  private plumbing = new PlumbingSystem();
  private electrical = new ElectricalSystem();

  public turnOnSystems() {
    this.plumbing.setPressure(500);
    this.plumbing.turnOn();

    this.electrical.setVoltage(220);
    this.electrical.turnOn();

    console.log(this.plumbing);
    console.log(this.electrical);
  }

  public shutDown() {
    this.plumbing.turnOff();
    this.electrical.turnOff();

    console.log(this.plumbing);
    console.log(this.electrical);
  }
}

function clientCode() {
  const house = new House();
  house.turnOnSystems();
  house.shutDown();
}

clientCode();
