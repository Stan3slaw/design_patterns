// class Singleton {
//     private static instance: Singleton;

//     public static getInstance() {
//         if(!Singleton.instance) {
//             Singleton.instance = this;
//         }

//         return Singleton.instance;
//     }
// }

// class Singleton {
//   private static instance: Singleton;

//   constructor() {
//     if (Singleton.instance) return Singleton.instance;
//     Singleton.instance = this;
//   }

//   public static getInstance() {
//     return new Singleton();
//   }
// }

// function clientCode() {
//   const instance1 = new Singleton();
//   const instance2 = new Singleton();

//   const inctanceByMethod1 = Singleton.getInstance();
//   const inctanceByMethod2 = Singleton.getInstance();

//   if (instance1 === instance2) {
//     console.log('Singleton works, both variables contain the same instance.');
//   } else {
//     console.log('Singleton failed, variables contain different instances.');
//   }

//   if (inctanceByMethod1 === inctanceByMethod2) {
//     console.log('Singleton works, both variables contain the same instance.');
//   } else {
//     console.log('Singleton failed, variables contain different instances.');
//   }
// }

// clientCode();
