type Admin={
    permission:string[];
}

type AppUser={
    userName:string;
}

//how to maerge these types in a single type

type AppAdmin=Admin & AppUser;

let admin:AppAdmin;

admin={
    permission:['login'],
    userName:'a'
};

//instead of using type keyword we can use interface like this

interface AdminInt{
    permission:string[];
}

interface AppUserInt{
    userName:string;
}

// after writing extends we need to write the interfaces
//if we want we can add more types too or leave the object blanck

interface AppAdminInt extends AdminInt,AppUserInt{}

let adminInt:AppAdminInt;

adminInt={
    permission:['login'],
    userName:'a'
};