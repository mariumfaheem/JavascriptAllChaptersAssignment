let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let email=document.getElementById("email");
let password=document.getElementById("password");
let form=document.getElementById("form");
let btn=document.getElementById("btn");
let validEmail=false
let validPassword=false
let validFname=false
let validLname=false


fname.addEventListener('blur',()=>{
    console.log("clicked");
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str=fname.value;
    if(regex.test(str)){
        fname.classList.remove('is-invalid')
        validFname=true;
    }
    else{
        fname.classList.add('is-invalid');
        validFname=false;
    }
})
lname.addEventListener('blur',()=>{
    console.log("clicked");
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/
    let str=lname.value;
    if(regex.test(str)){
        lname.classList.remove('is-invalid')
        validLname=true;
    }
    else{
        lname.classList.add('is-invalid');
        validLname=false;
    }
})

email.addEventListener('blur',()=>{
    console.log("phone is blurred")
    let regex=/^([_\-\.0-9a-zA-z]+)@([0-9_\-\.a-zA-z0-9]+)\.([a-zA-Z]){2,7}$/
    let str=email.value;
    console.log(regex,str)
    if(regex .test(str)){
    email.classList.remove('is-invalid')
    validEmail=true;
    }
    else{
        email.classList.add('is-invalid')
        validEmail=false;
    }
}) 
password.addEventListener('blur',()=>{
    console.log("phone is blurred")
    let regex= /^[a-zA-Z]([0-9a-zA-Z]){6,10}$/
    let str=password.value;
    console.log(regex,str)
    if(regex .test(str)){
        password.classList.remove('is-invalid')
        validPassword=true;
    }
    else{
        password.classList.add('is-invalid')
        validPassword=false;
    }

    }) 

btn.addEventListener('click',validation);

function validation(validFname,validLname,validPassword,validEmail){
if(  validFname && validLname && validPassword &&  validEmail){
    let info={
        fname:document.getElementById("fname").value,
        lname:lname.value,
        password:password.value,
        email:email.value
    
    }
    
    let notes=localStorage.getItem("notes");
        if(notes==null){
             notesobj=[];
        }
        else{
            //qk local storage se hume obj milta h or hum array m km krna charhe h islye json.parse
            notesobj=JSON.parse(notes)
        }
        notesobj.push(info);
        localStorage.setItem("notes",JSON.stringify(notesobj))
    
        console.log(notesobj);

}
}//function end

validation(validFname,validLname,validPassword,validEmail)

