function add(a: number, b: number): void {
  const result = a + b;
  console.log(result);
}

function multiply(a: number, b: number): number {
  const result = a * b;
  return result;
}

// or we can write above function like this too
// because my default if we are returning some thing then return type is set by typescript


function multiply_another_way(a: number, b: number) {
    const result = a * b;
    return result;
  }

//   if we pass a function as an argument then how to define its type

function calculate(a:number,b:number,calcFn:(a:number,b:number)=>number){
    calcFn(a,b)
}

calculate(2,4,multiply)

// to make a custom type we can do like this
// we can create custom types for any types and can use it anywhere over the file 


type MathFun=(a:number,b:number)=>number;

function calculates(a:number,b:number,calcFn:MathFun){
    calcFn(a,b);
}

calculates(5,10,multiply)

