//predictions
const energytype = db.collection('energytype').limit(1)
const energyamount = db.collection('energyamount').limit(1)
const energytime = db.collection('energytime').limit(1)
const eledem = db.collection('eledem').limit(1)
const headem = db.collection('headem').limit(1)
const clurad = db.collection('clurad').limit(1)
const avcale = db.collection('avcale').limit(1)
const pvcapa = db.collection('pvcapa').limit(1)
const wincap = db.collection('wincap').limit(1)
const elheca = db.collection('elheca').limit(1)
const batcap = db.collection('batcap').limit(1)
const ensyma = db.collection('ensyma').limit(1)

energytype.onSnapshot(snapshot =>{
	let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data())
        if(change.type == 'added'){
        
		let energytype = change.doc.data()["energytype"];
        document.getElementById("energytype").innerHTML = energytype; 
        }
    })
    console.log(changes);})

energyamount.onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            console.log(change.doc.data())
            if(change.type == 'added'){
            
            let energyamount = change.doc.data()["energyamount"];
            document.getElementById("energyamount").innerHTML = energyamount; 
            }
    })
    console.log(changes);})

energytime.onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            console.log(change.doc.data())
            if(change.type == 'added'){
            
            let energytime = change.doc.data()["energytime"];
            document.getElementById("energytime").innerHTML = energytime; 
            }
    })
    console.log(changes);})

eledem.onSnapshot(snapshot =>{
	let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data())
        if(change.type == 'added'){
        
		let electricitydemand = change.doc.data()["eledem"];
        document.getElementById("eledem").innerHTML = electricitydemand; 
        }
    })
    console.log(changes);})

headem.onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            console.log(change.doc.data())
            if(change.type == 'added'){
            
            let heatingdemand = change.doc.data()["headem"];
            document.getElementById("headem").innerHTML = heatingdemand; 
            }
    })
     console.log(changes);})

clurad.onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            console.log(change.doc.data())
            if(change.type == 'added'){
            
            let clusterradius = change.doc.data()["clurad"];
            document.getElementById("clurad").innerHTML = clusterradius; 
            }
    })
     console.log(changes);})

avcale.onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            console.log(change.doc.data())
            if(change.type == 'added'){
            
            let availablecablinglength = change.doc.data()["avcale"];
            document.getElementById("avcale").innerHTML = availablecablinglength; 
            }
    })
     console.log(changes);})

pvcapa.onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            console.log(change.doc.data())
            if(change.type == 'added'){
            
            let pvcapacity = change.doc.data()["pvcapa"];
            document.getElementById("pvcapa").innerHTML = pvcapacity; 
            }
    })
     console.log(changes);})

wincap.onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            console.log(change.doc.data())
            if(change.type == 'added'){
            
            let windcapacity = change.doc.data()["wincap"];
            document.getElementById("wincap").innerHTML = windcapacity; 
            }
    })
     console.log(changes);})

elheca.onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            console.log(change.doc.data())
            if(change.type == 'added'){
            
            let electricheatercapacity = change.doc.data()["elheca"];
            document.getElementById("elheca").innerHTML = electricheatercapacity; 
            }
    })
     console.log(changes);})

batcap.onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            console.log(change.doc.data())
            if(change.type == 'added'){
            
            let batterycapactiy = change.doc.data()["batcap"];
            document.getElementById("batcap").innerHTML = batterycapactiy; 
            }
    })
     console.log(changes);})

ensyma.onSnapshot(snapshot =>{
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            console.log(change.doc.data())
            if(change.type == 'added'){
            
            let energysystemmass = change.doc.data()["ensyma"];
            document.getElementById("ensyma").innerHTML = energysystemmass; 
            }
    })
     console.log(changes);})