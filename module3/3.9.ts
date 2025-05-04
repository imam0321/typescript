{
  // abstraction

  // *** Abstraction means hiding complex implementation details and showing only the necessary features.

  // The interface Vehicle1 and abstract class Car2 both define what a vehicle should do (start, stop, move), but they don’t define how — that's left to the concrete classes (Car1, ToyotaCar).

  // This way, users of the class don't need to know the internal logic, only how to interact with it.

  // 1. interface
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting Engine");
    }
    stopEngine(): void {
      console.log("I am Stop Engine");
    }
    move(): void {
      console.log("I am moving the car");
    }
    test() {
      console.log("I am just testing");
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.move();

  // 2. abstract
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log("I am just testing");
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("I am starting Engine");
    }
    stopEngine(): void {
      console.log("I am Stop Engine");
    }
    move(): void {
      console.log("I am moving the car");
    }
  }

  const car = new ToyotaCar();
  car.startEngine();
}
