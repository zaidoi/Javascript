let user = {
  name: "Zaid",
  surname: "Badgujar",

  get fullName(){
    return`${this.name} ${this.surname}`
  },

  set fullName(val){
[this.name,this.surname] = val.split(" ")
  }
}

user.fullName = "Faizan Gandhi"

alert(user.fullName)