'use strict';

import Swiper, {Pagination, Navigation, Autoplay} from 'swiper';
import {telSpread} from './phoneSpread';
import burger from './burger';
import tabs from './tab';
import scrollBar from './sliderBar';
import inputModify from './inputModif';

window.addEventListener('DOMContentLoaded', () => {

   
     // image on main resize
    
        window.addEventListener('resize', () => {
            try {
                const benefitsElement = document.querySelector('.main__benefits');
                const screenWidth = window.screen.availWidth;
                if(screenWidth < 576) {
                    benefitsElement.style.marginTop = `${screenWidth}px`;
                }else if(screenWidth > 575 && screenWidth < 992){
                    benefitsElement.style.marginTop = `50px`;
                }else {
                    benefitsElement.style.marginTop = `200px`;
                }
            }catch(e) {console.log(e)}
        })
    
    // end image on main resize
   
    // PHONE SPREAD ON HEADER

    try{telSpread({
        parentSelector: '.header__recall',
        btnSelector: '.recall-header__arrow',
        telsArray: ['8-123-4567-890', '8-890-1234-567', '8-456-1237-890'],
        classes: {
            listClass: 'recall-header__list', 
            itemClass: 'recall-header__item', 
            linkClass: 'recall-header__sublink', 
            listActiveClass: 'recall-header__list_active', 
            arrowActiveClass: 'recall-header__arrow_active'
        }
    })}catch(e){console.log(e)};

    // END PHONE SPREAD ON HEADER

    //BURGER MENU
    try{burger()}catch(e){console.log(e)};
    //END BURGER MENU

    //MAIN TABS
    
    try{
        tabs('.btns-tab-main__list', '.contents-tab-main__wrapper', 'btns-tab-main__item_active', 'contents-tab-main__content_active', 'data-tab');
    }catch(e) {
        console.log(e);
    }
    
    //END MAIN TABS

    // CARD TABS

    try{
        tabs('.card-item__tab-btns', '.card-item__tab-contents', 'card-item__tab-btn_active', 'card-item__tab-content_active', 'data-tab', false);
    }catch(e) {
        console.log(e);
    }

    // END CARD TABS

    // BESTSELLERS SLIDER

    const bestsellersSwiper = new Swiper('.bestsellers__slider', {
        loop: true,
        slideClass: 'slider-bestsellers__slide',
        slideActiveClass: 'slider-bestsellers__slide_active',
        wrapperClass: 'slider-bestsellers__wrapper',
        modules: [Pagination],
        pagination: {
            el: '.slider-bestsellers__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="pagination-slider-common__bullet"><span class="pagination-slider-common__line"></span></div>'
            },
            bulletClass: 'pagination-slider-common__bullet',
            bulletActiveClass: 'pagination-slider-common__bullet_active'
        }
    });
    const noveltySwiper = new Swiper('.novelty__slider', {
        loop: true,
        slideClass: 'slider-novelty__slide',
        slideActiveClass: 'slider-novelty__slide_active',
        wrapperClass: 'slider-novelty__wrapper',
        modules: [Pagination],
        slidesPerView: 1,
        // slidesPerGroup: 3,
        pagination: {
            el: '.slider-novelty__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="pagination-slider-novelty__bullet"><span class="pagination-slider-novelty__line"></span></div>'
            },
            bulletClass: 'pagination-slider-novelty__bullet',
            bulletActiveClass: 'pagination-slider-novelty__bullet_active'
        },
        breakpoints: {
            992: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 2,
            },
            1610: {
                slidesPerView: 3,
            }
        }
    });
    const stockSwiper = new Swiper('.stock__slider', {
        loop: true,
        slideClass: 'slider-stock__slide',
        slideActiveClass: 'slider-stock__slide_active',
        wrapperClass: 'slider-stock__wrapper',
        modules: [Pagination],
        pagination: {
            el: '.slider-stock__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="pagination-slider-common__bullet"><span class="pagination-slider-common__line"></span></div>'
            },
            bulletClass: 'pagination-slider-common__bullet',
            bulletActiveClass: 'pagination-slider-common__bullet_active'
        }
    });

    const similarSwiper = new Swiper('.carousel-common', {
        loop: false,
        slideClass: 'slide-common-card-page',
        slideActiveClass: 'slide-common-card-page_active',
        wrapperClass: 'wrapper-common',
        modules: [Pagination, Autoplay],
        // slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 122000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.pagination-slider-common',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="pagination-slider-common__bullet"><span class="pagination-slider-common__line"></span></div>'
            },
            bulletClass: 'pagination-slider-common__bullet',
            bulletActiveClass: 'pagination-slider-common__bullet_active'
        },
        breakpointsBase: 'window',
        // centerInsufficientSlides: true,
        // centeredSlides: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            // 992: {
            //     slidesPerView: 2,
            // },
            1200: {
                slidesPerView: 3,
            },
            1609: {
                slidesPerView: 4,
            },
        }
    });

    // END BESTSELLERS SLIDER

    // CATEGORY COST SCROLL(SLIDER) ========================================>
    
    try{scrollBar('.slider-1', 20000,'#e8aa31', '#141414', '.slider-cost__val', 10, 25)}catch(e){console.log(e)};

    // END CATEGORY COST SCROLL(SLIDER) ========================================>

    // CATEGORY LENGTH MAIN SCROLL(SLIDER) ========================================>
    
    try{scrollBar('.slider-2', 20000,'#e8aa31', '#141414', '.slider-length__val', 10, 25)}catch(e){console.log(e)};

    // END CATEGORY LENGTH MAIN SCROLL(SLIDER) ========================================>

    // CATEGORY LENGTH BLADE SCROLL(SLIDER) ========================================>
    
    try{scrollBar('.slider-3', 20000,'#e8aa31', '#141414', '.slider-blade__val', 10, 25)}catch(e){console.log(e)};

    // END CATEGORY LENGTH BLADE SCROLL(SLIDER) ========================================>

    // CATEGORY WIDTH BLADE SCROLL(SLIDER) ========================================>
    
    try{scrollBar('.slider-4', 20000,'#e8aa31', '#141414', '.slider-width__val', 10, 25)}catch(e){console.log(e)};

    // END CATEGORY WIDTH BLADE SCROLL(SLIDER) ========================================>

    // ACCORDEON CATEGORY PAGE

    try {accordeon('.filter-category__accordeon', 'filter-category__accordeon_active')}catch(e){console.log(e)};

    // END ACCORDEON CATEGORY PAGE

    // INPUT MODIFICATION

    try{inputModify('.order-content-card-item__input', '.order-content-card-item__input-minus', '.order-content-card-item__input-plus')}catch(e){console.log(e)} ;

    // END INPUT MODIFICATION


});