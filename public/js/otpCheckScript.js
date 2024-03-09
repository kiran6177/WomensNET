const otpCheckTag = document.getElementById("otpCheck");
const otpError = document.getElementById("otperr");
const otpCheckForm = document.getElementById("otpCheckForm");
const timerview = document.getElementById("timerview");
const resendbtn = document.getElementById("resendbtn");

let seconds = 60;

function showtime() {
  timerview.style.display = "block";
  timerview.innerHTML = `00 : ${seconds}`;
}

function timer() {
  showtime();
  if (seconds > 0) {
    seconds--;
    setTimeout(timer, 1000);
  } else {
    timerview.style.display = "none";
    resendbtn.style.display = "block";
  }
}

if (document.cookie) {
  let cookies = document.cookie.split(";");
  cookies.forEach((cookie) => {
    if (cookie.startsWith("timer=")) {
      console.log("hi");
      if (cookie.startsWith("timer=")) {
        timer();
      }
    }
  });
} else {
//   resendbtn.style.display = "block";
//   resendbtn.addEventListener('click',()=>{
//     timer()
//     const resendFetch = await fetch('/')
//   })
}

const err = document.getElementById('err')
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

function validateOtp() {
  const otpval = otpCheckTag.value;

  const otpPattern = /^(?!0)(?![\s!@#$%^&*()-+=_])[0-9]{6}$/;

  if (otpval.trim() === "") {
    otpError.style.display = "block";
    otpError.innerHTML = "Plese Enter OTP.";
  } else if (!otpPattern.test(otpval)) {
    otpError.style.display = "block";
    otpError.innerHTML = "Invalid OTP Format ! ";
  } else {
    otpError.style.display = "none";
    otpError.innerHTML = "";
  }
}

otpCheckTag.addEventListener("blur", validateOtp);

otpCheckForm.addEventListener("submit", function (e) {
  validateOtp();

  if (otpError.innerHTML) {
    e.preventDefault();
  }
});
