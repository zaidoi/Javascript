class Animal {
  constructor(name,type){
    this.name = name;
    this.type = type;
  }
  name(){
    console.log(`${this.name} Good`);
    
  }
}


class Monkey extends Animal{
type(){
  console.log(`${this.name} good ${this.type}`);
  
}
}

let user = new Animal("Faizu","Janwar")

user.name()
