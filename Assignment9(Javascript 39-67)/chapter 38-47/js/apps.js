/*Chapter 49-52 Start from  here */
//taskno.1
function power(a,b){
    let sum=0;
    for (let index = 0; index < b; index++) {
        sum+=a
        
    }
    return sum
}
console.log(power(3,3))

//taskno.2
function leapYear(a){
    let sum=0;
    if(a%2!=0){
        return false
    }
    else{
        return true
    }
    
}
console.log(leapYear(2013))

//taskno.3
function triangle(a,b,c){
    let s;
    s=(a+b+c)/2;
    let area
    area=(s*(s-a)*(s-b)*(s-c));
    return area;
    
}
console.log(triangle(2,2,2))
//taskno.4
function marks(suba,subb,subc){
    let marks;
    marks=suba+subb+subc;
    return marks
   
 }
 
 function average(marks){
    let average;
     average=marks/3;  
     return average 
  }
 
  function percentage(average){  
     let per;
     per=average/3*100;
     return per
 }
 
 let obtainedmarks=marks(90,90,90);
 let avg=average(obtainedmarks)
 let per=percentage(avg)
 console.log(obtainedmarks)
 console.log(avg)
 console.log(per)
//taskno.5
function indexOfLite(str,match){
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
         // console.log(str[index])
        if(str[index]==match){
            console.log(index)
               return index
        }
        
        
    }
   
 }
 let str="Marium"
 //console.log(str.indexOf("M"))
 indexOfLite(str,"r")
 
  
//taskno.6
function deleteVowel(str){
    if(str.length < 25){
   string = str.replace( /[aeiou]/g, '' );
   return string; }
  
}
let str="Marium"
console.log(deleteVowel(str))

//task no 8
let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let btn=document.getElementById("btn");
let info=document.getElementById("info");

btn.addEventListener("click",()=>{
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    console.log(num1,num2)
    val=Math.abs((num1-num2))
     meter(val)
     feet(val)
     centimeters(val)
})
//Kmh to meter calc 
function meter(val){
    let meter=val*1000;
    str=document.createElement("li");
    str.innerHTML=`<li>Value in Meter : ${meter}</li>`
    info.append(str)

}
//Kmh to feet, .
function feet(val){
    let meter=val/3280.839895;
    str=document.createElement("li");
    str.innerHTML=` Value in feet  : ${meter}`
    info.append(str)

}
//Kmh to meter inches 
function inches(val){
    let meter=val/ 39370.07874;
    str=document.createElement("li");
    str.innerHTML=`<li>Value in inches : ${meter}</li>`
    info.append(str)

}
//Kmh to meter  centimeters
function centimeters(val){
    let meter=val/100000
    str=document.createElement("li");
    str.innerHTML=`<li>Value in centimeters : ${meter}</li>`
    info.append(str)

}

//task no9
function payOfEmployee(pay,overtimePerHour,rate){
    return rate * 1 * overtimePerHour

}
//task no 10
let cashArray=[10,50,100];
let amount=prompt("Enter amount to withdraw");
let task9=document.getElementById("task9");
let str;
str=`
Task no.9
<li> Required notes of Rs. 100  : ${amount/100}</li>
<li> Required notes of Rs. 50 : ${((amount%100) /50)}</li>
<li> Required notes of Rs. 10 :${(((amount % 100) % 50) / 10) } </li>
<li> Amount still remaining Rs " ${((((amount % 100) % 50) % 10))}</li>`

task9.innerHTML=str

/*Chapter 49-52 End here */
