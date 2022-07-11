class Flyweight {
  constructor(private sharedState: any) {}

  operation(uniqueState: any) {
    const s = JSON.stringify(this.sharedState);
    const u = JSON.stringify(uniqueState);
    console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state`);
  }
}

class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = {};

  constructor(initialFlyweights: string[][]) {
    for (const state of initialFlyweights) {
      this.flyweights[this.getKey(state)] = new Flyweight(state);
    }
  }

  getKey(state: string[]): string {
    return state.join('_');
  }

  getFlyweight(sharedState: string[]) {
    const key = this.getKey(sharedState);

    if (!(key in this.flyweights)) {
      console.log(`Cannot find a flyweight, creating new one.`);
      this.flyweights[key] = new Flyweight(sharedState);
    } else {
      console.log(`Reusing exists flyweight`);
    }

    return this.flyweights[key];
  }

  listFlyweights() {
    for (const key in this.flyweights) {
      console.log(key);
    }
  }
}

const factory = new FlyweightFactory([
  ['Mitsubishi', 'Evo9', 'black'],
  ['Nissan', 'S14', 'white'],
  ['Toyota', 'CorrolaTsport', 'red'],
  ['Nissan', 'GTRR34', 'blue'],
]);

factory.listFlyweights();

function addToPoliceDatabase(
  factory: FlyweightFactory,
  plates: string,
  owner: string,
  brand: string,
  model: string,
  color: string,
) {
  console.log(`Adding new car to database`);
  const flyweight = factory.getFlyweight([brand, model, color]);
  flyweight.operation([plates, owner]);
}

addToPoliceDatabase(factory, 'AC1902AO', 'Vasyl', 'Mitsubishi', 'Evo9', 'black');
addToPoliceDatabase(factory, 'AK0000OO', 'Dima', 'Nissan', 'S15', 'black');

factory.listFlyweights();
