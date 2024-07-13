//Feature Request
//1
let Num = 19
let Str = "Aparna"
let Bool = false
let Obj = {name: 'Aparna', age: 19}
let Arr = [1, 2, 3]
let Null = null
let undef;

console.log(`Value = ${Num} and Typeof = ${typeof Num}`);
console.log(`Value = ${Str} and Typeof = ${typeof Str}`);
console.log(`Value = ${Bool} and Typeof = ${typeof Bool}`);
console.log(`Value = ${Obj} and Typeof = ${typeof Obj}`);
console.log(`Value = ${Arr} and Typeof = ${typeof Arr}`);
console.log(`Value = ${Null} and Typeof = ${typeof Null}`);
console.log(`Value = ${undef} and Typeof = ${typeof undef}`);
/* Value = 19 and Typeof = number
Value = Aparna and Typeof = string
Value = false and Typeof = boolean
Value = [object Object] and Typeof = object
Value = 1,2,3 and Typeof = object
Value = null and Typeof = object
Value = undefined and Typeof = undefined */



/*****************************************************/

//2
//let
let variable1 = 'Aparna'
console.log(`let variable before = ${variable1}`);
variable1 = 'Aparna Gaur'
console.log(`let variable after reassign = ${variable1}`);
/* let variable before = Aparna
let variable after reassign = Aparna Gaur */

//const
const variable2 = 1234
console.log(`const variable before = ${variable2}`);
/* const variable before = 1234 */
variable2 = 4321
console.log(`const variable after reassign = ${variable1}`);
/* TypeError: Assignment to constant variable. */