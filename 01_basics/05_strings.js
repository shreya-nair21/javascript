const name = "shreya"
const repoCount = 50


console.log(name + repoCount + "value"); //outdated

//string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('shr-eya')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4);
console.log(newString)


const newString1= gameName.slice(-5, 4);
console.log(newString1)
 
const newString2 = " shreya  "
console.log(newString2)
console.log(newString2.trim())