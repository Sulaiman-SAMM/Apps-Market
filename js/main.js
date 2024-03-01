// ------------- code of 769px nevbar  --------------
let btnMobile = document.getElementById('btnMobile');
let viewMobile = document.getElementById('viewMobile');
let nevbar = document.getElementById('nevbar');

btnMobile.addEventListener('click', function(){
    nevbar.classList.toggle('active');
    viewMobile.classList.toggle('active');
})
viewMobile.addEventListener('click', function(){
    nevbar.classList.remove('active');
    viewMobile.classList.remove('active');
})

// ------------- code of Loading Page --------------
// Entweder  Code
// window.onload = function() {
//     document.querySelector('.loading').classList.add('hide');
// }
// oder disem
window.addEventListener('load', function() {
    document.querySelector('.loading').classList.add('hide');
});

// ------------- code of header  --------------

window.onscroll = function () {
    scrollHeader();

}
let header = document.getElementById('header');

let x = 0;

function scrollHeader(){
    if(window.pageYOffset > x){
        header.classList.add('fixed-header');
    }else {
        header.classList.remove('fixed-header');
    }

}
// ------------- code of Scroll Page   --------------

let links = document.querySelectorAll('a[href^="#"]');

links.forEach(link =>{
    link.addEventListener('click', function(e){
        e.preventDefault();
        let arrt = document.querySelector(this.getAttribute('href'));
        arrt.scrollIntoView({
            behavior:'smooth',
            block:'center'
        })
    })
})

// ------------- code of animation on Page   --------------

let animation = document.querySelectorAll('.animation');
let i = 0;
window.addEventListener('scroll', function(){
    for(i =0; i < animation.length; i++) {
        if( animation[i].getBoundingClientRect().top < window.innerHeight){
            animation[i].classList.add('show');
        }else{
            animation[i].classList.remove('show');
        }
    }
});