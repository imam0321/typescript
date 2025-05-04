{
  // oop - inheritance

  // parent class
  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  }

  // Student class
  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours} Hours!`);
    }
  }

  // Teacher Class
  class Teacher extends Parent {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfHours: number) {
      console.log(`${this.name} will take ${numberOfHours} Hours!`);
    }
  }

  const student1 = new Student("Imam", 20, "Dhaka");
  const teacher1 = new Teacher("Fahim", 20, "Dhaka", "Professor");

  student1.getSleep(20);
  teacher1.takeClass(1.5);
}
