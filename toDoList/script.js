//SELECT
function getListContainer() {
    return document.querySelector(".list-container");
}

// ADD 
function createListNode(value, checked) {
    const createLi = document.createElement("li");

    //input
    const createInput = document.createElement("input");
    createInput.setAttribute("type", "checkbox");
    createInput.checked = checked;

    //span
    const createSpan = document.createElement("span");
    if (checked) {
        createSpan.classList.add("checked");
    }
    createSpan.innerHTML = value;

    // div
    const createDiv = document.createElement("div");
    createDiv.innerHTML = "&#10005";
    createDiv.classList.add("delete-icon");

    createLi.appendChild(createInput);
    createLi.appendChild(createSpan);
    createLi.appendChild(createDiv);

    return createLi;
}

//ADD TASK
function createNewTask() {
    const input = document.querySelector(".text-input");
    const inputValue = input.value;
    const checked = false;

    const listContainer = getListContainer();
    const newLi = createListNode(inputValue, checked);
    listContainer.appendChild(newLi);
    //reset
    input.value = "";
}

// REMOVE

function deleteTask(deleteIconElement) { // deleteIcon
    const targetLi = deleteIconElement.parentNode;
    const listContainer = getListContainer();
    listContainer.removeChild(targetLi);
}

// REMOVE ALL
function removerAll() {
    const listContainer = getListContainer();
    listContainer.innerHTML = "";
}

// TOGGLE
function toggleTask(checkboxElement) {
    const span = checkboxElement.nextSibling;
    span.classList.toggle("checked");
}

//Event
function handleClick(e) {
    const target = e.target;
    if (target.classList.contains("delete-icon")) {
        deleteTask(target);
        return;
    }
    if (target.tagName === "INPUT" && target.getAttribute("type") === "checkbox") {
        toggleTask(target);
        return;
    }
}

function loadEvents() {
    const addButton = document.querySelector("#addButton"); //search with id
    const clearAllButton = document.querySelector("#clearButton");
    const listContainer = getListContainer();

    addButton.addEventListener("click", createNewTask);
    clearAllButton.addEventListener("click", removerAll);
    listContainer.addEventListener("click", handleClick);
}

loadEvents();