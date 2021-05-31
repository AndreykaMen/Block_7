import '../scss/style.scss';
import Swiper from 'swiper/bundle';

const swiperNormal = document.querySelector('#swiper-container-normal'),
  swiperLarge = document.querySelector('#swiper-container-large'),
  swiperTable = document.querySelector('#swiper-container-table'),
  swiperInfo = document.querySelector('#swiper-info'),
  linkBrand = document.querySelector('#link_brand'),
  linkOther = document.querySelector("#link_other"),
  catalogOther = document.querySelector('#category-other__inner'),
  catalogBrand = document.querySelector('#category-brand__inner'),
  categoryTable = document.querySelector('#category-table');

let mySwiper;

function initSwiper() {
  let matches = window.matchMedia('(max-width: 495px)').matches;
  if (matches) {
    mySwiper = true;
    swiperNormal.style.display = 'flex';
    swiperLarge.style.display = 'flex';
    swiperTable.style.display = 'flex';
    swiperInfo.style.display = 'block';
    linkBrand.style.display = 'none';
    linkOther.style.display = 'none';
    catalogOther.style.display = 'none';
    catalogBrand.style.display = 'none';
    categoryTable.style.display = 'none';

    mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      calculateHeight: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1.5,
      initialSlide: 0,
      spaceBetween: 60,
    });
  } else {
    mySwiper = null;
    swiperNormal.style.display = 'none';
    swiperLarge.style.display = 'none';
    swiperTable.style.display = 'none';
    swiperInfo.style.display = 'none';
    linkBrand.style.display = 'block';
    linkOther.style.display = 'block';
    catalogOther.style.display = 'flex';
    catalogBrand.style.display = 'flex';
    categoryTable.style.display = 'block';

  }
}

initSwiper();

const anchors = document.querySelectorAll('.content-menu__link');
for (let key of anchors) {
  key.addEventListener('click', function (e) {
    const blockID = key.getAttribute('href');
    if (key.hash) {
      e.preventDefault()
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
}

const fadeSidebar = document.querySelector(".fade-sidebar");


function getModalOpen(id) {
  fadeSidebar.style.display = 'block';
  document.getElementById(id).style.right = '0';
}

function getModalClose(id) {
  fadeSidebar.style.display = 'none';
  document.getElementById(id).style.right = '-550px';
}

function getSaidBarOpen(id) {
  fadeSidebar.style.display = 'block';
  document.getElementById(id).style.left = '0';
}

function getSaidBarClose(id) {
  fadeSidebar.style.display = 'none';
  document.getElementById(id).style.left = '-450px';
}


document.onclick = function (e) {
  let target = e.target;

  if (target.id === "button-message" || target.id === "button-message--clone") {
    getSaidBarClose("sidebar-hidden");
    getModalOpen('modal-message');
  }
  if (target.id === "button-tel" || target.id === "button-tel--clone") {
    getSaidBarClose("sidebar-hidden");
    getModalOpen('modal-tel');
  }
  if (target.id === "modal-message__closed-button" || target.className === "fade-sidebar") {
    getModalClose('modal-message');
  }
  if (target.id === "modal-tel__closed-button" || target.className === "fade-sidebar") {
    getModalClose('modal-tel');
  }
  if (target.id === "menu-burger") {
    getSaidBarOpen("sidebar-hidden");
  }
  if (target.id === "sidebar-hidden__closed" || target.className === "fade-sidebar") {
    getSaidBarClose("sidebar-hidden");
  }

  if (target.hasAttribute('data-catopen')) {
    let status = target.dataset.status;
    if (status === "false") {
      let id = target.dataset.catopen;
      if (document.body.clientWidth <= 768) {
        document.getElementById(id).style.height = "528px";
        target.textContent = 'Скрыть все';
        target.classList.add('more-link--rotate');
        status = target.dataset.status = "true";
      } else {
        document.getElementById(id).style.height = "350px";
        target.textContent = 'Скрыть все';
        target.classList.add('more-link--rotate');
        status = target.dataset.status = "true";
      }
    } else {
      let id = target.dataset.catopen;
      document.getElementById(id).style.height = "175px";
      target.textContent = 'Показать все';
      target.classList.remove('more-link--rotate');
      status = target.dataset.status = "false";
    }
  }
}




