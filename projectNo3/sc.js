let addBtn=document.querySelector(".add-btn");
let removeBtn=document.querySelector(".remove-btn");
let addflag=false; // for toggle the state of modal
let removeflag=false; // for the remove the generated ticket
let modal=document.querySelector(".modal-cont");
let lockClass="fa-lock";    // this help to lock and unlock for the lock image on the ticket
let unlockClass="fa-lock-open";
addBtn.addEventListener("click",(e)=>{
  // Display Modal 
// generate Ticket


// addflag=true? display: remove
  addflag = !addflag;
  if(addflag){
    modal.style.display="flex";
  }else{
    modal.style.display="none";
  }
 
})


removeBtn.addEventListener("click",(e)=>{
  removeflag=!removeflag;
  // if(removeflag){
      // here i also implemnt a function which take cros button aloway red when it active
  // }
})
// creat ticket
// to select text area
let textareaCont=document.querySelector(".textarea-cont");


textareaCont.addEventListener("keydown",(e)=>{
  let key=e.key;
  if( key === "Shift"){
    createTicket(modalPriorityColor,textareaCont.value,shortid()); // short id is a fuction of external library that i use cdn command link via : short id unpkg script
    modal.style.display="none";
    addflag=false;
    textareaCont.value=""; // this is used when we creat one ticket and again generte new modal then our text area must be clear
  }
})
let maincont=document.querySelector(".main-cont")
function createTicket(ticketColor,tickettask,ticketID){
  let ticketCont=document.createElement("div");
  ticketCont.setAttribute("class","ticket-cont");
  ticketCont.innerHTML=`
  <div class="ticket-color ${ticketColor}"></div>
  <div class="ticket-id">#${ticketID}</div>
  <div class="task-area">${tickettask}</div>
<div  class="ticket-lock" >              
  <i class="fa-solid fa-lock"></i>
  </div>

                 `;
      maincont.appendChild(ticketCont);  
      
      handleRemoval(ticketCont);
    //handleLock(ticketCont);
}

// here we add all the functionality of our project 
// such as moadal fuctionality ticket functionality tool box priority fuctionality

let colors=["lightpink","lightblue","lightblue","black"]; // colors available at color picker modal
let modalPriorityColor=colors[colors.length-1];
let allPriorityColors=document.querySelectorAll(".colors"); // select all colors class from colourpicker

// listener to identify which colors use press for ticket that he will generate
 // for each loop give one by one colors and related index 
allPriorityColors.forEach((colorElem,idx)=>{
  colorElem.addEventListener("click",(e)=>{
    allPriorityColors.forEach((prioritycolorElem,idx)=>{ // this loop work same as outer loop we use this loop to remove border from all loops
      prioritycolorElem.classList.remove("border"); // .classList.remove use to delet class from seltect elem

  })
  colorElem.classList.add("border"); // this add border to the seletcted color element

  modalPriorityColor=colorElem.classList[0];  // usig this the color at which we apply border be selected by us since among all class which we apply on priory at first position we apply colors name so we setlet 0th index elemt

  })
 
}) 


// for giving the functionality to the cross button i.e. removal for ticket
//  we call this fuction at a time when we generate the ticket
// so below this i only write the fuction which alreay call by the ticket generator

function handleRemoval(ticket){
      // removeflag->true->remove;
      ticket.addEventListener("click",(e)=>{
        if(removeflag){
          ticket.remove();
    }
      })
      // if(removeflag){
      //       ticket.remove();
      // }
}


// function handle lock and unlock

function handleLock(ticket){
 
  let ticketLockElem=ticket.querySelector(".ticket-lock");        // element.classList.add("mystyle");
  let ticketLock=ticketLockElem.children[0];
  ticketLock.addeventListener("click",(e)=>{
    if(ticketLock.classList.contains(lockClass)){
      ticketLock.classList.remove(lockClass);
      ticketLock.classList.add(unlockClass);
    }else{
      ticketLock.classList.remove(unlockClass);
      ticketLock.classList.add(lockClass);
    }
  })
}
