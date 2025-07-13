const toDos = [];
const todoList = document.getElementById("todoList");

function toDoApp() {
    const toDo = document.getElementById("todoText").value;
    if (toDo.length === 0) {
        Swal.fire({
            title: "Input Required!",
            text: "You need to type something first.",
            icon: "info",
            confirmButtonText: "OK"
        });
        return;
    }
    toDos.push(toDo);
    toDoRender();
    console.log(toDos)
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
        editBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff8080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-pen-line-icon lucide-file-pen-line">
                <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"/>
                <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>
                <path d="M8 18h1"/>
            </svg>
        `;

        editBtn.onclick = function () {
            toDoEdit(i);
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff8080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
            </svg>
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

