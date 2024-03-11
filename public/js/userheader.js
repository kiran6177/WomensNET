const leftdrop = document.querySelectorAll('#leftdrop a')
const ham = document.querySelector('#leftdrop i')
ham.addEventListener('click',()=>{
    leftdrop.forEach(el=>{
        if(el.style.display === 'none'){
        el.style.display = 'block'
        }else{
        el.style.display = 'none'
        }
    })
})