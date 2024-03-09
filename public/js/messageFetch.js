const sendBtn = document.getElementById("sendbtn");
sendBtn.addEventListener("click", async () => {
  try {
    console.log('entered event')
    const url = "/sendMessage";
    const postData = {
      message: document.getElementById("message").value,
      complaintId: document.getElementById("complaintId").value,
    };
    const response = await fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
    console.log(response);
    const data=await response.json()
    if(response.status === 200){
        window.location.reload()
    }
  } catch (error) {
    console.error(error);
  }
});

async function suspendComplaint(complaint_Id){
  try {
    const res = await fetch(`/suspendcomplaint?id=${complaint_Id}`)
    const data = await res.json()
    if(data.success){
      Toastify({
        text:data.success,
        duration: 3000,
        newWindow: true,
        gravity: "top", 
        position: "center",
        stopOnFocus: true, 
        style: {
            background: "rgb(28, 148, 246)",
        },
        offset:{
            y:80
        }
        }).showToast();
        setTimeout(()=>{
          window.location.reload()
        },3000)
    }else{
      Toastify({
        text:data.err,
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

const suspend = document.getElementById('suspend')
if(suspend){
  suspend.addEventListener('click',()=>{
    const complaint_Id = document.getElementById("complaintId").value
    suspendComplaint(complaint_Id)
  })
}