let addTodo = document.getElementById("addTodo");
// let clearTodo = document.getElementById("clearTodo");
let inputText = document.getElementById("addInput");
let listTodo = document.getElementById("listTodo");

addTodo.addEventListener("click",
function(){
    let todoText = inputText.value;
    inputText.value = " ";

    let todo = document.createElement("DIV");
    todo.classList.add("output");
    todo.innerHTML = todoText + " ";

    let removeBtn = document.createElement("BUTTON");
    removeBtn.classList.add("btn")
    removeBtn.innerHTML = "Удалить";

    removeBtn.addEventListener("click",
    function(){
        todo.parentNode.removeChild(todo);
    })


    let fulfilledBtn = document.createElement("BUTTON");
    fulfilledBtn.classList.add("btn")
    fulfilledBtn.innerHTML = "Выполнить";

    fulfilledBtn.addEventListener("click",
    function(){
      todo.style.opacity = 0.5;
    })

    todo.append(removeBtn,fulfilledBtn);
    listTodo.append(todo);
})
// clearTodo.addEventListener("click",
// function(){
//     todo.parentNode.remove(todo);
// })
