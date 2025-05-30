{
  const tasks = [
    {
      content: "Nagrać lekcję",
      done: false,
    },
    {
      content: "Zjeść pierogi",
      done: true,
    },
  ];

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };


  const addNewTask = (newTaskContent) => {

    tasks.push({
      content: newTaskContent,
    });

    render();

  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
         <li class="list"
          ${task.done ? " style=\"text-decoration: line-through\"" : ""}
          >
           <button class="js-done">🗸</button>
          ${task.content}
           <button class="js-remove">🗑️</button>
        </li>
      `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");

     toggleDoneButtons.forEach((toggleDoneButtons, index) => {
      toggleDoneButtons.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };
  

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();
    console.log(newTaskContent);

    if (newTaskContent === "") {
      return;
    };

    addNewTask(newTaskContent);
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}