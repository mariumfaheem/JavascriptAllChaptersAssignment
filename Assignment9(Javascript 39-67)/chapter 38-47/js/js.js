//task no3
let table=document.getElementById("table");
//let tr=document.createElement("tr");
let name=document.getElementById("name");
let classNo=document.getElementById("classNo");
let btn=document.getElementById("btn");
let studentsData;


btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let studentsobj;
let students=localStorage.getItem("students");
if(students==null){
    studentsobj=[]
}
else{
    studentsobj=JSON.parse(students)
}

studentsData={
    name:name.value,
    classNo:classNo.value
}
console.log(studentsData)

studentsobj.push(studentsData);
localStorage.setItem("students",JSON.stringify(studentsobj))

})

function displayStudentData(){
    let studentsobj;
    let students=localStorage.getItem("students");
    if(students==null){
        studentsobj=[]
    }
    else{
        studentsobj=JSON.parse(students)
    }
    
    let tr=`<tr>
    <th width="100cm">Index</th>
    <th width="100cm">Name</th>

    <th width="100cm">Class</th>
    <th width="100cm">Delete</th>

  </tr>`
    studentsobj.forEach((element,index) => {
      tr+=`
      <tr>
      <td>${index}</td>
      <td>${element.name}</td>
      <td>${element.classNo}</td>
      <td><button class="btn btn-primary" onclick="deleteBtn(this.id)" id="${this.index}">Delete</button></td>
   </tr>
      `
      
  });
  table.innerHTML=tr;


}
function deleteBtn(index){
    let studentsobj;
    let students=localStorage.getItem("students");
    if(students==null){
        studentsobj=[]
    }
    else{
        studentsobj=JSON.parse(students)
    }
    studentsobj.splice(index,1)
   
    localStorage.setItem("students",JSON.stringify(studentsobj))
    displayStudentData()

}

displayStudentData()