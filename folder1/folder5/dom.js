/*------------------------------------------------------------------------------------------------------------
//1. Tag Selector
let heading1 = document.getElementsByTagName("h1"); 
// HTMLCollection (array-like)
console.log(heading1[1]);

//2. Class Selector
let c1 = document.getElementsByClassName("a");
// HTMLCollection (array-like)
console.log(c1[0]);

//3. ID selector
let idd = document.getElementById("b");
// Returns SINGLE element
console.log(idd);

//4. QuerySelector (works for id, class, tag)
let sel = document.querySelector("#ab");
// Returns FIRST matching element
console.log(sel);

//5. QuerySelectorAll
let d = document.querySelectorAll("#ab");
// Returns NodeList (array-like)
console.log(d);-------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------------------------------------
//Read and Write Operation
let head=document.querySelector("p");
//Read operation
console.log(head.textContent);

//Write operation
head.textContent="this is the new paragraph content";

let div=document.querySelector("div");
div.innerHTML="<p>Hello from para</p>";
//div.textContent="<p>Hello from para</p>";
console.log(div.textContent);
console.log(div.innerHTML);

-----------------------------------------------------------------------------------------------------------------------------*/
//add/remove/toggle class
let head=document.querySelector("h1");
console.log(head);

head.classList.add("color");
head.classList.remove("border");
head.classList.toggle("Background");

//styling
let p=document.querySelector("p");
p.style.color="red";
p.style.backgroundColor="green";


//createElement
let ul=document.createElement("ul");
let li=document.createElement("li");
li.textContent="Item:1";
let li1=document.createElement("li");
li1.textContent="Item:2";
ul.appendChild(li);
ul.appendChild(li1);

document.body.appendChild(ul);
let arr=["Apple","Banana","Mango"];
arr.forEach((element)=>{
    let lo=document.createElement("li");
    lo.textContent=element;
    ul.appendChild(lo);
});