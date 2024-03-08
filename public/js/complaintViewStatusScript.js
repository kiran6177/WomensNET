const complaintStatus =document.getElementById('compstatus');
const complaintError =document.getElementById('compErr')
const updateBox =document.getElementById('updateBox');compErr
const updateError =document.getElementById('updateErr')
const complaintViewReg= document.getElementById('complaintViewReg')

function validateStatusBox() {
    const statusVal = complaintStatus.value

    if (statusVal.trim() === "") {
         complaintError.style.display = "block"
         complaintError.innerHTML = "Select a Complaint Status !"
    } else {
         complaintError.style.display = "none";
         complaintError.innerHTML = ""
    }
}

function validateUpdateBox() {
    const updateVal = complaintStatus.value

    if (updateVal .trim() === "") {
          updateError.style.display = "block"
          updateError.innerHTML = "Type Updates on the case!"
    } else {
          updateError.style.display = "none";
          updateError.innerHTML = ""
    }
}

complaintStatus.addEventListener('blur', validateStatusBox);
updateBox .addEventListener('blur', validateUpdateBox);


complaintViewReg.addEventListener('submit',function(e){

    validateStatusBox();
    validateUpdateBox();

    if(complaintError.innerHTML ||  updateError.innerHTML){
        e.preventDefault();
    }
})