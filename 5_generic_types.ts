// small example of generic types 
// while defining the type of an array
type Role1='admin'|'user'|'recruiter';

let roles1:Array<Role1>

roles1=['admin','recruiter'];

//if we want to make our own custom generic type then

type DataStorage<T>={
    storage:T[],
    add:(data:T)=>void;
};

const textStorage:DataStorage<string>={
    storage:[],
    add(data){
        this.storage.push(data)
    }
}

// if want to use a custom type then
type User2 = {
    name: string;
    age: number;
  };
const userStorage:DataStorage<User2>={
    storage:[{name:'kus',age:27}],
    add(data){
        this.storage.push(data)
    }
}

// we can use it like this way too via passing it in a function

function merge1<T,U>(a:T,b:U){
    return {
        ...a,
        ...b,
    }
}

const user1=merge1<{name:string},{age:number}>({name:'kushal'},{age:27});

//we can write the above line like this too
const user2=merge1(
    {name:'kushal'},{age:27}
)

user1.age
user2.name