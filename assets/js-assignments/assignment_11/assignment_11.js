const studentsData = [
    {
        student_name: "Zubair Ahmed",
        roll_number: 45,
        obtain_marks: 300,
        total_marks: 400,
    },
    {
        student_name: "Kifyat Ullah",
        roll_number: 18,
        obtain_marks: 150,
        total_marks: 400,
    },
    {
        student_name: "Inam Ullah",
        roll_number: 13,
        obtain_marks: 310,
        total_marks: 400,
    },
    {
        student_name: "Faiz Ullah",
        roll_number: 99,
        obtain_marks: 380,
        total_marks: 400,
    },
]

// task_01. Display Student Info
// Given an array of student objects, display each student’s name and marks in a table using DOM.
function task_01() {
    const tableheaders = ["Student Name", "Roll Number", "Obtain Makrs", "Total Marks"]
    const table = document.createElement('table')
    const task_01_output = document.getElementById('task_01_output')
    task_01_output.innerHTML = ''

    const tableRow = document.createElement('tr')

    for (let i = 0; i < tableheaders.length; i++) {
        const tableHeader = document.createElement('th')
        tableHeader.textContent += tableheaders[i];
        tableRow.appendChild(tableHeader)
    }
    table.appendChild(tableRow)

    for (i = 0; i < studentsData.length; i++) {
        const row = document.createElement('tr')
        row.classList.add("text-center")

        // names_tableData
        const student_name_td = document.createElement('td')
        student_name_td.textContent = studentsData[i].student_name
        row.appendChild(student_name_td)

        // rollNumbers_tableData
        const roll_number_td = document.createElement('td')
        roll_number_td.textContent = studentsData[i].roll_number
        row.appendChild(roll_number_td)

        // obtainMarks_tableData
        const obtain_marks_td = document.createElement('td')
        obtain_marks_td.textContent = studentsData[i].obtain_marks
        if (studentsData[i].obtain_marks < 250) {
            obtain_marks_td.classList.add("bg-red-200")
            obtain_marks_td.classList.remove("bg-green-200")
        }
        if (studentsData[i].obtain_marks > 250) {
            obtain_marks_td.classList.add("bg-green-200")
            obtain_marks_td.classList.remove("bg-red-200")
        }
        row.appendChild(obtain_marks_td)

        // totalMarks_tableData
        const total_marks_td = document.createElement('td')
        total_marks_td.textContent = studentsData[i].total_marks
        row.appendChild(total_marks_td)

        table.appendChild(row)
    }
    task_01_output.appendChild(table)
}

// task_02. Find Top Scorer
// From a list of student objects with names and scores, find and display the top scorer.
function task_02() {
    const task_02_output = document.getElementById('task_02_output')
    task_02_output.innerHTML = ''

    let topScore = 0;
    let topScorerIndex = 0
    for (let i = 0; i < studentsData.length; i++) {
        if (studentsData[i].obtain_marks > 0) {
            topScore = studentsData[i].obtain_marks
            topScorerIndex = i
        }
    }
    const div = document.createElement('div')
    div.innerHTML = `<p> Top Scorer Name: 
        ${studentsData[topScorerIndex].student_name}
    </p>
    <p> Marks: 
        ${topScore}
    </p>`
    task_02_output.appendChild(div)
}

// task_03. Filter Products by Price Range
// Create a function that takes a min and max price and filters an array of product objects accordingly.
function task_03() {
    const product = [
        {product_name: "Lenovo Laptop",
            processor: "Core i5",
            generation: "5th",
            price: 45000
        },
        {product_name: "HP Laptop",
            processor: "Core i9",
            generation: "4th",
            price: 40000
        },
        {product_name: "DELL Laptop",
            processor: "Core i7",
            generation: "7th",
            price: 55000
        },
    ]
    const priceRangeMax = document.getElementById('price-range-max').value
    const priceRangeMin = document.getElementById('price-range-min').value
    const task_03_output = document.getElementById('task_03_output')
    task_03_output.innerHTML = ''

    const productContainer = document.createElement('div')
    
    for (let i = 0; i < product.length; i++) {
        if(product[i].price >= priceRangeMin && product[i].price <= priceRangeMax) {
            const div = document.createElement('div')

            const pName = document.createElement('p');
            pName.innerText = `Product Name: ${product[i].product_name}`;

            const pPrice = document.createElement('p');
            pPrice.innerText = `Product Price: $${product[i].price}`;

            div.appendChild(pName);
            div.appendChild(pPrice);

            productContainer.appendChild(div);
        }
    }
    task_03_output.appendChild(productContainer)
}

// task_04. Count Word Frequencies
// Given a paragraph from a textarea, count the frequency of each word and display it as a list.
function task_04() {
    let textArea = document.getElementById('textarea').value.trim()
    const task_04_output = document.getElementById('task_04_output')
    task_04_output.innerHTML = '';
    
    if(!textArea) {
        console.log("Please type something")
        return
    }

    let wordsArr= textArea.split(/\s+/)
    let wordsObj = {}

    for (let i = 0; i < wordsArr.length; i++) {
        let word = wordsArr[i].toLowerCase()
        if(wordsObj[word]){
            wordsObj[word] += 1
        } else {
            wordsObj[word]  = 1
        }
    }
    // console.log(wordsObj)

    for (let word    in wordsObj) {
        const p = document.createElement('p');
        p.innerText = `${word}: ${wordsObj[word]}`;
        task_04_output.appendChild(p);
    }
    wordsArr = []
}