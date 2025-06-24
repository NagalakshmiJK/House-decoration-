
function showslidermenu(){
    const slidermenu = document.querySelector('.slidermenu')
    slidermenu.style.display='block'
    const content = document.querySelector('.content')
    content.style.display='none'
    const logo2 = document.querySelector('.logo2')
    logo2.style.display='none'
    const humber = document.querySelector('.humber')
    humber.setAttribute("style","display : none !important")
}
function hideslidermenu(){
    const slidermenu = document.querySelector('.slidermenu')
    slidermenu.style.display='none'
    const content = document.querySelector('.content')
    content.style.display='block'
    const logo2 = document.querySelector('.logo2')
    logo2.style.display='flex'
    const humber = document.querySelector('.humber')
    humber.style.display='flex'
}

function lists(){
    const slidermenu = document.querySelector('.slidermenu')
    slidermenu.style.display='none'
    const content = document.querySelector('.content')
    content.style.display='block'
    const logo2 = document.querySelector('.logo2')
    logo2.style.display='flex'
    const humber = document.querySelector('.humber')
    humber.style.display='flex'
}