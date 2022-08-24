'use strict';

import {telSpread} from './phoneSpread';

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

    function burger() {
        const burgerBtn = document.querySelector('.header__burger');
        const nextMenuBtns = document.querySelectorAll('.item-nav_next');
    }

    //END BURGER MENU


});