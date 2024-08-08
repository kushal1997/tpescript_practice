//object

//earlier we were defining object types like this

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user_detail: User;

user_detail = {
  name: "kushal",
  age: 27,
  isAdmin: true,
  id: 545,
};

// we should define object types using interface like this

interface Credentials {
  password: string;
  //   email: string;
}

//we can redeclare interface too by adding new key pair types

interface Credentials {
  email: string;
}

//we can use the interfcae like this as shown below

let creds: Credentials;

creds = {
  password: "abs",
  email: "a@a.com",
};

// we can use interface in class using implements like this

// by using implement we must have to mention the types declared within it and we can add another tpes too

class AuthCredential implements Credentials {
  email: string;
  password: string;
  userName: string;
}

//if we need to pass a object in a function arguments then

function login(credentials: Credentials) {}
login(creds);
login(new AuthCredential()); //or if want to use our class
