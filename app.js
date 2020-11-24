//movement animation

const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker ');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.info h3');
const sizes = document.querySelector(".sizes");


//moving animation event

container.addEventListener('mousemove', (e) => {
    //console.log(e.pageX, e.pageY); //when hover gives the position of the whole page 

    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    console.log(card.style.transform);




});



///stop animating and make the container rest
container.addEventListener('mouseenter', (e) => {
    card.style.transistion = 'none';

    //push the text forward
    title.style.transform = "translateZ(80px)";
    sneaker.style.transform = "translateZ(200px) ";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});


container.addEventListener('mouseleave', (e) => {

    card.style.transition = "all 0.4s ease";        //smooth pause
    card.style.transform = 'rotateY(0deg)', 'rotateX(0deg)';
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});