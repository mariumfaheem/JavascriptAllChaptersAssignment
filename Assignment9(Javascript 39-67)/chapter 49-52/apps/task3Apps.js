//task no3
let table = document.getElementById("table");
//let tr=document.createElement("tr");
let name = document.getElementById("name");
let classNo = document.getElementById("classNo");
let btn = document.getElementById("btn");
let studentsData;


btn.addEventListener("click", (e) => {
    e.preventDefault()
    let studentsobj;
    let students = localStorage.getItem("students");
    if (students == null) {
        studentsobj = []
    }
    else {
        studentsobj = JSON.parse(students)
    }

    studentsData = {
        name: name.value,
        classNo: classNo.value
    }
    console.log(studentsData)

    studentsobj.push(studentsData);
    localStorage.setItem("students", JSON.stringify(studentsobj))

})

function displayStudentData() {
    let studentsobj;
    let students = localStorage.getItem("students");
    if (students == null) {
        studentsobj = []
    }
    else {
        studentsobj = JSON.parse(students)
    }

    let tr = `<tr>
    <th width="100cm">Index</th>
    <th width="100cm">Name</th>

    <th width="100cm">Class</th>
    <th width="100cm">Delete</th>

  </tr>`
    studentsobj.forEach((element, index) => {
        tr += `
      <tr>
      <td>${index}</td>
      <td>${element.name}</td>
      <td>${element.classNo}</td>
      <td><button class="btn btn-primary" onclick="deleteBtn(this.id)" id="${index}">Delete</button></td>
      <td><button class="btn btn-primary" onclick="addBtn(this.id)" id="${index}">Edit</button></td>
   </tr>
      `

    });
    table.innerHTML = tr;


}

function addBtn(index) {
    let studentsobj;
    let students = localStorage.getItem("students");
    if (students == null) {
        studentsobj = []
    }
    else {
        studentsobj = JSON.parse(students)
    }

    let tr;
    console.log(index)
    for (const key in studentsobj) {
        let element = studentsobj[key];
        if (studentsobj[key] && key == index) {
            tr +=`
            <tr> 
            <td><input value=${index}></td>
            <td><input value=${element.name}></td>
            <td><input value=${element.classNo}></td>
            <td><button class="btn btn-primary" onclick="deleteBtn(this.id)" id="${index}">Delete</button></td>
            <td><button class="btn btn-primary" onclick="DoneBtn(this.id)" id="${index}">Done</button></td>
         </tr>`
         let studentsData = {
        name: value,
        classNo: element.classNo
    }
    studentsobj.push(studentsData);
    localStorage.setItem("students", JSON.stringify(studentsobj))
    console.log(studentsobj,"Done")
            
        }

    }


    table.innerHTML = tr;


}

function DoneBtn(index){
    let studentsobj;
    let students = localStorage.getItem("students");
    if (students == null) {
        studentsobj = []
    }
    else {
        studentsobj = JSON.parse(students)
    }

    let tr = `<tr>
    <th width="100cm">Index</th>
    <th width="100cm">Name</th>

    <th width="100cm">Class</th>
    <th width="100cm">Delete</th>

  </tr>`
    studentsobj.forEach((element, index) => {
        tr += `
      <tr>
      <td>${index}</td>
      <td>${element.name}</td>
      <td>${element.classNo}</td>
      <td><button class="btn btn-primary" onclick="deleteBtn(this.id)" id="${index}">Delete</button></td>
      <td><button class="btn btn-primary" onclick="addBtn(this.id)" id="${index}">Edit</button></td>
   </tr>
      `

    });
    table.innerHTML = tr;

}
function deleteBtn(index) {
    let studentsobj;
    let students = localStorage.getItem("students");
    if (students == null) {
        studentsobj = []
    }
    else {
        studentsobj = JSON.parse(students)
    }
    studentsobj.splice(index, 1)

    localStorage.setItem("students", JSON.stringify(studentsobj))
    displayStudentData()

}

displayStudentData()
