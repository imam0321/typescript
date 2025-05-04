{
  // oop - class

  class Animal {
    // public name: string;
    // private species: string;
    // private sound: string;

    constructor(public name: string, public species: string, public sound: string){
      // this.name = name;
      // this.species = species;
      // this.sound = sound
    }

    makeSound () {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("tome", "dog", "ghew ghew");
  // dog.makeSound()

}