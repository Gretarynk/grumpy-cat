const mobileMenu=document.getElementById('mobileMenu');
const burgerMenu=document.getElementById('burgerMenu');

burgerMenu.addEventListener('click',()=>{
    mobileMenu.classList.toggle('active');
})