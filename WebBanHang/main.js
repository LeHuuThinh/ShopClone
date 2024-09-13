var switch_dkdn = document.querySelector('.dkdn__switch-btn')
var btn_dkdn = document.querySelectorAll('.header__navbar-item--strong')
var form_dkdn = document.querySelector(".modal")



function Hien_dkdn(){
    form_dkdn.style.display = "flex";

}

btn_dkdn[0].addEventListener('click', Hien_dkdn)
btn_dkdn[1].addEventListener('click', Hien_dkdn)
