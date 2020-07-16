let text=document.getElementById("text");
let btn=document.getElementById("btn");
function addItemsDetails(){
    let itemsDetails=localStorage.getItem("items");
    if(itemsDetails==null){
        itemsDetailsobj=[];
    }
    else{
        //qk local storage se hume obj milta h or hum array m km krna charhe h islye json.parse
        itemsDetailsobj=JSON.parse(itemsDetails)
    }
    itemsDetailsobj.push(text.value);
    console.log("Wrriten")
    localStorage.setItem("items",JSON.stringify(itemsDetailsobj))
     

}//function ends



btn.addEventListener("click",addItemsDetails)

console.log("Text",text.value)

function fetchItemsDetails(){
    let itemsDetailsobj;
    let itemsDetails=localStorage.getItem("items");
    if(itemsDetails==null){
        itemsDetailsobj=[];
    }
    else{
        //qk local storage se hume obj milta h or hum array m km krna charhe h islye json.parse
        itemsDetailsobj=JSON.parse(itemsDetails)
    }

        let detailView=document.getElementById("detailView");
        let str=" Text entered by you :"
        console.log(itemsDetailsobj)
        itemsDetailsobj.forEach((element,index) => {
            str+=`
            <li > ${element.slice(0,4)}.. 
            <a onclick="displaymore(this.index)">Read more</a>
            </li>    `
            
        });
        detailView.innerHTML=str;

    }
fetchItemsDetails()
 let itemsDetailsobj;
    let itemsDetails=localStorage.getItem("items");
    if(itemsDetails==null){
        itemsDetailsobj=[];
    }
    else{
        //qk local storage se hume obj milta h or hum array m km krna charhe h islye json.parse
        itemsDetailsobj=JSON.parse(itemsDetails)
    }
function displaymore(index){

   

        let detailView=document.getElementById("detailView");
        let str=" Text entered by you :"
    
        itemsDetailsobj.forEach((element,index) => {
            str+=`
            <li > ${element}  </li>    `
            
        });
        detailView.innerHTML=str;

    }  
    
      



