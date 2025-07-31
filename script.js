const userinputbox=document.getElementById("user-input");
const listDetails=document.querySelector(".listDetails")

// console.log(userinputbox);


function addTask(){
    if(userinputbox.value===""){
        alert("You must write Somthing");
        userinputbox.focus();
        // userinputbox.style.backgroundColor="peachpuff";
        return;
    }
    else{
        const li=document.createElement("li");
        li.innerHTML=userinputbox.value;
        listDetails.appendChild(li);

        const span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    userinputbox.value="";
    SaveData();
}
userinputbox.addEventListener('keydown',function(e){
    if(e.key=="Enter"){
        addTask();
        return;
    }
})
listDetails.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
},false)

function SaveData(){
    localStorage.setItem("data",listDetails.innerHTML);
}
function fillData(){
   listDetails.innerHTML=localStorage.getItem("data");
}
fillData();