let button = document.getElementById("button")
let DATE = document.getElementById("dateInput")
let Amount = document.getElementById("amountInput")
let Description = document.getElementById("descriptionInput")
let Type = document.getElementById("type")
let Table = document.getElementById("table")
let class_name;
let expense_records = []; // This will be for local storage

// Check if there is any date already stored in the local storage
if(localStorage.getItem('expense_records')){
    expense_records = JSON.parse(localStorage.getItem('expense_records'))
    renderTable()  // we will initialize this function in a little bit, but rd doesn't exit yed XD
}

let input = [DATE, Amount, Description, ] // useful to have these input in an array if we need to loop over it 

function add_expense(date = 'N/A', type = 'N/A', amount = 'N/A', description = 'N/A'){
    //essentially we created default parameters which will take precedence if the user doesn't input anything 
    let DATE_OBJECT = new Date(DATE.value)
    let FORMATTED_DATE = DATE_OBJECT.toLocaleDateString('en-US' ,{month: '2-digit', day: '2-digit', year: 'numeric'})

    // now we are assigning values to the parameters, otherwise they will store 'N/A' since that is defaulted
    date = FORMATTED_DATE
    type = Type.value
    amount = Amount.value
    description = Description.value

    // This logic shown below is resposible for color-coding our different type of expenses to help you get a good idea of which category are you spending most on 

    switch (Type.value){
        case 'Food':
             class_name = 'Food'
        break;

        case 'Clothing':
            class_name = 'Clothing'
        break;

        case 'Transportation':
             class_name = 'Transportation'
        break;

        case 'Debt':
            class_name = 'Debt'
        break;

        case 'Education':
            class_name = 'Education'
        break;

        case 'Miscellaneous':
            class_name = 'Miscellaneous'
            break;
    }

    // Add expense to the expense_records array
    expense_records.push({date, type, amount, description, class_name})
    // Update the local storage with the expense _records array
    UpdateLocalStorage()  // we also need to init this function as well a little bit
    // Renders the table with the updated expense_records array
    renderTable()
    saveData()

}

function delete_expense(index) {
    // This function might be useful in case you typed in the wrong expense which allow you to delete it similar to a TO-DO list
    expense_records.splice(index,1)
    UpdateLocalStorage()
    // Renders the table with the updated expense_records array
    renderTable()
    saveData()
}

function renderTable() {
    // Clear the table before rendering the updated data

    Table.innerHTML = `<tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>`

    // Render each expense record to the table

    expense_records.forEach((expense,index) =>{
        let color_code = expense.class_name

        Table.innerHTML += `<tr>
                                <td class = "${color_code}">${expense.date}</td>
                                <td class = "${color_code}">${expense.type}</td>
                                <td class = "${color_code}">💲${expense.amount}</td>
                                <td class = "${color_code}">${expense.description}</td>
                                <td class = "${color_code}"><button onclick = "delete_expense(${index})" class
                                 = btn btn-secondary btn-sm>Delete</button></td>



                            </tr>`
                                
        
    })
}

function UpdateLocalStorage(){
    localStorage.setItem('expense_records', JSON.stringify(expense_records));
}

button.addEventListener('click', add_expense)


function saveData(){
    localStorage.setItem("data", expense_records.innerHTML)
}
function showTask(){
    expense_records.innerHTML = localStorage.getItem("data")
}
showTask();
