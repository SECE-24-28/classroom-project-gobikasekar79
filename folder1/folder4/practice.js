//1
const createArray=(para1,para2,para3)=>{
  let num1=para1 || 100;
  let num2=para2 || 32;
  let num3=para3 || 40;
  
  let arr=[num1,num2,num3];
  console.log(arr);
}
createArray();

//2
const stringOnly=()=>{
let s="abc";
let t="gobs";
let u="3";
let v=5;
 let arr=[s,t,u,v];

let onlyStrings=arr.filter(el => typeof el ==="string");
console.log(onlyStrings);
}
stringOnly();

//3
const squareNumbers=()=>{
    let n1=2;
    let n2=3;
    let n3=4;
    let arr=[n1,n2,n3];
    for(let i=0;i<arr.length;i++)
    {
        arr[i]=arr[i]*arr[i];
    }
    console.log(arr);
}
squareNumbers();

//4
const getEvenNumbers=()=>{
    let n1=2;
    let n2=9;
    let n3=6;
    let arr=[n1,n2,n3];
    let evenArr=[];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {   
            evenArr.push(arr[i]);
        }
    }
console.log(evenArr);
}
getEvenNumbers();

//5
const collectNames=()=>{
    let n1="gobi";
    let n2="gowsh";
    let arr=[n1,n2];
    let upperArr=arr.map(item=> item.toUpperCase());
    console.log(upperArr);
}
collectNames();

//6
const makeUser=(name,age,city)=>{
let n1=name || "gobi";
let n2=age || 19;
let n3=city || "namakkal";
let arr=[n1,n2,n3];
console.log("name:",arr[0]+" "+"age:",arr[1]+" "+"city:",arr[2]);
}
makeUser();

//7
const addTenWithDefault = (...nums) => {
    nums = nums.length === 0 ? [1, 2, 3] : nums;
    return nums.map(n => n + 10);
};

console.log(addTenWithDefault());         
console.log(addTenWithDefault(5, 15));  

//8
const createFruitArray = (...fruits) => {
    if (fruits.length === 0) {
        return ["apple", "banana"];   
    }
    return fruits;   
};

console.log(createFruitArray()); 

console.log(createFruitArray("mango", "orange"));

