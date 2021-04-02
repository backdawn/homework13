let addTodo = document.getElementById("addTodo");
let inputText = document.getElementById("addInput");
let listTodo = document.getElementById("listTodo");
let buttons = document.getElementById("buttons");
let inputChange = document.getElementById("inputChange");
let textInTodo = document.getElementsByClassName('text');
let saveChange = document.getElementById('saveChange');

addTodo.addEventListener("click",function(){

    let todoText = inputText.value
    let todo = document.createElement("DIV")
    todo.classList.add("alert","alert-primary")

    let text = document.createElement("DIV")
    text.classList.add("text")
    text.innerHTML = todoText + ""

    let buttonsDiv = document.createElement("DIV")
    buttonsDiv.classList.add("buttons")

    let changeBtn = document.createElement("BUTTON")
    changeBtn.classList.add("btn")
    changeBtn.setAttribute("data-toggle", "modal")
    changeBtn.setAttribute("data-target", "#exampleModal")
    changeBtn.innerHTML = "Редактировать"

    changeBtn.addEventListener("click", function(){
      $('#exampleModal').on('shown.bs.modal', function () {
        inputChange.value = text.textContent.trim()
      })
    })

    let removeBtn = document.createElement("BUTTON")
    removeBtn.classList.add("btn")
    removeBtn.innerHTML = "Удалить"
    removeBtn.addEventListener("click", function(){
      todo.parentNode.removeChild(todo)
    })

    let fulfilledBtn = document.createElement("BUTTON");
    fulfilledBtn.classList.add("btn")
    fulfilledBtn.innerHTML = "Выполнить";

    let cout = 0;
    fulfilledBtn.addEventListener("click", function(){
      if (cout === 0) {
        todo.style.opacity = 0.5;
        cout = 1;
      } else{
        todo.style.opacity = 1;
        cout = 0;
      }
    })

    if (todoText !== '' && todoText !== ' ') {
      buttonsDiv.append(changeBtn, fulfilledBtn, removeBtn);
      todo.append(text, buttonsDiv)
      listTodo.append(todo)
      addInput.style = "border-color: inherit"
    } else {
      addInput.style = "border-color: red"
    }

    saveChange.addEventListener("click",function(){
      text.innerHTML = inputChange.value;
    })
})
