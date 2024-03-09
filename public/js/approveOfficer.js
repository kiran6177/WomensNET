async function approve(id) {
    console.log(id)
  const url = "/admin/approveOfficer";
  postdata = { officerid: id };
  console.log(postdata)
  const response = await fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postdata),
  });
  const data =await response.json()
  console.log(data.message)
  if(response.ok){
    Toastify({
        text:data.message,
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
        setTimeout(()=>{
          window.location.reload()
        },3000)
  }

}
