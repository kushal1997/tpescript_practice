// template literal

// if i have a role of type string 
// but i want that only admin,user,recruiter can be intialized as the value
//apart from these 3 values, role is not allowed to declare for any other types


let role:'admin'|'user'|'recruiter';

role='admin';
role='user';
role='recruiter';

//here i will get an error because we are not allowed to define any other values
//apart from the above three declared as template literals

// role='abc'


//=======================================================================================================

//adding type guards

type Role='admin'|'user'|'recruiter';

function doAction(action:string|number,role:Role){
    if(role==='admin' && typeof action==='string') { 
        //...do some logic
    }
}


//=======================================================================================================

//type narrowing

function combine(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    }
   
    return `${a} ${b}`;
  }


  type User1 = {
    name: string;
    age: number;
  };
   
  type Admin1 = {
    name: string;
    age: number;
    permissions: string[];
  };
   
//   the below code won't work because the User type does not exist once the code is compiled to JavaScript:
//   function login(u: User1 | Admin1) {
//     if (typeof u === User1) {
//       // do something
//     }
//   }


// That code would work at runtime.
function login1(u: User1 | Admin1) {
    if ('permissions' in u) {
      // do something
    }
  }