interface MyIterator<T> {
  current(): T;
  next(): T;
  key(): number;
  isValid(): boolean;
}

interface Agregator {
  getIterator(): MyIterator<string>;
}

class ArrIterator implements MyIterator<string> {
  constructor(
    private collection: WordsCollection,
    private reverse: boolean = false,
    private position: number = 0,
  ) {
    if (reverse) {
      this.position = this.collection.getLength() - 1;
    }
  }

  current(): string {
    return this.collection.getValues()[this.position];
  }

  next(): string {
    const currentValue = this.current();
    this.position += this.reverse ? -1 : 1;
    return currentValue;
  }

  key(): number {
    return this.position;
  }

  isValid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }
    return this.position < this.collection.getLength();
  }
}

class WordsCollection implements Agregator {
  private items: string[] = [];

  addValue(value: string): void {
    this.items.push(value);
  }

  getValues(): string[] {
    return this.items;
  }

  getLength(): number {
    return this.items.length;
  }

  getIterator(): ArrIterator {
    const iterator = new ArrIterator(this);
    return iterator;
  }

  getReverseIterator(): ArrIterator {
    const reverseIterator = new ArrIterator(this, true);
    return reverseIterator;
  }
}

const clientCode = () => {
  const wordsCollection = new WordsCollection();
  wordsCollection.addValue('One');
  wordsCollection.addValue('Two');
  wordsCollection.addValue('Three');

  const iterator = wordsCollection.getIterator();
  console.log('Straight traversal:');
  while (iterator.isValid()) {
    console.log(iterator.next());
  }

  const reverseIterator = wordsCollection.getReverseIterator();
  console.log('Reverse traversal:');
  while (reverseIterator.isValid()) {
    console.log(reverseIterator.next());
  }
};

clientCode();
