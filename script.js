const menu = document.querySelector(".menu-item")
const cancel = document.querySelector(".cancel-item")
const listitem = document.querySelectorAll("li")
const popitem = document.querySelector(".pop-item")
const content = document.querySelector(".content")

const view = () =>{
    menu.style.display="none"
    for(i=0;i<listitem.length;i++){
        listitem[i].style.display="block"
    }
    content.style.display="none"
    cancel.style.display="block"
}

const hide = () =>{
    menu.style.display="block"
    cancel.style.display="none"
    content.style.display="block"
    for(i=0;i<listitem.length;i++){
        listitem[i].style.display="none"
    }
}

window.addEventListener("resize",()=>{
    if(window.innerWidth>800){
        menu.style.display="none"

        for(i=0;i<listitem.length;i++){
            listitem[i].style.display="inline-block"
        }
    }
    else{
        hide()
    }
})


const housecontent = document.querySelector("#living-house-content")
const kitchencontent = document.querySelector("#new-kitchen-content")
const roomcontent = document.querySelector("#living-room-content")

function house(){
    housecontent.style.display="block"
    kitchencontent.style.display="none"
    roomcontent.style.display="none" 
}
function kitchen(){
    kitchencontent.style.display="block"
    housecontent.style.display="none"
    roomcontent.style.display="none"
}
function room(){
    housecontent.style.display="none"
    kitchencontent.style.display="none"
    roomcontent.style.display="block"
}


const changehome = document.querySelector(".modernhome-changes")
const photos = [
    "https://goodhomes.wwmindia.com/content/2022/jun/infusing-wood-in-this-neutral-themed-home.jpg",
    "https://adhunikinteriors.com/wp-content/uploads/2020/09/interior-9.jpg",
    "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg",
    "https://blog.buyerselect.com/wp-content/uploads/2024/05/organic-modern-interior-design.jpg",
    "image/new.webp"
] 
let index=0
function changephotos(){
    changehome.src = photos[index]
    index = (index + 1) % photos.length
}
setInterval(changephotos , 3000);

const emaildata = document.getElementById("email")
function booking(){
    emaildata.value=""
}