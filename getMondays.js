function getMondays(year, month) {
    var d = new Date(Date.UTC(year, --month, 1)), mondays = []; 
    while (d.getDay() !== 1) d.setDate(d.getDate() +1);
    while (d.getMonth() === month) {     
        mondays.push(d.getDate());
        d.setDate(d.getDate() +7);        
    }
    return mondays;
}

console.log("Monday's dates for May 2024 are:", getMondays(2024, 4));