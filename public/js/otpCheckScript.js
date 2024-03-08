const otpCheckTag = document.getElementById('otpCheck')
const otpError = document.getElementById('otperr');
const otpCheckForm = document.getElementById('otpCheckForm')


function validateOtp() {
  
    const otpval = otpCheckTag.value;

    const otpPattern = /^(?!0)(?![\s!@#$%^&*()-+=_])[0-9]{6}$/;
    
    if (otpval.trim() === "") {
        otpError.style.display = "block"
        otpError.innerHTML = "Plese Enter OTP."
    }
    else if (!otpPattern.test(otpval)) {

        otpError.style.display = "block"
        otpError.innerHTML = "Invalid OTP Format ! "

    } else {
        otpError.style.display = "none";
        otpError.innerHTML = ""
    }
}



otpCheckTag.addEventListener('blur', validateOtp)



otpCheckForm.addEventListener('submit', function (e) {
    validateOtp()

    if (otpError.innerHTML) {
        e.preventDefault()
    }
})