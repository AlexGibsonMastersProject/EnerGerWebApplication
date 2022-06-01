//date+time
const namemonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const date = new Date();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
let month = namemonth[date.getMonth()];
const year = date.getFullYear();
const str = `${day} ${month} ${year}`;
const timestr = `${hour}: ${minute}`;
console.log(str);

document.getElementById("date").innerHTML = str;
document.getElementById("hometime").innerHTML = timestr;

//graph container
const heatingslider = document.querySelector(".heatingslider")
const electricityslider = document.querySelector(".electricityslider")

heatingslider.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("heatingslider").style.backgroundColor = "black";
    document.getElementById("heatingslidertext").style.color = "white";
    document.getElementById("electricityslider").style.backgroundColor = "white";
    document.getElementById("electricityslidertext").style.color = "black";
    document.getElementById("heatinggraph").style.display = "block";
    document.getElementById("electricitygraph").style.display = "none";
});

electricityslider.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("heatingslider").style.backgroundColor = "white";
    document.getElementById("heatingslidertext").style.color = "black";
    document.getElementById("electricityslider").style.backgroundColor = "black";
    document.getElementById("electricityslidertext").style.color = "white";
    document.getElementById("heatinggraph").style.display = "none";
    document.getElementById("electricitygraph").style.display = "block";
});
