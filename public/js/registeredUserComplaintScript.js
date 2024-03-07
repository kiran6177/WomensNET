const selectBox = document.getElementById('selectBox')
const selectError = document.getElementById('selectErr')
const regForm = document.getElementById('logForm2')
const date = document.getElementById('date')
const dateErr = document.getElementById('dateerr')

const descriptionBox = document.getElementById('descriptionBox')
const descriptionerr = document.getElementById('descriptionerr');
const evidenceUpload = document.getElementById('evidenceUpload')
const evidenceErr = document.getElementById('evidenceErr')

const nameid = document.getElementById('name')
const nameError = document.getElementById('nameerr')
const emailid = document.getElementById('email')
const emailError = document.getElementById('emailerr')
const mobileid = document.getElementById('mobile')
const mobileError = document.getElementById('mobileerr')

const housedetails = document.getElementById('housedetails')
const houseError = document.getElementById('houseerr')
const district = document.getElementById('district')
const districtError = document.getElementById('districterr')
const state = document.getElementById('state');
const stateError = document.getElementById('stateerr');
const country = document.getElementById('country');
const countryError = document.getElementById('countryerr');

const selectOfficer = document.getElementById('officerSelect')
const officerErr = document.getElementById('officerErr')



function validateSelectBox() {
    const selectVal = selectBox.value

    if (selectVal.trim() === "") {
        selectError.style.display = "block"
        selectError.innerHTML = "Plese Select a crime type !"
    } else {
        selectError.style.display = "none";
        selectError.innerHTML = ""
    }
}



function validateDate() {
    const dateval = date.value;

    const datePattern = /^(?:0000|(?:(?:19|20)\d{2}))-(?:0[1-9]|1[0-2]|00)-(?:0[1-9]|[12][0-9]|3[01]|00)$/

    if (dateval.trim() === "") {
        dateErr.style.display = "block"
        dateErr.innerHTML = "Plese Select date."
    }
    else if (!datePattern.test(dateval)) {

        dateErr.style.display = "block"
        dateErr.innerHTML = "Invalid Date ! "

    } else {
        dateErr.style.display = "none";
        dateErr.innerHTML = ""
    }
}




function validateDescriptionBox() {
    const descriptionVal = descriptionBox.value

    if (descriptionVal.trim() === "") {
        descriptionerr.style.display = "block"
        descriptionerr.innerHTML = "Plese Enter a Description of Your Complaint !"
    } else {
        descriptionerr.style.display = "none";
        descriptionerr.innerHTML = ""
    }
}



function validateEvidence() {
    const evidenceval = evidenceUpload.value;
    var evidenceRegex = /^.*\.(jpg|jpeg|png|gif|bmp|svg|webp|tiff|pdf|mp3|wav|ogg|aac|flac|wma|mp4|mkv|avi|mov|wmv|flv|webm|mpeg|3gp|gifv|ogv|ogg|opus|amr|aif|aiff|alac|ape|m4a|m4b|m4p|aac|ac3|act|au|dss|dvf|flac|gsm|iklax|ivs|m4a|m4b|mmf|mpc|msv|nmf|oga|mogg|opus|ra|rm|raw|sln|tta|vox|wav|wma|wv)$/;


    if (evidenceval.trim() === "") {

        evidenceErr.style.display = "block"
        evidenceErr.innerHTML = "Upload Evidence!"

    } else if (!evidenceRegex.test(evidenceval)) {

        evidenceErr.style.display = "block"
        evidenceErr.innerHTML = "Only valid file formats accepted"
    }
    else {
        evidenceErr.style.display = "none"
        evidenceErr.innerHTML = ""
    }
}

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

function validateOfficer() {
    const officerVal = selectOfficer.value

    if (officerVal.trim() === "") {
        officerErr.style.display = "block"
        officerErr.innerHTML = "Plese Select a Officer !"
    } else {
        officerErr.style.display = "none";
        officerErr.innerHTML = ""
    }
}


selectBox.addEventListener('blur', validateSelectBox);
date.addEventListener('blur', validateDate);
descriptionBox.addEventListener('blur', validateDescriptionBox);
evidenceUpload.addEventListener('blur', validateEvidence);
nameid.addEventListener('blur', namevalidate)
emailid.addEventListener('blur', emailValidate)
mobileid.addEventListener('blur', mobValidate)
housedetails.addEventListener('blur', validateHouse)
district.addEventListener('blur', districtValidate)
state.addEventListener('blur', stateValidate)
country.addEventListener('blur', countryValidate)

selectOfficer.addEventListener('blur', validateOfficer);



regForm.addEventListener('submit', function (e) {
    validateSelectBox();
    validateDate();
    validateDescriptionBox();
    validateEvidence();
    namevalidate();
    emailValidate();
    mobValidate();
    validateHouse();
    districtValidate();
    stateValidate();
    countryValidate();
    validateOfficer();

    if (selectError.innerHTML || dateErr.innerHTML || descriptionerr.innerHTML ||
        evidenceErr.innerHTML || nameError.innerHTML || emailError.innerHTML || mobileError.innerHTML
        || houseError.innerHTML || districtError.innerHTML || stateError.innerHTML || countryError.innerHTML || officerErr.innerHTML) {
        e.preventDefault()
    }
})