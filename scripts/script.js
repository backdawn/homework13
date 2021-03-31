$('#exampleModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

let exampleModal = document.getElementById('exampleModal')
let addTodo = document.getElementById("addTodo");
let inputText = document.getElementById("addInput");
let listTodo = document.getElementById("listTodo");
let buttons = document.getElementById("buttons");
addTodo.addEventListener("click",function(){
    let todoText = inputText.value
    // inputText.value = ""

    let todo = document.createElement("DIV")
    todo.classList.add("alert","alert-primary")

    let text = document.createElement("DIV")
    text.classList.add("text")
    text.innerHTML = todoText + " "


    let buttonsDiv = document.createElement("DIV")
    buttonsDiv.classList.add("buttons")

    // todo.classList.add("buttons")
    // todo.innerHTML = removeBtn, fulfilledBtn;

    let changeBtn = document.createElement("BUTTON")
    changeBtn.classList.add("btn")
    changeBtn.setAttribute("data-toggle", "modal")
    changeBtn.setAttribute("data-target", "#exampleModalCenter")
    changeBtn.innerHTML = "Редактировать"
    changeBtn.addEventListener("click", function(){
      console.log(222222222);
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
    fulfilledBtn.addEventListener("click", function(){
      todo.style.opacity = 0.5;
    })
    if (todoText !== '' && todoText !== ' ') {
      buttonsDiv.append(changeBtn, fulfilledBtn, removeBtn);
      todo.append(text, buttonsDiv)
      listTodo.append(todo)
      addInput.style = "border-color: inherit"
    } else {
      addInput.style = "border-color: red"
    }

})
