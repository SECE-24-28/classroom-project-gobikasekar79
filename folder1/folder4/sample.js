/*--------------------------------------------------------------------------------------------------------------------------
console.log(a);
//hiosting
var a=20;
console.log(a);

//esg let and const
let b=20;
console.log(b);
//block scope
{
    let b=30;
    console.log(b);
}
console.log(b);
---------------------------------------------------------------------------------------------------------------------------------*/

/*let b=20;
b=130;
console.log(b);*/
/*const c=40;
c=90;
console.log(c);*/

//functions
//1.Named Functions
//2.function declarations
/*---------------------------------------------------------------------------------------------------------------------------------------
function namedFunc(){
    console.log("Function called");
    console.log("Function called");
    console.log("Function called");
}
//function called or invoked
namedFunc();
 //funcExp();
//2.Function Expression
let funcExp=function(){
    console.log("Function Expression Called");

}
funcExp();

//3.Arrow Functions(ES6)
let arrow  =() =>{
    console.log("Arrow Function called");
};
arrow();

//4.Callback function and 5. IiFE immeditely invoked and function expression

(()=>{
console.log("iife called");
})();

const addTwoNumbers=(parameter1,parameter2)=>{
    let num1=parameter1 || 10 ;// || used for defalt values if left undefined with 0 or null
    let num2=parameter2 ||20;
    let sum=num1+num2;
    console.log("The sum of two numbers is:",$(sum));
};
addTwoNumbers(20,48);
addTwoNumbers(30,36);

addTwoNumbers();

const subTwoNumbers=(parameter1,parameter2)=>{
    let num1=parameter1 || 100;
    let num2=parameter2 || 32;
    let sub=num1-num2;
    console.log("The sub is:",sub);
};
subTwoNumbers();

const mulTwoNumbers=(parameter1,parameter2)=>{
    let num1=parameter1 || 33;
    let num2=parameter2 || 2;
    let mul=num1*num2;
    console.log("The product is:",mul);
};
mulTwoNumbers();

const divTwoNumbers=(parameter1,parameter2)=>{
    let num1=parameter1 || 100;
    let num2=parameter2 || 32;
    let div=num1/num2;
    console.log("The div is:",div);
};
divTwoNumbers();

//single parameter passed--> second parameter will be default taken from initialization
addTwoNumbers(100);
//template literal
 //console.log(`The sum of two numbers is: ${sum}`);

 --------------------------------------------------------------------------------------------------------------------------*/

 /*------------------------------------------------------------------------------------------------------------------------
 let a=5;
 let b="5";
 console.log(a==b);

 let arr=[1,2,3,4,5,6];
 console.log(arr);
 // for loop
 console.log("for loop");
 for(let i=0;i<arr.length;i++){
arr[i]=arr[i]+i;
 }
 console.log(arr);
 console.log("for each");
 let arr1=[1,2,3,4,5,6];
 //forEach
 arr1.forEach((element,index)=>{
    console.log(element, index);

 });

console.log("map");
let arr2 = [1, 2, 3, 4, 5];
    //let aa=arr.map(el,ind)=>{
        //return el+ind;
//});
let f = arr.map((el, ind) => +ind);
console.log(arr2);
console.log(f);
----------------------------------------------------------------------------------------------------------------------------------*/

// filter: truthy values
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// filter → works on condition (true/false)
let b = a.filter((el, index) => {
    return index > 4;
});

console.log("Filtered:", b);

// reduce → returns a single value
let c = a.reduce((acc, el, index) => {
    console.log(acc, el); // FIX: replaced 'ele' with 'el'
    return acc + el;
}, 200); // initial value = 200

console.log("Reduced:", c);


