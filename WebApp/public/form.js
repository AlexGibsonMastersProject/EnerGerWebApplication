const paramForm = document.querySelector(".signupform");
const energytypeinput = document.querySelector(".energytypeinput");
const energyamountinput = document.querySelector(".energyamountinput");
const timeframeinput = document.querySelector(".timeframeinput");
const eledeminput = document.querySelector(".eledeminput");
const heademinput = document.querySelector(".heademinput");
const cluradinput = document.querySelector(".cluradinput");
const avcaleinput = document.querySelector(".avcaleinput");
const pvcapainput = document.querySelector(".pvcapainput");
const wincapinput = document.querySelector(".wincapinput");
const elhecainput = document.querySelector(".elhecainput");
const batcapinput = document.querySelector(".batcapinput");
const ensymainput = document.querySelector(".ensymainput");
const submitform = document.querySelector(".submitform");

submitform.addEventListener('click', (e) => {
    e.preventDefault();
    db.collection('energytype').doc('aAYG5J0RVWrvRnohqlsM').set({
        energytype: energytypeinput.value,});
    db.collection('energyamount').doc('Ueygw2xSADKUpeFEvz7R').set({
        energyamount: energyamountinput.value,});
    db.collection('energytime').doc('39gcXcRTw8vdoMxMvuoq').set({
        energytime: timeframeinput.value,});
    db.collection('eledem').doc('dc150JpuYsyAGdLzMCP4').set({
        eledem: eledeminput.value,});
    db.collection('headem').doc('Ds5toQN03R253la5prlr').set({
            headem: heademinput.value,});
    db.collection('clurad').doc('C3tFcmpPf7TXMEzTtvha').set({
            clurad: cluradinput.value,});
    db.collection('avcale').doc('KkcjEupxxzACWGsWgwPj').set({
            avcale: avcaleinput.value,});
    db.collection('pvcapa').doc('H9S7ACm6m430GdABPCOg').set({
            pvcapa: pvcapainput.value,});
    db.collection('wincap').doc('IU9Bo0AUublENB2WED1P').set({
            wincap: wincapinput.value,});
    db.collection('elheca').doc('xONvi873ahPet3lN3Onl').set({
            elheca: elhecainput.value,});
    db.collection('batcap').doc('65f7TuJkV30uCKk8ccLp').set({
            batcap: batcapinput.value,});
    db.collection('ensyma').doc('mK2xkhhBxUAj8MqIynco').set({
            ensyma: ensymainput.value,
    }).then(() => {
        document.getElementById("submitform").style.backgroundColor = "#2C423C";
        document.getElementById("accountbutton").innerHTML = "Success";
    })
});

