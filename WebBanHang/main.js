// --------------------------------------------- Đn - Đk
var switch_dkdn = document.querySelectorAll('.dkdn__switch-btn')
var btn_dkdn = document.querySelectorAll('.header__navbar-item--strong')
var form_dkdn = document.querySelector(".modal")
var back = document.querySelectorAll(".dkdn__btn--back")
var form_parent = document.querySelectorAll(".dkdn")


function Doi_dk_dn(){
    form_parent[0].style.display = "none";
    form_parent[1].style.display = "block";
}

function Doi_dn_dk(){
    form_parent[1].style.display = "none";
    form_parent[0].style.display = "block";
}

function Hien_dkdn(){
    form_dkdn.style.display = "flex";

}

function TroLai(){
    form_dkdn.style.display = "none";

}

btn_dkdn[0].addEventListener('click', Hien_dkdn)
btn_dkdn[1].addEventListener('click', Hien_dkdn)

switch_dkdn[0].addEventListener('click', Doi_dk_dn)
switch_dkdn[1].addEventListener('click', Doi_dn_dk)

back[0].addEventListener('click', TroLai)
back[1].addEventListener('click', TroLai)

// ------------------------------------------------ Danh Muc
var ItemDanhMuc = document.querySelectorAll('.category-item')

function active_click(){
    // Xóa class active khỏi tất cả các mục
    ItemDanhMuc.forEach(function(item) {
        item.classList.remove('category-item--active');
    });
    this.classList.add('category-item--active');
}
for (var i = 0; i< ItemDanhMuc.length; i++){
    ItemDanhMuc[i].addEventListener('click', active_click)

}
// ----------------------------------------------- Nút
var ItemHome = document.querySelectorAll('.home-filter-btn')

function active_btn(){
    // Xóa class active khỏi tất cả các mục
    ItemHome.forEach(function(item) {
        item.classList.remove('btn--primary');
    });
    this.classList.add('btn--primary');
}
for (var i = 0; i< ItemHome.length; i++){
    ItemHome[i].addEventListener('click', active_btn)

}
// ----------------------------------------------- Search
var ItemSearch = document.querySelectorAll('.header__search-option-item')

function active_search(){
    // Xóa class active khỏi tất cả các mục
    ItemSearch.forEach(function(item) {
        item.classList.remove('header__search-option-item-active');
    });
    this.classList.add('header__search-option-item-active');
}
for (var i = 0; i< ItemSearch.length; i++){
    ItemSearch[i].addEventListener('click', active_search)

}
// ----------------------------------------------- Btn Page
var ItemPage = document.querySelectorAll('.pagination-item')

function active_page(){
    // Xóa class active khỏi tất cả các mục
    ItemPage.forEach(function(item) {
        item.classList.remove('pagination-item--active');
    });
    this.classList.add('pagination-item--active');
}
for (var i = 0; i< ItemPage.length; i++){
    ItemPage[i].addEventListener('click', active_page)

}
// --------------------------------------------------- Cart delete

var ItemCartDelete = document.querySelectorAll('.header__cart-item-remove')
var ItemQuan = document.querySelectorAll('.header__cart-item-quan')

function active_cartdelete(){
    var ItemCart = this.parentElement.parentElement.parentElement;
    if (ItemCart){
        ItemCart.style.display = "none";
    }
}



for (var i = 0; i< ItemQuan.length; i++){
    var SoLuong = ItemQuan[i].innerText;
    if (SoLuong > 1){
       
        ItemCartDelete[i].addEventListener('click', function(){
            SoLuong--
            ItemQuan[i].innerText = SoLuong
        })
        
    }
    else{
        
        
        ItemCartDelete[i].addEventListener('click', active_cartdelete)
        
    }
}




