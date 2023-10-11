const Menu = document.getElementById('Menu');
const BarMenu = document.getElementById('BarMenu');
BarMenu.addEventListener('click',()=>{
    Menu.classList.toggle('active');
});
// Efecto Parallax
const informacionHero = document.getElementById('ParallaxPresentacion');
const ImagenHero = document.getElementById('ParallaxImagen');
window.addEventListener('scroll',()=>{
    let ventana = window.scrollY;
    if(window.screen.width > 300 && window.screen.width <400){
        informacionHero.style.transform = `translateY(-${ventana/9}%)`;
        ImagenHero.style.transform=`translateY(-${ventana/4}%)`
    }else if(window.screen.width > 400 && window.screen.width < 800){
        informacionHero.style.transform = `translateY(${ventana/7}%)`;
    }else if(window.screen.width > 800){
        ImagenHero.style.transform=`translateY(-${ventana/30}%)`
        informacionHero.style.transform = `translateY(${ventana/7}%)`;
    
    }
});