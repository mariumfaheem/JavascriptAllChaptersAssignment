//task no.1
let mainContent=document.getElementById("main-content");
mainContent=mainContent.children
console.log(mainContent)
let render=document.getElementsByClassName("render")
let renderList=document.getElementById("renderList")
let str;
let info=document.getElementById("info");
Array.from(render).forEach((element,index) => {
        str+=`<li> ${element.className}</li>`
    });
renderList.innerHTML=str
let firstName=document.getElementById("first-name")
let lastName=document.getElementById("last-name")
let email=document.getElementById("email")
Array.from(mainContent).forEach(element => {
       str  =`<p class="render"> First Name :Marium </p>
       <p class="render" id=”lastName”>Last Name: Faheem</p>
       <p class="render"> Email :mariums82@.com</p>`
});
info.innerHTML=str;
//task no.2
let formContent=document.getElementById("form-content")
console.log(formContent.nodeType)
//task no.3
console.log(lastName.nodeType)
console.log(lastName.childNodes)
lastName.append(email);
console.log(lastName.childNodes)
//task4
console.log(mainContent.firstChild)
console.log(mainContent.lastChild)

//task no.5
console.log(lastName.nextSibling)
console.log(lastName.previousSibling)
//task no.6
console.log(email.parentNode)
console.log(email.nodeType)

