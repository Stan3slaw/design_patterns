// class Prototype {
//   public primitive: any;
//   public component: object;
//   public circularReference: ComponentWithBackReference;

//   public clone(): this {
//     const clone = Object.create(this);

//     clone.component = Object.create(this.component);

//     clone.circularReference = {
//       ...this.circularReference,
//       prototype: { ...this },
//     };

//     return clone;
//   }
// }

// class ComponentWithBackReference {
//   public prototype;

//   constructor(prototype: Prototype) {
//     this.prototype = prototype;
//   }
// }

// function clientCode() {
//   const p1 = new Prototype();
//   p1.primitive = 245;
//   p1.component = new Date();
//   p1.circularReference = new ComponentWithBackReference(p1);

//   const p2 = p1.clone();
//   if (p1.primitive === p2.primitive) {
//     console.log('Primitive field values have been carried over to a clone. Yay!');
//   } else {
//     console.log('Primitive field values have not been copied. Booo!');
//   }
//   if (p1.component === p2.component) {
//     console.log('Simple component has not been cloned. Booo!');
//   } else {
//     console.log('Simple component has been cloned. Yay!');
//   }

//   if (p1.circularReference === p2.circularReference) {
//     console.log('Component with back reference has not been cloned. Booo!');
//   } else {
//     console.log('Component with back reference has been cloned. Yay!');
//   }

//   if (p1.circularReference.prototype === p2.circularReference.prototype) {
//     console.log('Component with back reference is linked to original object. Booo!');
//   } else {
//     console.log('Component with back reference is linked to the clone. Yay!');
//   }
// }

// clientCode();

// class LancerEvo {
//   public wheels: number;
//   public engine: object;

//   public clone(): this {
//     const clone = Object.create(this);
//     // clone.engine = JSON.parse(JSON.stringify(this.engine));
//     clone.engine = Object.create(this.engine);

//     return clone;
//   }
// }

// function clientCode() {
//   const lancerEvo = new LancerEvo();
//   lancerEvo.wheels = 4;
//   lancerEvo.engine = {
//     name: '4g63t',
//     cylinders: 4,
//   };

//   const lancerEvoCLone = lancerEvo.clone();
//   if (lancerEvo.wheels === lancerEvoCLone.wheels) {
//     console.log('Wheels field values have been carried over to a clone. Yay!');
//   } else {
//     console.log('Wheels field values have not been copied. Booo!');
//   }
//   if (lancerEvo.engine === lancerEvoCLone.engine) {
//     console.log('Simple engine has not been cloned. Booo!');
//   } else {
//     console.log('Simple engine has been cloned. Yay!');
//   }
//   console.log(Object.getPrototypeOf(lancerEvoCLone.engine));
//   console.log(lancerEvoCLone.wheels);
// }

// clientCode();