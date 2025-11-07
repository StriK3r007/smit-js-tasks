const toDos = [];
const todoList = document.getElementById("todoList");

function toDoApp() {
    const toDo = document.getElementById("todoText").value;
    if (toDo.length === 0) {
        Swal.fire({
            title: "Input Required!",
            text: "You need to type something first.",
            icon: "info",
            confirmButtonText: "OK",
            confirmButtonColor: "#3085d6"
        });
        return;
    }
    toDos.push(toDo);
    toDoRender();
    document.getElementById("todoText").value = "";

}

function toDoRender() {
    todoList.textContent = "";

    for (let i = 0; i < toDos.length; i++) {
        const li = document.createElement("li");
        li.classList.add(
            "flex",
            "justify-between",
            "items-center",
            "my-2",
            "hover:bg-gray-300",
            "p-2",
            "rounded-3xl"
        );

        const span = document.createElement("span");
        span.classList.add(
            "overflow-scroll"
        )
        span.textContent = toDos[i];

        const buttonContainer = document.createElement("span");
        buttonContainer.classList.add(
            "flex",
            "justify-between",
            "items-center",
            "gap-2"
        );

        const editBtn = document.createElement("button");
        editBtn.classList.add(
            "cursor-pointer"
        )
        editBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff8080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
        `;

        editBtn.onclick = function () {
            toDoEdit(i);
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add(
            "cursor-pointer"
        )
        deleteBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff8080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        `;
        deleteBtn.onclick = function () {
            toDoDelete(i);
        };

        buttonContainer.appendChild(editBtn);
        buttonContainer.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(buttonContainer);

        todoList.appendChild(li);
    }
}

// function toDoEdit(index) {
//   const newValue = prompt("Edit your todo:", toDos[index]);
//   if (newValue !== null && newValue.trim() !== "") {
//     toDos[index] = newValue.trim();
//     toDoRender();
//   }
// }

function toDoEdit(index) {
    Swal.fire({
        title: "Edit your to-do",
        input: "text",
        inputValue: toDos[index],
        showCancelButton: true,
        confirmButtonText: "Save",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        inputValidator: (value) => {
            if (!value.trim()) {
                return "To-do cannot be empty!";
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            toDos[index] = result.value.trim();
            toDoRender();
        }
    });
}


function toDoDelete(index) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            toDos.splice(index, 1);
            toDoRender();
            Swal.fire({
                title: "Deleted!",
                text: "To-Do deleted.",
                icon: "success",
            });
        }
    });
}

function toDoDeleteAll() {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete all!",
    }).then((result) => {
        if (result.isConfirmed) {
            toDos.length = 0;

            toDoRender();

            Swal.fire({
                title: "Deleted All!",
                text: "All to-dos deleted.",
                icon: "success",
            });
        }
    });
}

