const menuOpen = document.querySelector('#imenu')
const menu = document.getElementById("menuB")

menuOpen.addEventListener('click', ()=>{
   
    if(menu.style.display == 'block'){

        menu.style.display = 'none'
    }else{
        menu.style.display = 'block'
    }
   console.log("testando")
})

