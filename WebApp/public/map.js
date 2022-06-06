const nearbygerloc = document.querySelector(".nearbygerloc")
const nearbyenergyloc = document.querySelector(".nearbyenergyloc")
const seeenergysources = document.querySelector(".seeenergysources")

//map functionality
nearbygerslider.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("nearbygerslider").style.backgroundColor = "black";
    document.getElementById("nearbygerslidertext").style.color = "white";
    document.getElementById("enerinfraslider").style.backgroundColor = "white";
    document.getElementById("enerinfraslidertext").style.color = "black";
    document.getElementById("nearbygerloc").style.display = "block";
    document.getElementById("nearbyenergyloc").style.display = "none";
    document.getElementById("nearbyenerinfracard").style.display = "none";
});

enerinfraslider.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("nearbygerslider").style.backgroundColor = "white";
    document.getElementById("nearbygerslidertext").style.color = "black";
    document.getElementById("enerinfraslider").style.backgroundColor = "black";
    document.getElementById("enerinfraslidertext").style.color = "white";
    document.getElementById("nearbygerloc").style.display = "none";
    document.getElementById("nearbyenergyloc").style.display = "block";
    document.getElementById("nearbygercard").style.display = "none";
    
});

nearbygerloc.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("nearbygercard").style.display = "block";
    document.getElementById("energysource1").style.display = "none";
});

seeenergysources.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("energysource1").style.display = "block";
});

nearbyenergyloc.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("nearbyenerinfracard").style.display = "block";
});

seeenergysources.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("energysource1").style.display = "block";
});

