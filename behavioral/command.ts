interface Command {
  execute(): void;
  undo(): void;
}

class TV {
  state: boolean = false;

  on(): void {
    this.state = true;
  }

  off(): void {
    this.state = false;
  }
}

class TVOnCommand implements Command {
  constructor(private tv: TV) {}

  execute(): void {
    this.tv.on();
  }

  undo(): void {
    this.tv.off();
  }
}

class TVOffCommand implements Command {
  constructor(private tv: TV) {}

  execute(): void {
    this.tv.off();
  }

  undo(): void {
    this.tv.on();
  }
}

class Remote {
  onCommand: Command;
  offCommand: Command;

  setCommands(onCommand: Command, offCommand: Command): void {
    this.onCommand = onCommand;
    this.offCommand = offCommand;
  }

  onButtonClick() {
    this.onCommand.execute();
  }

  offButtonClick() {
    this.offCommand.execute();
  }
}

const clientCode = () => {
  const tv = new TV();
  const remote = new Remote();
  const tvOnCommand = new TVOnCommand(tv);
  const tvOffCommand = new TVOffCommand(tv);
  remote.setCommands(tvOnCommand, tvOffCommand);
  console.log(`TV state before command execution: ${tv.state}`);
  remote.onButtonClick();
  console.log(`TV state after command execution: ${tv.state}`);
};

clientCode();
