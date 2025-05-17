class Animal {
  constructor(name){
   this.name = Animal.info(name)
  }

  walk(){
    console.log(`Its Running ${this.name}`);
  }

  static info(name){
    return name.toUpperCase()
  }
}

let lion = new Animal("Faizu");

lion.walk()

lion.name