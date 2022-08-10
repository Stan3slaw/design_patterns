interface Drawble {
  accept(visitor: ShapeVisitor): void;
}

interface ShapeVisitor {
  visitCircle(shape: Circle): void;
  visitSquare(shape: Square): void;
  visitTriangle(shape: Triangle): void;
}

class Drawer implements ShapeVisitor {
  visitCircle(shape: Circle) {
    console.log(`Drawer: drawing ${shape.constructor.name}`);
  }

  visitSquare(shape: Square) {
    console.log(`Drawer: drawing ${shape.constructor.name}`);
  }

  visitTriangle(shape: Triangle) {
    console.log(`Drawer: drawing ${shape.constructor.name}`);
  }

  draw(shape: Drawble) {
    shape.accept(this);
  }
}

class Circle implements Drawble {
  accept(visior: ShapeVisitor): void {
    visior.visitCircle(this);
  }
}

class Square implements Drawble {
  accept(visior: ShapeVisitor): void {
    visior.visitSquare(this);
  }
}

class Triangle implements Drawble {
  accept(visior: ShapeVisitor): void {
    visior.visitTriangle(this);
  }
}

const clientCode = () => {
  const drawer = new Drawer();
  drawer.draw(new Square());
  drawer.draw(new Circle());
  drawer.draw(new Triangle());
};

clientCode();
