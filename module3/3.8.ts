{
  // Polymorphism

  // *** Polymorphism means the same method behaves differently depending on which object is calling it.

  // In my example, even though all classes have a method named getSleep(), each class provides its own version — that's polymorphism in action.

  // 1st example start
  class Parson {
    getSleep() {
      console.log("I am sleeping for 8 hours par day");
    }
  }

  class Student extends Parson {
    getSleep() {
      console.log("I am sleeping for 7 hours par day");
    }
  }

  class Developer extends Parson {
    getSleep() {
      console.log("I am sleeping for 6 hours par day");
    }
  }

  const getSleepingHours = (param: Parson) => {
    param.getSleep();
  };

  const person1 = new Parson();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);
  // 1st example end

  // 2nd example start
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    // pi * r*r
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    // height * width
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape1 = new Shape();
  const shape2 = new Circle(5);
  const shape3 = new Rectangle(20, 50);

  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);
  // 2nd example end
}
