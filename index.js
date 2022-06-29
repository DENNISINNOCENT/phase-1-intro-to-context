// // Your code here
function createEmployeeRecord(arr){

return {
    firstName:arr[0],
    familyName:arr[1],
    title:arr[2],
    payPerHour:arr[3],
    timeInEvents: [],
    timeOutEvents:[],
}

}
function createEmployeeRecords(employeData){
return employeData.map((arr)=>{
    return createEmployeeRecord(arr)
})
}
function createTimeInEvent(employe,dateStamp){
    let [date ,hour] =dateStamp.split(' ')
    employe.timeInEvents.unshift({
        type:"TimeIn",
        hour:parseInt(hour,10),
        date,
      })
      return employe

}
function createTimeOutEvent(employe,dateStamp){
    let [date ,hour] =dateStamp.split(' ')
    employe.timeOutEvents.push({
        type:"TimeOut",
        hour:parseInt(hour,10),
        date,
      })
      return employe

}
let hoursWorkedOnDate = function(employee, workedDate){
    let timeInEvent = employee.timeInEvents.find((e) =>{
        return e.date === workedDate
    })

    let timeOutEvent = employee.timeOutEvents.find((e)=>{
        return e.date === workedDate
    })

    return (timeOutEvent.hour - timeInEvent.hour)/100 
}
function wagesEarnedOnDate (employe,workedDate){
let wage=hoursWorkedOnDate(employe,workedDate)*employe.payPerHour
return wage
}
function allWagesFor(employe){
    let eligibleDates = employe.timeInEvents.map((e)=>{
        return e.date

 })
 let payable = eligibleDates.reduce(function(memo, d){
    return memo + wagesEarnedOnDate(employe, d)
}, 0)

return payable
}

  function findEmployeeByFirstName(srcArray, firstName) {
return srcArray.find(function(rec){
return rec.firstName === firstName
})
}

 function calculatePayroll(arrayOfEmployeeRecords){
return arrayOfEmployeeRecords.reduce(function(memo, rec){
    return memo + allWagesFor(rec)
}, 0)
}
