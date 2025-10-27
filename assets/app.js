const darkMode = document.getElementById("darkMode")

// sections
const javascriptAssignments = document.getElementById("javascript-assignments")
const miniProjects = document.getElementById("mini-projects")
const firebaseAssignments = document.getElementById("firebase-assignments")
const sectionTitle = document.querySelectorAll(".section-title")
const sectionDescription = document.querySelectorAll(".section-description")
const assignmentCards = document.querySelectorAll(".assignment-card")
const assignmentTitles = document.querySelectorAll(".assignment-title")

darkMode.addEventListener("click", () => {
    if (!javascriptAssignments.classList.contains("bg-gray-800")) {
        darkMode.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        `

        javascriptAssignments.classList.add("bg-gray-800")
        miniProjects.classList.add("bg-gray-800")
        firebaseAssignments.classList.add("bg-gray-800")

        sectionTitle.forEach(title => {
            title.classList.remove("text-gray-500")
            title.classList.add("text-gray-100")

        })

        sectionDescription.forEach(description => {
            description.classList.remove("text-gray-500")
            description.classList.add("text-gray-200")
        })
    } else {
        darkMode.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
        `
        
        javascriptAssignments.classList.remove("bg-gray-800")
        miniProjects.classList.remove("bg-gray-800")
        firebaseAssignments.classList.remove("bg-gray-800")
        
        sectionTitle.forEach(title => {
            title.classList.add("text-gray-500")
            title.classList.remove("text-gray-100")

        })
        sectionDescription.forEach(description => {
            description.classList.add("text-gray-500")
            description.classList.remove("text-gray-200")
        })

        sectionDescription.classList.add("text-gray-500")
        sectionDescription.classList.remove("text-gray-200")
    }

    
})

darkMode.addEventListener("click", () => {
    assignmentCards.forEach(card => {
        if (card.classList.contains("bg-gray-100")) {
            card.classList.add("bg-gray-900")
            card.classList.remove("bg-gray-100")
        } else {
            card.classList.add("bg-gray-100")
            card.classList.remove("bg-gray-900")
        }
    });

    assignmentTitles.forEach(title => {
        if (title.classList.contains("text-gray-900")) {
            title.classList.remove("text-gray-900")
            title.classList.add("text-gray-100")
        } else {
            title.classList.add("text-gray-900")
            title.classList.remove("text-gray-100")
        }
    })
})





/* 
const darkMode = document.getElementById("darkMode");

const sections = [
    document.getElementById("javascript-assignments"),
    document.getElementById("mini-projects"),
    document.getElementById("firebase-assignments")
];
const sectionTitle = document.querySelectorAll(".section-title");
const sectionDescription = document.querySelectorAll(".section-description");
const assignmentCards = document.querySelectorAll(".assignment-card");
const assignmentTitles = document.querySelectorAll(".assignment-title");

const toggleClasses = (elements, classList) => {
    elements.forEach((element) => {
        classList.forEach(([remove, add]) => {
            element.classList.remove(remove);
            element.classList.add(add);
        });
    });
};

darkMode.addEventListener("click", () => {
    const isDarkMode = sections[0].classList.contains("bg-gray-800");

    // Toggle dark/light mode
    const darkModeIcon = isDarkMode ? "sun" : "moon";
    const iconSvg = darkModeIcon === "sun" ? `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2"/>
            <path d="M12 20v2"/>
            <path d="m4.93 4.93 1.41 1.41"/>
            <path d="m17.66 17.66 1.41 1.41"/>
            <path d="M2 12h2"/>
            <path d="M20 12h2"/>
            <path d="m6.34 17.66-1.41 1.41"/>
            <path d="m19.07 4.93-1.41 1.41"/>
        </svg>
    ` : `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon">
            <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
        </svg>
    `;
    darkMode.innerHTML = iconSvg;

    // Toggle dark background color for sections
    toggleClasses(sections, [
        ["bg-gray-800", isDarkMode ? "bg-white" : "bg-gray-800"]
    ]);

    // Toggle text color for section titles and descriptions
    toggleClasses(sectionTitle, [
        ["text-gray-100", isDarkMode ? "text-gray-500" : "text-gray-100"]
    ]);
    toggleClasses(sectionDescription, [
        ["text-gray-200", isDarkMode ? "text-gray-500" : "text-gray-200"]
    ]);

    // Toggle background for assignment cards
    toggleClasses(assignmentCards, [
        ["bg-gray-100", isDarkMode ? "bg-gray-900" : "bg-gray-100"]
    ]);

    // Toggle title colors for assignments
    toggleClasses(assignmentTitles, [
        ["text-gray-900", isDarkMode ? "text-gray-100" : "text-gray-900"]
    ]);
});
*/