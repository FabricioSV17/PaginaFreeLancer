const MenuAcercaDe = document.getElementById('MenuAcerca');
const btnMenuAcercaDe = document.getElementById('MenuAcercaDe');
btnMenuAcercaDe.addEventListener('click',()=>{
    MenuAcercaDe.classList.toggle('active');
});
// Efecto Scroll
const EncabezadoAcercaDe = document.querySelector('.AcercaDe');
window.addEventListener('scroll',()=>{
    if(window.scrollY > 50){
        EncabezadoAcercaDe.classList.add('scroll');
    }else{
        EncabezadoAcercaDe.classList.remove('scroll');
    }
})
