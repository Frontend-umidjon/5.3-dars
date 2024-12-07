const listEl = document.querySelector("#taskList");
const inputEl = document.querySelector("#taskInput");
const formEl = document.querySelector(".input-section");

const TODOS = JSON.parse(localStorage.getItem("todos")) || [
  {
    id: 1,
    title: "Erta Turish",
    status: false,
  },
  {
    id: 2,
    title: "Yuz Yuvish",
    status: false,
  },
  {
    id: 3,
    title: "Nonushta Qilish",
    status: false,
  },
];

function createTodo(data) {
  while (listEl.firstChild) {
    listEl.firstChild.remove();
  }

  data.forEach((item) => {
    const liEl = document.createElement("li");

    liEl.innerHTML = `
      <input type="checkbox" ${item.status ? "checked" : ""}>
      <h2>${item.title}</h2>
    `;

    listEl.appendChild(liEl);
  });
}

window.addEventListener("load", () => {
  createTodo(TODOS);
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskTitle = inputEl.value.trim();

  if (taskTitle !== "") {
    const newTodo = {
      id: new Date().getTime(), 
      title: taskTitle, 
      status: false,
    };

    TODOS.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(TODOS))
    createTodo(TODOS);
    inputEl.value = ""; 
  }
});
