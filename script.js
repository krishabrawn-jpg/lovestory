const startDate = new Date("2017-03-06")

const photos = [
"photos/1.jpg",
"photos/2.jpg",
"photos/3.jpg",
"photos/4.jpg",
"photos/5.jpg",
"photos/6.jpg",
"photos/7.jpg",
"photos/8.jpg",
"photos/9.jpg",
"photos/10.jpg"
]

let i = 0

function startLove(){

document.getElementById("start").style.display="none"
document.getElementById("main").style.display="block"

const music = document.getElementById("music")
music.play().catch(()=>{}) // щоб не було помилки на телефоні

startSlideshow()
createHearts()

}

/* таймер */

function updateTimer(){

const now = new Date()

const diff = now - startDate

const days = Math.floor(diff/(1000*60*60*24))
const hours = Math.floor(diff/(1000*60*60))%24
const minutes = Math.floor(diff/(1000*60))%60
const seconds = Math.floor(diff/1000)%60

document.getElementById("timer").innerHTML =
`Мы вместе ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд ❤️`

}

setInterval(updateTimer,1000)

/* слайдшоу (плавніше) */

function startSlideshow(){

const slide = document.getElementById("slide")

slide.src = photos[0]

setInterval(()=>{

i++
if(i>=photos.length){i=0}

slide.style.opacity = 0

setTimeout(()=>{
slide.src = photos[i]
slide.style.opacity = 1
},500)

},3000)

}

/* сердечка */

function createHearts(){

setInterval(()=>{

const heart = document.createElement("div")

heart.innerHTML="❤️"

heart.style.position="fixed"
heart.style.left=Math.random()*100+"%"
heart.style.top="-20px"
heart.style.fontSize="24px"
heart.style.animation="fall 5s linear"

document.body.appendChild(heart)

setTimeout(()=>{
heart.remove()
},5000)

},300)

}

/* анімація падіння */

const style = document.createElement('style')

style.innerHTML = `
@keyframes fall{
to{
transform:translateY(100vh);
opacity:0;
}
}
`

document.head.appendChild(style)