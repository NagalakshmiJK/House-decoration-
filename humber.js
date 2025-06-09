 function showslidermenu(){
    const slidermenu = document.querySelector('.slidermenu')
    slidermenu.style.display='flex'
    const humber = document.querySelector('.humber img')
    humber.style.opacity='0%'
    const content = document.querySelector('.content')
    content.style.display='none'
    const logo2 = document.querySelector('.logo2')
    logo2.style.display='none'
    const cancel = document.querySelector('.cancel')
    cancel.style.left='60%';
    cancel.style.position='absolute';
}

function hideslidermenu(){
    // console.log("hhhi");
    const slidermenu = document.querySelector('.slidermenu')
    slidermenu.style.display='none'
    const humber = document.querySelector('.humber img')
    humber.style.opacity='100%'
    const content = document.querySelector('.content')
    content.style.display='block'
    const logo2 = document.querySelector('.logo2')
    logo2.style.display='flex'
}

function lists(){
    const slidermenu = document.querySelector('.slidermenu')
    slidermenu.style.display='none'
    const humber = document.querySelector('.humber img')
    humber.style.opacity='100%'
    const content = document.querySelector('.content')
    content.style.display='block'
        const logo2 = document.querySelector('.logo2')
    logo2.style.display='flex'
}