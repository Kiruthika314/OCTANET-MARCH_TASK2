 function add() { 
    var todoLists=document.getElementById("todo_list");
    var lists=document.getElementById("lists");

    if(todoLists.value===""){
        alert("Please enter a task");
        return;
    }
    var li=document.createElement("li");
    li.textContent=todoLists.value;
    lists.appendChild(li);
    
    todoLists.value="";
    li.addEventListener("click",()=>{
        li.style.textDecoration="line-through";
    })
    li.addEventListener("dblclick",()=>{
        lists.removeChild(li);
    })

}