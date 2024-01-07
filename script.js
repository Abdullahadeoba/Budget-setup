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
        case 'Food'
        class_name = 'Food'
    }
}
