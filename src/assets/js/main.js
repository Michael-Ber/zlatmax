'use strict';

import Swiper, {Pagination, Navigation} from 'swiper';
import {telSpread} from './phoneSpread';

//BURGER FUNCTION =============================================
function burger() {
    const burgerBtn = document.querySelector('.header__burger');
    const burgerMenu = document.querySelector('.header__burger-menu');
    const closeMenu = document.querySelectorAll('.close-nav');
    const nextMenuBtns = document.querySelectorAll('.next');
    const backBtn = document.querySelectorAll('.back-nav');

    closeMenu.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            burgerMenu.classList.remove('header__burger-menu_active');
        });
    });

    burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle('header__burger-menu_active');
    });

    nextMenuBtns.forEach(nextBtn => {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const btn = e.target;
            btn.nextElementSibling.classList.add('burger-menu-header__nextlists_active');
        });
    });

    backBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentNode.parentNode.classList.remove('burger-menu-header__nextlists_active');
        });
    })
}

//END BURGER FUNCTION ==========================================

//TABS FUNCTION =================================================

function tabs(tabsSelector, tabsContentSelector, tabsActive, contentActive, dataAttr) {
    const tabsWrapper = document.querySelector(tabsSelector);
    const contentWrapper = document.querySelector(tabsContentSelector);
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('body');
    
    function resetTabs() {
        Array.from(tabsWrapper.children).forEach(item => {
            item.classList.remove(tabsActive);
        })
        Array.from(contentWrapper.children).forEach(item => {
            item.classList.remove(contentActive);
        });
    }
    function activateOverlay() {
        overlay.classList.add('overlay_active');
        overlay.style.height = `${body.scrollHeight}px`; 
    }
    tabsWrapper.addEventListener('click', (e) => {
        const target = e.target.hasAttribute(dataAttr) ? e.target : e.target.parentNode;
        const targetAttr = target.getAttribute(dataAttr);
        resetTabs();
        activateOverlay();
        target.classList.add(tabsActive);
        Array.from(contentWrapper.children).forEach(item => {
            if(item.getAttribute(dataAttr) === targetAttr) {
                item.classList.add(contentActive);
            }
        });
    });
    window.addEventListener('click', (e) => {
        console.log(e.target);
        if(e.target.classList.contains('overlay_active')) {
            e.target.classList.remove('overlay_active');
            resetTabs();
        }
    });
}

//END TABS FUNCTION ==============================================

// CATEGORY COST SCROLL (SLIDER) =======================================>

function scrollBar(wrapper, maximum, colorTrack, colorActiveTrack, valClass, minScale, maxScale) {
    const scrollWrapper = document.querySelector(wrapper);
    const scrollTracks = Array.from(scrollWrapper.children);
    // scrollTracks.forEach(item => {
    //     item.insertAdjacentHTML('afterend', `<span class=" slider-main__actual">${item.value}</span>`);
    // });
    let average1 = minScale;
    let average2 = maxScale;
    let average1perc = average1 + '%';
    let average2perc = average2 + '%';

    scrollTracks[0].style.background = `linear-gradient(90deg, ${colorTrack} 0% ${average1perc}, ${colorActiveTrack} ${average1perc} ${average2perc}, ${colorTrack} ${average2perc} 100%)`;

    scrollTracks[0].addEventListener('input', (e) => {
        const elem = e.target;
        const actual = document.querySelectorAll(valClass)[0];
        const max = maximum;
        average1 = Math.floor(elem.value * 100 / max);
        average1perc = average1 + '%';
        average2perc = average2 + '%';
        actual.innerHTML = elem.value + ' руб.';

        elem.style.background = `linear-gradient(90deg, ${colorTrack} 0% ${average1 > average2 ? average2perc : average1perc}, ${colorActiveTrack} ${average1 > average2 ? average2perc : average1perc} ${average2 < average1 ? average1perc : average2perc}, ${colorTrack} ${average2 < average1 ? average1perc : average2perc} 100%)`;
    })

    scrollTracks[1].addEventListener('input', (e) => {
        const elem = e.target;
        const actual = document.querySelectorAll(valClass)[1];
        const max = maximum;
        average2 = Math.floor(elem.value * 100 / max);
        average1perc = average1 + '%';
        average2perc = average2 + '%';
        actual.innerHTML = elem.value + ' руб.';

        scrollTracks[0].style.background = `linear-gradient(90deg, ${colorTrack} 0% ${average1 > average2 ? average2perc : average1perc}, ${colorActiveTrack} ${average1 > average2 ? average2perc : average1perc} ${average2 < average1 ? average1perc: average2perc}, ${colorTrack} ${average2 < average1 ? average1perc : average2perc} 100%)`;
    })

}

// END CATEGORY COST SCROLL (SLIDER) =======================================>

// CATALOG ACCORDEON

function accordeon(btnSelector,activeBtnSelector) {
    const trig = document.querySelectorAll(btnSelector);

    trig.forEach(item => {
        item.addEventListener('click', (e) => {
            const btnACtive = e.target.classList.contains(activeBtnSelector) || e.target.parentNode.parentNode.classList.contains(activeBtnSelector);
            if(btnACtive) {
                item.nextElementSibling.style.display = 'none';
                item.parentNode.style.paddingBottom = '0px';
                item.classList.remove(activeBtnSelector);
            }else {
                item.nextElementSibling.style.display = 'block';
                item.parentNode.style.paddingBottom = '40px';
                item.classList.add(activeBtnSelector);
            }
        });
    })

}


// END CATALOG ACCORDEON


window.addEventListener('DOMContentLoaded', () => {

   try {
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

    telSpread({
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
    });

    // END PHONE SPREAD ON HEADER

    //BURGER MENU
    burger();
    //END BURGER MENU

    //MAIN TABS
    
    try{
        tabs('.btns-tab-main__list', '.contents-tab-main__wrapper', 'btns-tab-main__item_active', 'contents-tab-main__content_active', 'data-tab');
    }catch(e) {
        console.log(e);
    }
    
    //END MAIN TABS

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


    // END BESTSELLERS SLIDER

    // CATEGORY COST SCROLL(SLIDER) ========================================>
    
    scrollBar('.slider-1', 20000,'#e8aa31', '#141414', '.slider-cost__val', 10, 25);

    // END CATEGORY COST SCROLL(SLIDER) ========================================>

    // CATEGORY LENGTH MAIN SCROLL(SLIDER) ========================================>
    
    scrollBar('.slider-2', 20000,'#e8aa31', '#141414', '.slider-length__val', 10, 25);

    // END CATEGORY LENGTH MAIN SCROLL(SLIDER) ========================================>

    // CATEGORY LENGTH BLADE SCROLL(SLIDER) ========================================>
    
    scrollBar('.slider-3', 20000,'#e8aa31', '#141414', '.slider-blade__val', 10, 25);

    // END CATEGORY LENGTH BLADE SCROLL(SLIDER) ========================================>

    // CATEGORY WIDTH BLADE SCROLL(SLIDER) ========================================>
    
    scrollBar('.slider-4', 20000,'#e8aa31', '#141414', '.slider-width__val', 10, 25);

    // END CATEGORY WIDTH BLADE SCROLL(SLIDER) ========================================>

    // ACCORDEON CATEGORY PAGE

    try {accordeon('.filter-category__accordeon', 'filter-category__accordeon_active')}catch(e){console.log(e)};

    // END ACCORDEON CATEGORY PAGE

    // CAROUSEL CATEGORY PAGE

    // const categorySwiper = new Swiper('.products-category__carousel', {
    //     loop: false,
    //     slideClass: 'products-category__slide',
    //     // slideActiveClass: 'slider-stock__slide_active',
    //     wrapperClass: 'products-category__wrapper',
    //     modules: [Pagination, Navigation],
    //     slidesPerView: 1,
    //     pagination: {
    //         el: '.products-category__pagination',
    //         clickable: true,
    //         type: 'custom',
    //         renderCustom: function(swiper, current, total) {
    //             let res;
    //             if(total > 4) {
    //                 res = `${current} ${current+1} ${current+2} ... ${total}`
    //             }else if(total > 4 && total - current < 4) {
    //                 res = `${current} ${current+1} ${current+2} ${current+3} ${total}`
    //             }else {
    //                 res = `${current} ${current+1} ${current+2} ${current+3} ${total}`
    //             }
    //             return res;
    //         },
    //         bulletClass: 'pagination-products__bullet',
    //         bulletActiveClass: 'pagination-products__bullet_active'
    //     },
    //     navigation: {
    //         nextEl: '.products-category__next',
    //         prevEl: '.products-category__prev',
    //     }
    // });

    // END CAROUSEL CATEGORY PAGE

   }catch(e) {
    console.log(e);
   }


});