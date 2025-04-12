const mainToolElem = document.querySelector('.todo-lists-elem');
const inputValue = document.getElementById('inputValue');


const getTodoListFromLocal = () => {
    return JSON.parse(localStorage.getItem("youtubeTodoList"));
}

const addTodoListLocalStorage=(localTodoLists)=>{
    return localStorage.setItem("yoytubeTodoList",JSON.stringify(localTodoLists));
}


let localTodoLists = getTodoListFromLocal() || [];


// adding todo list danamically

const addTodoDyanamicElement = (currElem) => {
    const divElement = document.createElement('div');
    divElement.classList.add("main-todo-div");
    divElement.innerHTML = ` <li>${currElem}</li> <button class="deleteBtn">Delete</button>`;
    mainToolElem.append(divElement);

}


const addTodoList = (e) => {
    e.preventDefault();



    const todoListValue = inputValue.value.trim();
    inputValue.value = "";

    if (todoListValue !== "" && !localTodoLists.includes(todoListValue)) {

        localTodoLists.push(todoListValue);
        localTodoLists = [...new Set(localTodoLists)];
        console.log(localTodoLists);
        localStorage.setItem("youtubeTodoList", JSON.stringify(localTodoLists));




        addTodoDyanamicElement(todoListValue);
    }
}


const showTodoList = () => {
    console.log(localTodoLists)
    localTodoLists.forEach(currElem => {
        addTodoDyanamicElement(currElem);

    });
    ;
}


showTodoList();
//  remove the data
const removeTodoElem=(e)=>
{

    const todoToRemove= e.target;
    let todoListContent=todoToRemove.previousElementSibling.innerText;
    let parentElem=todoToRemove.parentElement;
    console.log(todoListContent);

    localTodoLists=localTodoLists.filter((currTodo) =>{
      return currTodo!==todoListContent.toLowerCase();
    });
   
      addTodoListLocalStorage(localTodoLists);
      parentElem.remove();



     console.log(localTodoLists);
};


mainToolElem.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log(e.target.classList.contains("deleteBtn"));
  if(e.target.classList.contains("deleteBtn")){
    removeTodoElem(e);
  }
 
});
document.querySelector('.btn').addEventListener('click', (e) => {
   
    addTodoList(e);

});