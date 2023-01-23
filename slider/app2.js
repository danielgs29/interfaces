const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const color=document.getElementById("color");
const color2=document.getElementById("div2");
const t1=document.getElementById("texto1");
const t2=document.getElementById("texto2");
const tt=document.getElementById("tt");
const tt2=document.getElementById("tt2");
const tt3=document.getElementById("tt3");
const tt4=document.getElementById("tt4");
const color3=document.getElementById("div2");

const sliderHeight = sliderContainer.clientHeight

let infos=[];
let index=1;

class info{
    constructor(texto1,texto2,imagen,color){
        this.texto1=texto1;
        this.texto2=texto2;
        this.imagen=imagen;
        this.color=color
    }
}

let info1= new info("Pollo","volador",'images/photo-1.jpg',"red");
infos.push(info1);
let info2= new info("Flor","extraña",'images/photo-2.jpg',"black");
infos.push(info2);
let info3= new info("Pollo","volador",'images/photo-1.jpg',"red");
infos.push(info3);

function changeSlide(cambio){
    if(cambio=="up"){
        index++
        color.style.backgroundColor=`${infos[index].color}`
        console.log(`${infos[index].color}`)
        t1.textContent=`${infos[index].texto1}`
        t2.textContent=`${infos[index].texto2}`
    }
    if(cambio=="down"){
        index--;
        color2.style.backgroundColor=`${infos[index].color}`
        tt.textContent=`${infos[index].texto1}`
        tt2.textContent=`${infos[index].texto2}`
    }
    slideRight.style.transform = `translateY(-${sliderHeight}px)`
    slideLeft.style.transform = `translateY(${sliderHeight}px)`
}

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

window.addEventListener("load",()=>{ color3.style.backgroundColor=`${infos[1].color}`
console.log(`${infos[1].color}`)
tt3.textContent=`${infos[1].texto1}`
tt3.textContent=`${infos[1].texto2}`
index==0})