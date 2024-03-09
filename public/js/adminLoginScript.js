

const email = document.getElementById('email')
const emailerr = document.getElementById('emailerr')
const regform = document.getElementById('logform')
const password = document.getElementById('password')
const passworderr = document.getElementById('passworderr')


function validateEmail() {
    const emailval = email.value;

    const emailpattern = /^([a-zA-Z][a-zA-Z0-9._-]*)@(gmail\.com|yahoo\.com|outlook\.com)$/;
    if (emailval.trim() === "") {
        emailerr.style.display = "block"
        emailerr.innerHTML = "Plese Enter a e-mail."
    }
    else if (!emailpattern.test(emailval)) {

        emailerr.style.display = "block"
        emailerr.innerHTML = "Invalid Email ! "

    } else {
        emailerr.style.display = "none";
        emailerr.innerHTML = ""
    }
}



function validatePassword() {
    const passval = password.value
    const alpha = /[a-zA-Z]/
    const digit = /\d/
    if (passval.length < 8) {
        passworderr.style.display = "block"
        passworderr.innerHTML = "Must have atleast 8 characters"
    } 
    else if (!alpha.test(passval) || !digit.test(passval)) {
        passworderr.style.display = "block"
        passworderr.innerHTML = "Should contain Numbers and Alphabets!!"
    }
    else {

        passworderr.style.display = "none"
        passworderr.innerHTML = ""
    }
}


email.addEventListener('blur', validateEmail)
password.addEventListener('blur', validatePassword)



regform.addEventListener('submit', function (e) {
    validateEmail()
    validatePassword()

    if (emailerr.innerHTML || passworderr.innerHTML) {
        e.preventDefault()
    }
})

const err = document.getElementById('err')
console.log(err)
if(err){
    Toastify({
    text:err.value,
    duration: 3000,
    newWindow: true,
    gravity: "top", 
    position: "center",
    stopOnFocus: true, 
    style: {
        background: "red",
    },
    offset:{
        y:80
    }
    }).showToast();
}