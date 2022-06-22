interface FurnitureFactory {
  createChair(): Chair;
  createSofa(): Sofa;
  createTable(): Table;
}

interface Chair {
  infoChair(): string;

  suitableTable(): string;
}

interface Sofa {
  infoSofa(): string;
}

interface Table {
  infoTable(): string;

  suitableChairs(): string;
}

class ModernChair implements Chair {
  infoChair(): string {
    return `Modern chair`;
  }

  suitableTable(): string {
    return `Only modern table fits to ${this.infoChair()}`;
  }
}

class ModernSofa implements Sofa {
  infoSofa(): string {
    return `Modern sofa`;
  }
}

class ModernTable implements Table {
  infoTable(): string {
    return `Modern table`;
  }

  suitableChairs(): string {
    return `Only modern chairs fits to ${this.infoTable()}`;
  }
}

class ArtDecoChair implements Chair {
  infoChair(): string {
    return `ArtDeco chair`;
  }

  suitableTable(): string {
    return `Only art deco table fits to ${this.infoChair()}`;
  }
}

class ArtDecoSofa implements Sofa {
  infoSofa(): string {
    return `ArtDeco sofa`;
  }
}

class ArtDecoTable implements Table {
  infoTable(): string {
    return `ArtDeco table`;
  }

  suitableChairs(): string {
    return `Only art deco chairs fits to ${this.infoTable()}`;
  }
}

class ModernFactory implements FurnitureFactory {
  createChair(): ModernChair {
    return new ModernChair();
  }

  createSofa(): ModernSofa {
    return new ModernSofa();
  }

  createTable(): ModernTable {
    return new ModernTable();
  }
}

class ArtDecoFactory implements FurnitureFactory {
  createChair(): ArtDecoChair {
    return new ArtDecoChair();
  }

  createSofa(): ArtDecoSofa {
    return new ArtDecoSofa();
  }

  createTable(): ArtDecoTable {
    return new ArtDecoTable();
  }
}

function shop(factory: FurnitureFactory) {
  const chair = factory.createChair();
  const sofa = factory.createSofa();
  const table = factory.createTable();
  console.log('Chair:', chair.infoChair());
  console.log('Suitable table:', chair.suitableTable());

  console.log('Sofa:', sofa.infoSofa());

  console.log('Table:', table.infoTable());
  console.log('Suitable chairs:', table.suitableChairs());
}

shop(new ModernFactory());
shop(new ArtDecoFactory());
