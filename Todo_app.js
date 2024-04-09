let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    
   
    let delBtn=document.createElement("button");
    delBtn.classList.add("list_btn")
    delBtn.innerText="Delete";
    
    
    item.appendChild(delBtn);
    ul.appendChild(item);

    inp.value="";
});

// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         console.log("task deleted");
//     });
// }        <--this portion of code is not running because eventlistener doesn't act on already existing events...rather use event Delegation
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
       
        listItem.remove();
        console.log("delete");
    }
});