const ticketForm = document.querySelector('.ticketModal-hidden');
// addTicket
const addTicket = document.querySelector('.add-ticket');
//Describe the issue
const describeValue = document.querySelector('.description');
//severity
const severity = document.querySelector('.severity-level');
//assignedTo
const department = document.querySelector('.assigned-to');
//ticket table
const ticketTable = document.querySelector('ticketTable-container');
// console.log(
//   ticketForm,
//   addTicket,
//   ticketTable,
//   severity,
//   assignedToValue,
//   ticketTable
// );
let tktDescriptionArr = [];
let tktSeverityArr = [];
let tktDepartmentArr = [];
addTicket.addEventListener('click', () => {
  let nameDescription = describeValue.value;
  tktDescriptionArr.push(nameDescription);
  let severityLevel = severity.value;
  tktSeverityArr.push(severityLevel);
  let departmentAssignedTo = department.value;
  tktDepartmentArr.push(departmentAssignedTo);
});

// class ticket {
//   #date;
//   #id;
//   constructor(name, severity, department) {
//     this.name = name;
//     this.severity = severity;
//     this.department = department;
//   }

//   grabInfo() {}
// }
