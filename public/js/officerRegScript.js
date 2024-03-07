const officerRegForm = document.getElementById('officerRegForm')
const nameid = document.getElementById('name')
const nameError = document.getElementById('nameerr')
const designation = document.getElementById('designation')
const designationError = document.getElementById('designationerr')
const currentLocation = document.getElementById('currentloc')
const currentlocError = document.getElementById('currentlocerr')
const imageField = document.getElementById('profileimg')
const imageError = document.getElementById('profileimgerr')
const mobileid = document.getElementById('mobile')
const mobileError = document.getElementById('mobileerr')
const emailid = document.getElementById('email')
const emailError = document.getElementById('emailerr')
const identityimage = document.getElementById('identityimg')
const identityimageError = document.getElementById('identityimgerr')
const housedetails = document.getElementById('housedetails')
const houseError = document.getElementById('houseerr')
const district = document.getElementById('district')
const districtError = document.getElementById('districterr')
const state = document.getElementById('state');
const stateError = document.getElementById('stateerr');
const country = document.getElementById('country');
const countryError = document.getElementById('countryerr');
const password = document.getElementById('password');
const passwordError = document.getElementById('passworderr');
const confirmPassword = document.getElementById('cpassword');
const confirmpasswordError = document.getElementById('cpassworderr');


function namevalidate() {

    const namePattern = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/

    const nameval = nameid.value
    if (!namePattern.test(nameval)) {
        nameError.style.display = "block"
        nameError.innerHTML = "Please Enter a valid Name."
    }
    else {
        nameError.style.display = "none"
        nameError.innerHTML = ""
    }
}

function designationValidate() {

    const designationPattern = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/

    const designationval = designation.value
    if (!designationPattern.test(designationval)) {
        designationError.style.display = "block"
        designationError.innerHTML = "Please Enter a valid Designation."
    }
    else {
        designationError.style.display = "none"
        designationError.innerHTML = ""
    }
}

function currentLocationValidate() {

    const currentPattern = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/

    const currentVal = currentLocation.value
    if (!currentPattern.test(currentVal)) {
        currentlocError.style.display = "block"
        currentlocError.innerHTML = "Please Enter a valid Location."
    }
    else {
        currentlocError.style.display = "none"
        currentlocError.innerHTML = ""
    }
}


function validateImage() {
    const val = imageField.value;
    var imageRegex = /\.(jpg|jpeg|png|gif)$/i;

    if (val.trim() === "") {

        imageError.style.display = "block"
        imageError.innerHTML = "Upload an image"

    } else if (!imageRegex.test(val)) {
        imageError.style.display = "block"
        imageError.innerHTML = "only .jpg ,.jpeg, .png ,.gif accepted"

    } else {
        imageError.style.display = "none"
        imageError.innerHTML = ""
    }
}


function mobValidate() {
    const mobval = mobileid.value
    const mobregex = /^(?!0{10})[6789]\d{9}$/;

    if (!mobregex.test(mobval)) {
        mobileError.style.display = "block"
        mobileError.innerHTML = "Please Enter a valid Mobile Number."
    }
    else if (mobval.length < 10 || mobval.length > 10) {
        mobileError.style.display = "block"
        mobileError.innerHTML = "Please Enter atleast 10 digits."
    }
    else {
        mobileError.style.display = "none"
        mobileError.innerHTML = ""
    }
}

function emailValidate() {

    const emailval = emailid.value
    const emailpattern = /^([a-zA-Z][a-zA-Z0-9._-]*)@(gmail\.com|yahoo\.com|outlook\.com)$/



    if (emailval.trim() === "") {

        emailError.style.display = "block"
        emailError.innerHTML = "Enter a E-mail id !"

    } else if (!emailpattern.test(emailval)) {
        emailError.style.display = "block"
        emailError.innerHTML = "Invalid Format!! Enter a valid E-mail address"
    } else {
        emailError.style.display = "none"
        emailError.innerHTML = ""
    }
}


function validateIdProof() {
    const idVal = identityimage.value;
    var imageRegex = /\.(jpg|jpeg|png)$/i;


    if (idVal.trim() === "") {

        identityimageError.style.display = "block"
        identityimageError.innerHTML = "Upload your ID Proof!"

    } else if (!imageRegex.test(idVal)) {

        identityimageError.style.display = "block"
        identityimageError.innerHTML = "Only jpg, jpeg and png formats accepted"
    }
    else {
        identityimageError.style.display = "none"
        identityimageError.innerHTML = ""
    }
}



function validateHouse() {
    const regex = /^[a-zA-Z0-9][a-zA-Z0-9\s.,#-]*$/
    const addressval = housedetails.value

    if (!regex.test(addressval)) {
        houseError.style.display = "block"
        houseError.innerHTML = "Please Enter a valid Name."
    } else {
        houseError.style.display = "none"
        houseError.innerHTML = ""
    }
}


function districtValidate() {

    const currentPattern = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/

    const currentDistVal = district.value
    if (!currentPattern.test(currentDistVal)) {
        districtError.style.display = "block"
        districtError.innerHTML = "Please Enter a valid District Name."
    }
    else {
        districtError.style.display = "none"
        districtError.innerHTML = ""
    }
}


function stateValidate() {

    const currentStatePattern = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/

    const currentStateVal = state.value
    if (!currentStatePattern.test(currentStateVal)) {
        stateError.style.display = "block"
        stateError.innerHTML = "Please Enter a valid State Name."
    }
    else {
        stateError.style.display = "none"
        stateError.innerHTML = ""
    }
}


function countryValidate() {

    const currentCountryPattern = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/

    const currentCountryVal = state.value
    if (!currentCountryPattern.test(currentCountryVal)) {
        countryError.style.display = "block"
        countryError.innerHTML = "Please Enter a valid Country Name."
    }
    else {
        countryError.style.display = "none"
        countryError.innerHTML = ""
    }
}

function passValidate(){
    const passval = password.value
    const alpha = /[a-zA-Z]/
    const digit = /\d/

    
    if(passval.length < 8)
    {   
       passwordError.style.display = "block"
       passwordError.innerHTML = "Must have atleast 8 characters"
    }
    else if(!alpha.test(passval) || !digit.test(passval) )
    {
       passwordError.style.display = "block"
       passwordError.innerHTML = "Should contain Numbers and Alphabets!!"
    }
    else{
        
       passwordError.style.display = "none"
       passwordError.innerHTML = ""
    }
}

function confirmpassValidate(){
    const passval = confirmPassword.value
    const alpha = /[a-zA-Z]/
    const digit = /\d/

    
    if(passval.length < 8)
    {   
       confirmpasswordError.style.display = "block"
       confirmpasswordError.innerHTML = "Must have atleast 8 characters"
    }
    else if(!alpha.test(passval) || !digit.test(passval) )
    {
       confirmpasswordError.style.display = "block"
       confirmpasswordError.innerHTML = "Should contain Numbers and Alphabets!!"
    }
    else{
        
       confirmpasswordError.style.display = "none"
       confirmpasswordError.innerHTML = ""
    }
}



nameid.addEventListener('blur', namevalidate)
designation.addEventListener('blur', designationValidate)
currentLocation.addEventListener('blur', currentLocationValidate)
imageField.addEventListener("blur", validateImage)
mobileid.addEventListener('blur', mobValidate)
emailid.addEventListener('blur', emailValidate)
identityimage.addEventListener('blur', validateIdProof)
housedetails.addEventListener('blur', validateHouse)
district.addEventListener('blur', districtValidate)
state.addEventListener('blur', stateValidate)
country.addEventListener('blur', countryValidate)
password.addEventListener('blur', passValidate)
confirmPassword.addEventListener('blur',confirmpassValidate)



officerRegForm.addEventListener('submit', function (e) {
    namevalidate();
    designationValidate();
    currentLocationValidate();
    validateImage();
    mobValidate();
    emailValidate();
    validateIdProof();
    validateHouse();
    districtValidate();
    stateValidate();
    countryValidate();
    passValidate();
    confirmpassValidate();
    


    if (nameError.innerHTML || designationError.innerHTML || currentlocError.innerHTML || imageError.innerHTML || emailError.innerHTML
       || mobileError.innerHTML|| houseError.innerHTML || districtError.innerHTML || stateError.innerHTML || countryError.innerHTML ||  passwordError.innerHTML ||confirmpasswordError.innerHTML) {
        e.preventDefault()
    }
})