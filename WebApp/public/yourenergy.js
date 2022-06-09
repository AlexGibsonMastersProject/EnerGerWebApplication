const energysource1 = db.collection('energysourcetab').limit(1)
const addsource = document.querySelector(".addsourcebutton");
const energysource = document.querySelector(".energysourceinput");
const addbutton = document.querySelector(".addbutton");
const closebutton = document.querySelector(".closebutton");
const removesource1 = document.querySelector(".removesource1");

db.collection('energysourcetab').get().then(snap => {
    db.collection("energysourcetab").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            lastid = doc.id,
            document.getElementById("documentidtest").innerHTML = lastid;
    });
    size = snap.size,
    document.getElementById("documenttest").innerHTML = size;
    if (size == 1 && lastid == 1) {
        document.getElementById('energysource1').style.display = "flex",
        document.getElementById('energysource2').style.display = "none";
        document.getElementById('energysource3').style.display = "none";
    }
    else if (size == 1 && lastid == 2) {
        document.getElementById('energysource1').style.display = "none",
        document.getElementById('energysource2').style.display = "flex";
        document.getElementById('energysource3').style.display = "none";
    }
    else if (size == 1 && lastid == 3) {
        document.getElementById('energysource1').style.display = "none",
        document.getElementById('energysource2').style.display = "none";
        document.getElementById('energysource3').style.display = "flex";
    }
    else if (size == 2 && lastid == 2) {
        document.getElementById('energysource1').style.display = "flex",
        document.getElementById('energysource2').style.display = "flex";
        document.getElementById('energysource3').style.display = "none";
    }
    else if (size == 2 && lastid == 3) {
        document.getElementById('energysource1').style.display = "none",
        document.getElementById('energysource2').style.display = "flex";
        document.getElementById('energysource3').style.display = "flex";
    }
    else if (size == 3) {
        document.getElementById('energysource1').style.display = "flex",
        document.getElementById('energysource2').style.display = "flex";
        document.getElementById('energysource3').style.display = "flex";
    }
})});

removesource1.addEventListener('click', (e) => {
    e.preventDefault();
    db.collection("energysourcetab").doc("1").delete();
});


addbutton.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('addsourcebox').style.display = 'flex'
});

closebutton.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('addsourcebox').style.display = 'none'
});

addsource.addEventListener('click', (e) => {
    e.preventDefault();
    db.collection('energysourcetab').get().then(snap => {
        db.collection("energysourcetab").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                lastid = doc.id;
        })});
    size = snap.size,
        db.collection('energysourcetab').doc((size+1).toString()).set({
            energySource: energysource.value,
        }).then(() => {
            document.getElementById("addsourcebutton").style.backgroundColor = "#2C423C",
            document.getElementById("addsourcebuttontext").innerHTML = "Success",
            document.getElementById('addsourcebox').style.display = "none",
            document.getElementById("energysourcetext1").innerHTML = energysource1;
        })
})});


