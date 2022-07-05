interface DataSource {
  writeData(data: string): void;
  readData(): any;
}

class FileDataSource implements DataSource {
  constructor(protected filename: string, protected fileData: string[]) {}

  writeData(data: string) {
    this.fileData.push(data);
  }

  readData() {
    return `${this.filename} contains ${this.fileData}`;
  }
}

class DataSourceDecorator implements DataSource {
  constructor(protected wrapee: DataSource) {}

  writeData(data: string) {
    this.wrapee.writeData(data);
  }

  readData() {
    return this.wrapee.readData();
  }
}

class EncryptionDecorator extends DataSourceDecorator {
  writeData(data: string) {
    super.writeData(`encrypted ${data}`);
  }

  readData() {
    const data = super.readData();
    return `decrypted ${data}`;
  }
}

function clientCode() {
  const source = new FileDataSource('file.exe', []);
  source.writeData('some data');
  console.log(source.readData());

  const encryptionDecorator = new EncryptionDecorator(source);
  encryptionDecorator.writeData('data for encrypting');
  console.log(encryptionDecorator.readData());
}

clientCode();
