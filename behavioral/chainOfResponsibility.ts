interface Handler {
  handle(number: number): string | null;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;

    return this.nextHandler;
  }

  handle(number: number): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(number);
    }
    return null;
  }
}

class NegativeNumbersHandler extends AbstractHandler {
  handle(number: number): string | null {
    if (number < 0) {
      return `NegativeNumbersHandler: I got ${number}`;
    }

    return super.handle(number);
  }
}

class PositiveNumbersHandler extends AbstractHandler {
  handle(number: number): string | null {
    if (number > 0) {
      return `PositiveNumbersHandler: I got ${number}`;
    }

    return super.handle(number);
  }
}

const client = (handler: Handler) => {
  const numbers = [1, 2, -2, 6, 0, -4, 77];

  for (const number of numbers) {
    const result = handler.handle(number);

    if (result) {
      console.log(result);
    } else {
      console.log(`${number} was left untouched.`);
    }
  }
};

const negativeNumbersHandler = new NegativeNumbersHandler();
const positiveNumbersHandler = new PositiveNumbersHandler();

negativeNumbersHandler.setNext(positiveNumbersHandler);
client(negativeNumbersHandler);
