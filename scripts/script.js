const searchIcon = document.querySelector('.search-icon');
const sidebar = document.querySelector('.sidebar');
const offcanvasLeft = document.querySelector('.offcanvas-left');
const seeMore = document.querySelector('.see-more');
const hideSub = document.querySelectorAll('.hide-sub');
const seeLess = document.querySelector('.see-less');

searchIcon.addEventListener('click', ()=>{
 sidebar.style.visibility = 'hidden'
});

offcanvasLeft.addEventListener('click', ()=>{
 sidebar.style.visibility = 'visible'
});

seeMore.addEventListener('click',()=>{
 hideSub.forEach((hide)=>{
  hide.style.visibility = 'visible'
  hide.style.height = '40px'
 });
 seeMore.style.visibility = 'hidden'
 seeMore.style.height = '0'
});

seeLess.addEventListener('click', ()=>{
 hideSub.forEach((hide)=>{
  hide.style.visibility = 'hidden'
  hide.style.height = '0'
 });
 seeMore.style.visibility = 'visible'
 seeMore.style.height = '40px'
})