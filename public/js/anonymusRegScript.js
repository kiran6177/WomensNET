const selectBox = document.getElementById('selectBox')
const selectError = document.getElementById('selectErr')
const anonymousReg = document.getElementById('anonymousReg')
const date = document.getElementById('date')
const dateErr = document.getElementById('dateerr')
const descriptionBox = document.getElementById('descriptionBox')
const descriptionerr = document.getElementById('descriptionerr');
const evidenceUpload = document.getElementById('evidenceUpload')
const evidenceErr = document.getElementById('evidenceErr')
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
selectOfficer.addEventListener('blur', validateOfficer);



anonymousReg.addEventListener('submit', function (e) {
    validateSelectBox();
    validateDate();
    validateDescriptionBox();
    validateEvidence();
    validateOfficer();

    if (selectError.innerHTML || dateErr.innerHTML || descriptionerr.innerHTML || evidenceErr.innerHTML || officerErr.innerHTML) {
        e.preventDefault()
    }
})