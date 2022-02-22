const ticketForm = document.querySelector('.ticketModal-hidden');
// addTicket
const addTicket = document.querySelector('.addTicket')
//Describe the issue 
const describeValue = document.querySelector('.description')
//severity 
const severity = document.querySelector('severity')
//assignedTo
const assignedToValue = document.querySelector('assigned-to')
//ticket table
const ticketTable = document.querySelector('ticketTable-container');
console.log(ticketForm,addTicket,ticketTable,severity,assignedToValue,ticketTable);


let valueOFDesribedValue = []
let valueOFseverityValue = []
let valueOFassignedToValue = []
addTicket.addEventListener('click', () =>{
  // let test = document.createElement('li')
  let description = describeValue.value
  console.log(description);


})
