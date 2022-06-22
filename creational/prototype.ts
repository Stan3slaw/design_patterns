class LancerEvo {
  public wheels: number;
  public engine: object;

  public clone(): this {
    const clone = Object.create(this);
    // clone.engine = JSON.parse(JSON.stringify(this.engine));
    clone.engine = Object.create(this.engine);

    return clone;
  }
}

function clientCode() {
  const lancerEvo = new LancerEvo();
  lancerEvo.wheels = 4;
  lancerEvo.engine = {
    name: '4g63t',
    cylinders: 4,
  };

  const lancerEvoCLone = lancerEvo.clone();
  if (lancerEvo.wheels === lancerEvoCLone.wheels) {
    console.log('Wheels field values have been carried over to a clone. Yay!');
  } else {
    console.log('Wheels field values have not been copied. Booo!');
  }
  if (lancerEvo.engine === lancerEvoCLone.engine) {
    console.log('Simple engine has not been cloned. Booo!');
  } else {
    console.log('Simple engine has been cloned. Yay!');
  }
  console.log(Object.getPrototypeOf(lancerEvoCLone.engine));
  console.log(lancerEvoCLone.wheels);
}

clientCode();
