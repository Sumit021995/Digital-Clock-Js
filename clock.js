let clock = document.getElementById('clock');
// let date = new Date();
// date = date.toLocaleTimeString();
// console.log(date.toLocaleTimeString());
// 2:52:59 pm it shows the current time which is changing 
// clock.innerHTML = `${date}`

// Here we use method of setInterval with 1000 i.e 1sec
// proper syntex for setInterval
// setInterval(function(){},time interval in mili second)

setInterval(function(){
    let date = new Date();
clock.innerHTML = date.toLocaleTimeString();
},1000)