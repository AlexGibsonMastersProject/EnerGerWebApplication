//form
const signupForm = document.querySelector(".signupform");
const accountName = document.querySelector(".accountname");
const accountPassword = document.querySelector(".accountpassword");
const accountPeople = document.querySelector(".accountpeople");
const accountMoney = document.querySelector(".accountmoney");
const accountApp = document.querySelector(".accountapp");
const accountLoc = document.querySelector(".accountloc");
const submit = document.querySelector(".submitbutton");
const loginslider = document.querySelector(".loginslider")
const signupslider = document.querySelector(".signupslider")

submit.addEventListener('click', (e) => {
    e.preventDefault();
    db.collection('signupaccount').doc().set({
        accountName: accountName.value, 
        accountPassword: accountPassword.value,
        accountPeople: accountPeople.value,
        accountMoney: accountMoney.value,
        accountApp: accountApp.value,
        accountLoc: accountLoc.value,
    }).then(() => {
        document.getElementById("submitbutton").style.backgroundColor = "#2C423C";
        document.getElementById("nowlogintext").style.display = "block";
        document.getElementById("accountbutton").innerHTML = "Success";
    })
});

loginslider.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("loginslider").style.backgroundColor = "black";
    document.getElementById("loginslidertext").style.color = "white";
    document.getElementById("signupslider").style.backgroundColor = "white";
    document.getElementById("signupslidertext").style.color = "black";
    document.getElementById("signupcontent").style.display = "none";
    document.getElementById("logincontent").style.display = "block";
    document.getElementById("accounttitle").innerHTML = "Log in to EnerGer";
    document.getElementById("accountbutton").innerHTML = "Log in";
});

signupslider.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("loginslider").style.backgroundColor = "white";
    document.getElementById("loginslidertext").style.color = "black";
    document.getElementById("signupslider").style.backgroundColor = "black";
    document.getElementById("signupslidertext").style.color = "white";
    document.getElementById("signupcontent").style.display = "block";
    document.getElementById("logincontent").style.display = "none";
    document.getElementById("accounttitle").innerHTML = "Create an Account";
    document.getElementById("accountbutton").innerHTML = "Sign up";
    setTimeout(signupForm.reset(), 2000);
    document.getElementById("submitbutton").style.backgroundColor = "black";
    document.getElementById("nowlogintext").style.display = "none";
});

