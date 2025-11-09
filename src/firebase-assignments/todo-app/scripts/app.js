import { collection, addDoc, Timestamp, getDocs, query, orderBy, deleteDoc, doc, updateDoc, arrayUnion, arrayRemove } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { db } from "./firebaseconfig.js"

// todo add
const todoForm = document.getElementById("todo-form")
const todoTitle = document.getElementById("todo-title")
const todoDesc = document.getElementById("todo-desc")
const todoContainer = document.getElementById("todo-container")

const toastBox = document.getElementById("toast-box")
const toastMessage = document.getElementById("toast-message")

let allTodos = []

// * todo data sent to firestore
todoForm.addEventListener("submit", async (event) => {
    event.preventDefault()
    if (!todoTitle.value && !todoDesc.value) {
        return toastError("Oops! Todo title and description are required.")
    }

    const userData = {
        title: todoTitle.value,
        description: todoDesc.value,
        status: true,
        time: Timestamp.fromDate(new Date()),
    };
    // uid: userUID,
    
    todoTitle.value = ''
    todoDesc.value = ''

    try {
        const docRef = await addDoc(collection(db, "todos"), userData);
        allTodos.push({ ...userData, docid: docRef.id });
        renderAllTodos(allTodos)
        return toastSuccess("Great job! Your todo has been added successfully.")

        
    } catch (e) {
        console.error("Error adding document: ", e);
        toastError("Oops! Something went wrong.")
    }
});

// * todo data fetch from firestore
const getDataFromDB = async () => {
    const q = query(
        collection(db, "todos"), orderBy("time", "desc")
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        allTodos.push({ ...doc.data(), docid: doc.id });
    });
    renderAllTodos(allTodos);
}
getDataFromDB()

// * todo render
const renderAllTodos = (todos) => {
    todoContainer.innerHTML = ''
    todos.forEach(element => {

        const date = formatDate(element.time)

        todoContainer.innerHTML += `
            <div class="flex flex-col justify-between items-center gap-2 bg-white rounded-2xl shadow hover:shadow-2xl transition border-t-6 border-b-4 border-[#f51c41] p-2">
                        <div class="flex flex-col gap-2 w-full">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h1 class="text-2xl font-semibold" id="todo-heading">${element.title}</h1>
                                </div>
                                <div>
                                    <button class="text-xs border-2 border-amber-300 hover:bg-amber-400 rounded-3xl px-2 py-2 cursor-pointer transition" id="mark-btn">Mark Done</button>
                                </div>
                            </div>
                            <p id="todo-para" class="overflow-x-hidden overflow-y-scroll h-14">${element.description}</p>
                        </div>
                        <div class="flex justify-between items-end w-full">
                            <div>
                                <div class="text-xs text-gray-400">
                                    <span>Created at: </span>
                                    <span>${date}</span>
                                </div>
                            </div>
                            <div class="flex gap-2 w-1/2">
                                <input class="w-full py-2 text-white text-xs font-bold rounded-3xl cursor-pointer hover:shadow active:shadow-2xs transition bg-gradient-to-r from-[#66f43f] via-[#36c563] to-[#44efad]" type="submit" value="Edit" id="edit-btn">
                                <input class="w-full py-2 text-white text-xs font-bold rounded-3xl cursor-pointer hover:shadow active:shadow-2xs transition bg-gradient-to-r from-[#f51c41] via-[#a11a57] to-[#d32d2d]" type="submit" value="Delete" id="delete-btn">
                            </div>
                        </div>
                    </div>
                    `
                });
                // FIXME confirm before deletion
                const deleteButton = document.querySelectorAll("#delete-btn");
                deleteButton.forEach((element, index) => {
                    element.addEventListener("click", async () => {
                        try {
                            const docRef = doc(db, 'todos', allTodos[index].docid);
                            await deleteDoc(docRef);
        
                            allTodos.splice(index, 1);
        
                            renderAllTodos(allTodos);
                        } catch (error) {
                            console.error("Error deleting todo:", error);
                        }
                    })
                })
                // TODO Add edit todo functionality
                // TODO Add mark done functionality
}

// * date formatting
const formatDate = (timestamp) => {
    const timeStamp = timestamp
    const milliseconds = timeStamp.seconds * 1000;
    const nanosecondsInMilliseconds = timeStamp.nanoseconds / 1000000;
    const totalMilliseconds = milliseconds + nanosecondsInMilliseconds;

    const date = new Date(totalMilliseconds);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const weekday = date.toLocaleString('en-us', { weekday: 'short' });
    const day = date.getDate().toString().padStart(2, '0'); // Add leading zero to day if needed
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${weekday}, ${day} ${month} ${year}`;
}

// * toastNotifications for success and error
const toastSuccess = (message) => {
    let counter = 0
    const toast = setInterval(() => {
        if (counter === 0) {
            toastBox.classList.replace("hidden", "flex");
            toastBox.classList.add("text-green-600")
            toastBox.classList.add("bg-green-200")
            toastMessage.textContent = message
        }
        counter++
        if (counter === 10) {
            toastBox.classList.replace("flex", "hidden")
            clearInterval(toast);
        }
    }, 1000)
}
const toastError = (message) => {
    let counter = 0
    const toast = setInterval(() => {
        if (counter === 0) {
            toastBox.classList.replace("hidden", "flex");
            toastBox.classList.add("text-red-500")
            toastBox.classList.add("bg-red-200")
            toastMessage.textContent = message
        }
        counter++
        if (counter === 10) {
            toastBox.classList.replace("flex", "hidden")
            clearInterval(toast);
        }
    }, 1000)
}


/*
// ! Use Dynamic Event Delegation
// Instead of binding the click event to each deleteButton using forEach, you can attach a single event listener to a parent element and use event delegation. This way, you don’t need to worry about index mismatches because the event listener will handle the deletion dynamically.

// Assuming there’s a parent element that holds all delete buttons
const todoListContainer = document.getElementById("todo-list-container");

todoListContainer.addEventListener("click", async (event) => {
    if (event.target && event.target.matches("#delete-btn")) {
        // Find the index of the clicked button
        const index = Array.from(todoListContainer.querySelectorAll("#delete-btn")).indexOf(event.target);
        
        try {
            console.log(allTodos[index]);

            const docRef = doc(db, "todos", allTodos[index].id);

            // Delete the todo document from Firestore
            await deleteDoc(docRef);

            // Remove the todo from the local array
            allTodos.splice(index, 1);

            // Re-render the todos list
            renderTodo(allTodos);
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    }
});


*/