'use strict';

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

window.addEventListener('DOMContentLoaded', () => {

    // image on main resize
    
    window.addEventListener('resize', () => {
        const benefitsElement = document.querySelector('.main__benefits');
        const screenWidth = window.screen.availWidth;
        if(screenWidth < 576) {
            benefitsElement.style.marginTop = `${screenWidth}px`;
        }else if(screenWidth > 575 && screenWidth < 992){
            benefitsElement.style.marginTop = `50px`;
        }else {
            benefitsElement.style.marginTop = `200px`;
        }
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
    
    tabs('.btns-tab-main__list', '.contents-tab-main__wrapper', 'btns-tab-main__item_active', 'contents-tab-main__content_active', 'data-tab');
    
    //END MAIN TABS




});