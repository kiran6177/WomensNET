const complaintStatus =document.getElementById('compstatus');
const complaintError =document.getElementById('compErr')
const updateBox =document.getElementById('updateBox');
const updateError =document.getElementById('updateErr')
const updatebtn = document.getElementById('updatebtn')
const complaint_Id = document.getElementById('complaint_Id')
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
    const updateVal = updateBox.value

    if (updateVal.trim() === "") {
          updateError.style.display = "block"
          updateError.innerHTML = "Type Updates on the case!"
    } else {
          updateError.style.display = "none";
          updateError.innerHTML = ""
    }
}

complaintStatus.addEventListener('blur', validateStatusBox);
updateBox .addEventListener('blur', validateUpdateBox);

async function submitMessage(message,status,complaint_Id){
    try {
        const data = {
            message,
            status,
            complaint_Id
        }
        const res = await fetch('/officer/viewcomplaint',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        const resData = await res.json()
        if(resData.success){
            window.location.reload()
        }else{
            Toastify({
                text:resData.err,
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
    } catch (error) {
        console.log(error.message)
    }
}

updatebtn.addEventListener('click',(e)=>{
    validateStatusBox()
    validateUpdateBox()
    console.log(updateBox.value)
    console.log(complaintStatus.value)
    console.log(complaint_Id.value)
    if(updateError.innerHTML != "" || complaintError.innerHTML != ""){
        e.preventDefault()
    }else{
    submitMessage(updateBox.value,complaintStatus.value,complaint_Id.value)
    }
})