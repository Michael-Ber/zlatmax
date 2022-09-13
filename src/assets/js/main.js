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

    // MAIN CAROUSEL

    const mainSwiper = new Swiper('.main__carousel', {
        loop: false,
        slideClass: 'carousel-main__slide',
        slideActiveClass: 'carousel-main__slide_active',
        wrapperClass: 'carousel-main__wrapper',
        modules: [Pagination, Autoplay],
        // slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 122000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.carousel-main__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return `<div class="pagination-slider-common__bullet"><span class="pagination-slider-common__line"></span></div>`
            },
            bulletClass: 'pagination-slider-common__bullet',
            bulletActiveClass: 'pagination-slider-common__bullet_active'
        },
        on: {
            init: function(swiper) {
                const activeFraction = document.querySelector('.carousel-main__current'),
                      totalFraction = document.querySelector('.carousel-main__total');
                activeFraction.innerHTML = swiper.slides.length < 10 ?`0${swiper.activeIndex+1}` : swiper.activeIndex;
                totalFraction.innerHTML = swiper.slides.length;
                console.log(typeof(swiper.activeIndex));
            },
            slideChange: function(swiper) {
                const activeFraction = document.querySelector('.carousel-main__current');
                activeFraction.innerHTML = swiper.slides.length < 10 ?`0${swiper.activeIndex+1}`: swiper.activeIndex;
                
            }
        }
        // breakpointsBase: 'window',
        // breakpoints: {
        //     320: {
        //         slidesPerView: 1,
        //     },
        //     768: {
        //         slidesPerView: 2,
        //     },
        //     1200: {
        //         slidesPerView: 3,
        //     },
        //     1609: {
        //         slidesPerView: 4,
        //     },
        // }
    });

    // END MAIN CAROUSEL

    // BESTSELLERS SLIDER

    const bestsellersSwiper = new Swiper('.bestsellers__slider', {
        spaceBetween: 30,
        slidesPerView: 4,
        modules: [Pagination, Autoplay],
        // autoplay: {
        //     delay: 2000
        // },
        pagination: {
            el: '.slider-bestsellers__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="pagination-slider-common__bullet"><span class="pagination-slider-common__line"></span></div>'
            },
            bulletClass: 'pagination-slider-common__bullet',
            bulletActiveClass: 'pagination-slider-common__bullet_active'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1609: {
                slidesPerView: 4,
            },
        }
    });

    // END BESTSELLERS SLIDER

    // NOVELTY SLIDER
    const noveltySwiper = new Swiper('.novelty__slider', {
        modules: [Pagination, Autoplay],
        spaceBetween: 30,
        slidesPerView: 1,
        // autoplay: {
        //     delay: 2000
        // },
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

    // END NOVELTY SLIDER

    // STOCK SLIDER
    const stockSwiper = new Swiper('.stock__slider', {
        modules: [Pagination, Autoplay],
        slidesPerView: 4,
        spaceBetween: 30,
        // autoplay: {
        //     delay: 2000
        // },
        pagination: {
            el: '.slider-stock__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="pagination-slider-common__bullet"><span class="pagination-slider-common__line"></span></div>'
            },
            bulletClass: 'pagination-slider-common__bullet',
            bulletActiveClass: 'pagination-slider-common__bullet_active'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1610: {
                slidesPerView: 4,
            }
        }
    });

    // END STOCK SLIDER

    // FLASHLIGHTS SLIDER
    const flashlightsSwiper = new Swiper('.flashlights__slider', {
        modules: [Pagination, Autoplay],
        slidesPerView: 4,
        spaceBetween: 30,
        // autoplay: {
        //     delay: 2000
        // },
        pagination: {
            el: '.slider-flashlights__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="pagination-slider-common__bullet"><span class="pagination-slider-common__line"></span></div>'
            },
            bulletClass: 'pagination-slider-common__bullet',
            bulletActiveClass: 'pagination-slider-common__bullet_active'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1610: {
                slidesPerView: 4,
            }
        }
    });

    // END FLASHLIGHTS SLIDER

    // CARD PAGE SIMILAR SLIDER

    const similarSwiper = new Swiper('.similar__carousel', {
        modules: [Pagination, Autoplay],
        slidesPerView: 4,
        spaceBetween: 30,
        // autoplay: {
        //     delay: 2000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: '.similar__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="pagination-slider-common__bullet"><span class="pagination-slider-common__line"></span></div>'
            },
            bulletClass: 'pagination-slider-common__bullet',
            bulletActiveClass: 'pagination-slider-common__bullet_active'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1609: {
                slidesPerView: 4,
            },
        }
    });

    // END SIMILAR SLIDER

    // CARD PAGE SIMILAR SLIDER

    const recomendSwiper = new Swiper('.recomendated__carousel', {
        modules: [Pagination, Autoplay],
        slidesPerView: 4,
        spaceBetween: 30,
        // autoplay: {
        //     delay: 2000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: '.recomendated__pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="pagination-slider-common__bullet"><span class="pagination-slider-common__line"></span></div>'
            },
            bulletClass: 'pagination-slider-common__bullet',
            bulletActiveClass: 'pagination-slider-common__bullet_active'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1609: {
                slidesPerView: 4,
            },
        }
    });

    // END SIMILAR SLIDER

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