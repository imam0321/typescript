{
  // static

  // *** Static means the property or method belongs to the class itself, and it can be used without creating an object.

  // In my example, Counter.count and Counter.increment() are accessed directly through the class, without creating any object using new Counter().

  class Counter {
    static count: number = 0;

    static increment() {
      return (Counter.count = Counter.count + 1);
    }

    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  // const instance1 = new Counter();

  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.decrement());
}
