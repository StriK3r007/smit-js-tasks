// import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js"; 
// import { db } from "./firebaseconfig.js"

const markButton = document.querySelectorAll("#mark-btn")
const editButton = document.querySelectorAll("#edit-btn")
const deleteButton = document.querySelectorAll("#delete-btn")

const todoForm = document.getElementById("todo-form")
const todoHeading = document.querySelectorAll("#todo-heading")
const todoPara = document.querySelectorAll("#todo-para")
const todoDisplayContainer = document.getElementById("todo-container")

todoForm.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(todoHeading.value)
    console.log(todoPara.value)
})

let markDone = false

markButton.forEach((element, index) => {
    let btnIndex = index;
    element.addEventListener("click", () => {
        element.classList.toggle("opacity-50")
        todoHeading.forEach((element, index) => {
            if (btnIndex === index) {
                element.classList.toggle("line-through")
                element.classList.toggle("text-red-500")
            }
        })
        todoPara.forEach((element, index) => {
            if (btnIndex === index) {
                element.classList.toggle("line-through")
                
            }
            
        })
        editButton.forEach((element, index) => {
            if (btnIndex === index) {
                element.classList.toggle("opacity-50")
                
            }
        })
    })
});

// markButton.forEach((item, index) => {
//     item.addEventListener("click", () => {
//         let btnIndex = index;
//         console.log("Mark Done")
//         markDone = true
//         if (markDone) {
//             todoHeading.forEach((item, index) => {
//                 if(btnIndex === index) {
//                     console.log(index)
//                     item.classList.add("line-through", "text-red-500")
//                 }
//             })
//             todoPara.forEach((item, index) => {
//                 if(btnIndex === index) {
//                     item.classList.add("line-through")
//                 }
//             })

//             editButton.forEach((item, index) => {
//                 if (btnIndex === index) {
//                     item.disabled = true
//                     item.classList.replace("cursor-pointer", "cursor-not-allowed")
//                     item.classList.add("opacity-50")
//                 }
//             })

//             item.disabled = true
//             item.classList.replace("cursor-pointer", "cursor-not-allowed")
//             item.classList.replace("hover:bg-amber-400", "bg-amber-400")
//             item.classList.add("opacity-50")
//         }
//     })
// })


/*



todos.forEach(todo => {
    todoContainer.innerHTML += `
        <div class="flex flex-col justify-between items-center gap-2 rounded-2xl shadow hover:shadow-gray-300 hover:shadow-2xl transition border-t-6 border-b-4 border-[#f51c41] p-2">
                        <div class="flex flex-col gap-2 w-full">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h1 class="text-2xl font-semibold" id="todo-heading">${todo.title}</h1>
                                </div>
                                <div class="border-2 border-amber-300 rounded-3xl">
                                    <button class="border-amber-300 hover:bg-amber-400 rounded-3xl px-4 py-2 cursor-pointer transition" id="mark-btn">Mark Done</button>
                                </div>
                            </div>
                            <p id="todo-para">${todo.description}</p>
                        </div>
                        <div class="flex justify-between items-end gap-4 w-full">
                            <div>
                                <div class="text-xs text-gray-400">
                                    <span>Created at: </span>
                                    <span>${todo.createdAt}</span>
                                </div>
                            </div>
                            <div class="flex gap-2 w-1/2">
                                <input class="p-2 w-full text-white font-bold rounded-3xl cursor-pointer hover:shadow active:shadow-2xs transition bg-gradient-to-r from-[#66f43f] via-[#36c563] to-[#44efad]" type="submit" value="Edit" id="edit-btn">
                                <input class="p-2 w-full text-white font-bold rounded-3xl cursor-pointer hover:shadow active:shadow-2xs transition bg-gradient-to-r from-[#f51c41] via-[#a11a57] to-[#d32d2d]" type="submit" value="Delete" id="delete-btn">
                            </div>
                        </div>
                    </div>
    `
})

*/