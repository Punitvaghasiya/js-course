// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// let d = new Date(2023, 0, 23)
// let d = new Date(2023, 0, 23, 10, 28)
// let d = new Date("2023-01-14")
let d = new Date("01-14-2023")
// console.log(d.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(d.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time` 

newDate.toLocaleString('default', {
    weekday: "long",
})