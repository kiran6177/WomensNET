

const acknowledgementNumber = document.getElementById('acknowledgementNo')
const acknowledgeError = document.getElementById('acknowledgeErr')
const statusForm = document.getElementById('statusform')



function validateAcknowledgement(){
console.log("hiii");
    const acknowledgeVal = acknowledgementNumber.value
console.log(acknowledgeVal);
    if (acknowledgeVal .trim() === "") {
        acknowledgeError.style.display = "block"
        acknowledgeError.innerHTML = "Please type your Unique Acknowledge Number !"
    } else {
        acknowledgeError.style.display = "none";
        acknowledgeError.innerHTML = ""
    }
}

acknowledgementNumber.addEventListener('blur',validateAcknowledgement);



statusForm.addEventListener('submit', function (e) {
    validateAcknowledgement()

    if (acknowledgeError.innerHTML) {
        e.preventDefault()
    }
})