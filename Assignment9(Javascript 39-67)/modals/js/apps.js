let path=['1.jpg','2.jpg','3.jpg','4.png','5.jpg','6.jpg','7.png','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg','14.png','15.jpg']
let displayImages=document.getElementById("displayImages");
let str;
path.forEach((element ,index)=> {
    str+=`<img onclick="getModal(this.id)" id="/images/others/${element}" data-toggle="modal" src="/images/others/${element}" style="width: 100px ; height: 100px;" >`
  
  
});
 displayImages.innerHTML=str;
 var modalId = document.getElementById('modal'); 
 function getModal(index){
   
   modalId=document.getElementById("modalId");
   modalId.classList.add("modal-open");
   modalId.classList.remove('modal-close');
   modalId.style.display="block";
   modalId.src = index;
   console.log(modalId.src,modalId.className)
      
 }
 function onClosedImagModal(index){
   
   modalId=document.getElementById("modalId");
   modalId.classList.add("modal-close");
   modalId.classList.remove('modal-open');
   modalId.style.display="block";
   setTimeout(()=>{ modalId.style.display = "none"; }, 550) 
      
 }
 
