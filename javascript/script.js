// let js = "amazing";
// if (js === "amazing") alert("JavaScript is Fun!");
// console.log(40 + 23 - 5);
// var name = "Miemie";
// var age = 26;
// console.log("My name is " + name + "and age is " + age);

//This is a single line comment.
/*This is multi-line Comment.
comment testing.*/

// true;
// console.log(true);
// console.log(typeof true);
// console.log(typeof name);
// console.log(typeof "BMPS learning myanmar");

//const variable is not change the existing value
// const bdyear = 1997;
// bdyear = 1998;
// console.log(bdyear); //error because const variable is not change

// const now = 2022;
// const myAge = now - 1997;
// console.log(myAge);
// console.log(myAge - 3, myAge * 2, 2 ** 3);

// let firstName = "BMPS";
// let lastName = "Learning Myanmar";
// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);
// x *= 2;
// console.log(x);
// x /= 2;
// console.log(x);
// x %= 2;
// console.log(x);

// const marksWeight = 78;
// const marksHeight = 1.69;
// const marksBMI = marksWeight / marksHeight ** 2;
// console.log("Marks BMI is " + marksBMI);

// const johnWeight = 92;
// const johnHeight = 1.95;
// const BMIJohn = johnWeight / johnHeight ** 2;
// console.log("John BMI is " + BMIJohn);

// const higherPerson = BMI > BMIJohn;
// console.log(higherPerson);"

// if (marksBMI > BMIJohn) {
//     console.log(`Marks BMI (${marksBMI}) is higher than John BMI (${BMIJohn})`);
// } else {
//     console.log(`John BMI (${BMIJohn}) is higher than Marks BMI (${marksBMI})`);
// }

// const name = "Miemei Hlaing";
// const now = 2022;
// const bdyear = 1997;
// const job = "Junior Developer";

// const myself = "I'm " + name + "a " + (now - bdyear) + " years old " + job + "!";

// const myself = `I'm ${name} a ${now - bdyear} years old ${job}!`;
// console.log(myself);

// console.log("I'm BMPS\n\learning myanmar\n\Javascript learning group");

// console.log(`I'm BMPS 
// learning myanmar
// javascript learning groups`);

// const age = 15;
// if (age >= 18) {
//     console.log("you can start drive");
// } else {
//     console.log("You are too young");
// }

// const bdate = "1997";
// console.log(bdate + 7);//output is 19977
// console.log(Number(bdate) + 7);
// console.log('5' + 7);

// let age = 18;
// if (age === '18') console.log("You just become an adult:D (strict)");
// if (age == '18') console.log("you just become an adult:D (loose)")

// const favouriteNo = Number(prompt("Enter Your Favourite no:"));
// if (favouriteNo === 7) {
//     console.log("Lucky Number");
// } else {
//     console.log("This is not my favourite no");
// }

// const hasDriverLicense = true;
// const hasGoodVision = false;

// if (hasDriverLicense && hasGoodVision) {
//     console.log("You can drive!");
// } else {
//     console.log(`You should not drive!`);
// }

// const dolphinsScore = (96 + 108 + 89) / 3;
// const koalasScore = (8 + 91 + 110) / 3;

// const dolphinsScore = (97 + 112 + 101) / 3;
// const koalasScore = (109 + 95 + 123) / 3;
// console.log(dolphinsScore, koalasScore);

// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {

//     console.log(`Team Dolphins is winner!`);

// } else if (koalasScore > dolphinsScore && koalasScore >= 100) {

//     console.log(`Team Koalas is winner`);

// } else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {

//     console.log("Both win");
// } else {
//     console.log("noone win");
// }

const day = "Tuesday";
switch (day) {
    case 'Monday':
        console.log("This is monday!");
        break;
    case 'Tuesday':
        console.log("This is Tuesday!");
        break;
    case 'Wednesday':
        console.log("This is Wednesday!");
        break;
    case 'Thurday':
        console.log("This is Thurday!");
        break;
    case 'Friday':
        console.log("This is Friday!");
        break;
    case 'Saturday':
        console.log("This is Saturday!");
        break;
    default:
        console.log("Not valid");
}
