const inputText = document.getElementById('input-task');
const add = document.querySelector('.add');
const list = document.querySelector('.list')

function addTask(inputText) {

    if (inputText.value == "") {
        alert("Write something that you want to do later!")
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputText.value
        list.appendChild(li)
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputText.value = ""
    saveData()
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showTask() {
    list.innerHTML = localStorage.getItem("data");
}


add.addEventListener("click", () => {
    addTask(inputText);
})

add.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask(inputText);
    }
});

showTask();