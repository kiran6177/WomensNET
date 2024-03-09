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
