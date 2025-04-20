(function chai(){
    console.log("Db COnnected");
    // Named IIfe
})();  // Semicolon Important other wise wont excute next code

((name)=>{
    console.log(`this is ${name}`);
    
})("Zaid");

const calculator = (function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return { add, sub, mul, div };
  })();
  console.log(calculator);
  
  console.log(  calculator.add(3,5));
  console.log(calculator);
  
  
  