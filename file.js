import fs from "fs";


const foo = async (name) => {

console.log(`my name is : ${name}`); 
 
}

const array = [1, 2, 3 ];

const newArray = array.filter(elt => elt <=1 );

console.log(newArray);

export default foo;