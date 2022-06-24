class RoundHole {
  constructor(private radius: number) {}

  getRadius(): number {
    return this.radius;
  }

  fits(peg: RoundPeg) {
    return this.getRadius() >= peg.getRadius();
  }
}

class RoundPeg {
  constructor(private radius: number) {}

  getRadius(): number {
    return this.radius;
  }
}

class SquarePeg {
  constructor(private width: number) {}

  getWidth(): number {
    return this.width;
  }
}

class SquarePegAdapter extends RoundPeg {
  constructor(private squarePeg: SquarePeg) {
    super(squarePeg.getWidth());
  }

  getRadius(): number {
    return (this.squarePeg.getWidth() * Math.sqrt(2)) / 2;
  }
}

function clientCode() {
  const hole = new RoundHole(5);
  const roundPeg = new RoundPeg(5);
  console.log(hole.fits(roundPeg));

  const squarePeg = new SquarePeg(5);
  const squarePegAdapter = new SquarePegAdapter(squarePeg);
  console.log(hole.fits(squarePegAdapter));
}

clientCode();
