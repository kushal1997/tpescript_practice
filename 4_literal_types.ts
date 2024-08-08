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