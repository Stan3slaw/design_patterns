class Remote {
  constructor(protected device: Device) {}

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  chanelUp() {
    this.device.setChanel(this.device.getChanel() + 1);
  }

  chanelDown() {
    this.device.setChanel(this.device.getChanel() - 1);
  }
}

class AdvancedRemote extends Remote {
  mute() {
    this.device.setVolume(0);
  }
}

interface Device {
  isEnabled(): boolean;
  disable(): void;
  enable(): void;
  setVolume(volume: number): void;
  getVolume(): number;
  setChanel(chanel: number): void;
  getChanel(): number;
}

class Tv implements Device {
  private on: boolean;
  private volume: number;
  private chanel: number;

  constructor() {
    this.on = false;
    this.volume = 10;
    this.chanel = 1;
  }

  isEnabled(): boolean {
    return this.on;
  }

  disable(): void {
    this.on = false;
  }

  enable(): void {
    this.on = true;
  }

  setVolume(volume: number): void {
    if (volume < 0) {
      this.volume = 0;
    } else {
      this.volume = volume;
    }
  }

  getVolume(): number {
    return this.volume;
  }

  setChanel(chanel: number): void {
    if (chanel < 1) {
      this.chanel = 1;
    } else {
      this.chanel = chanel;
    }
  }

  getChanel(): number {
    return this.chanel;
  }
}

class Radio implements Device {
  private on: boolean;
  private volume: number;
  private chanel: number;

  constructor() {
    this.on = false;
    this.volume = 5;
    this.chanel = 1;
  }

  isEnabled(): boolean {
    return this.on;
  }

  disable(): void {
    this.on = false;
  }

  enable(): void {
    this.on = true;
  }

  setVolume(volume: number): void {
    if (volume < 0) {
      this.volume = 0;
    } else {
      this.volume = volume;
    }
  }

  getVolume(): number {
    return this.volume;
  }

  setChanel(chanel: number): void {
    if (chanel < 1) {
      this.chanel = 1;
    } else {
      this.chanel = chanel;
    }
  }

  getChanel(): number {
    return this.chanel;
  }
}

function clientCode() {
  const tv = new Tv();
  const remote = new Remote(tv);

  remote.togglePower();

  remote.chanelUp();
  remote.chanelUp();
  remote.chanelUp();
  remote.chanelUp();

  remote.chanelDown();
  remote.chanelDown();
  remote.chanelDown();

  remote.volumeDown();
  remote.volumeDown();

  remote.volumeUp();
  remote.volumeUp();

  console.log(tv);

  const radio = new Radio();
  const advancedRemote = new AdvancedRemote(radio);

  advancedRemote.volumeUp();
  advancedRemote.volumeUp();

  advancedRemote.mute();

  console.log(radio);
}

clientCode();
