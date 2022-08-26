/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phoneSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phoneSpread */ "./src/assets/js/phoneSpread.js");


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
    nextBtn.addEventListener('click', e => {
      e.preventDefault();
      const btn = e.target;
      btn.nextElementSibling.classList.add('burger-menu-header__nextlists_active');
    });
  });
  backBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentNode.parentNode.classList.remove('burger-menu-header__nextlists_active');
    });
  });
} //END BURGER FUNCTION ==========================================
//TABS FUNCTION =================================================


function tabs(tabsSelector, tabsContentSelector, tabsActive, contentActive, dataAttr) {
  const tabsWrapper = document.querySelector(tabsSelector);
  const contentWrapper = document.querySelector(tabsContentSelector);
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');

  function resetTabs() {
    Array.from(tabsWrapper.children).forEach(item => {
      item.classList.remove(tabsActive);
    });
    Array.from(contentWrapper.children).forEach(item => {
      item.classList.remove(contentActive);
    });
  }

  function activateOverlay() {
    overlay.classList.add('overlay_active');
    overlay.style.height = `${body.scrollHeight}px`;
  }

  tabsWrapper.addEventListener('click', e => {
    const target = e.target.hasAttribute(dataAttr) ? e.target : e.target.parentNode;
    const targetAttr = target.getAttribute(dataAttr);
    resetTabs();
    activateOverlay();
    target.classList.add(tabsActive);
    Array.from(contentWrapper.children).forEach(item => {
      if (item.getAttribute(dataAttr) === targetAttr) {
        item.classList.add(contentActive);
      }
    });
  });
  window.addEventListener('click', e => {
    console.log(e.target);

    if (e.target.classList.contains('overlay_active')) {
      e.target.classList.remove('overlay_active');
      resetTabs();
    }
  });
} //END TABS FUNCTION ==============================================


window.addEventListener('DOMContentLoaded', () => {
  // image on main resize
  window.addEventListener('resize', () => {
    const benefitsElement = document.querySelector('.main__benefits');
    const screenWidth = window.screen.availWidth;

    if (screenWidth < 576) {
      benefitsElement.style.marginTop = `${screenWidth}px`;
    } else if (screenWidth > 575 && screenWidth < 992) {
      benefitsElement.style.marginTop = `50px`;
    } else {
      benefitsElement.style.marginTop = `200px`;
    }
  }); // end image on main resize
  // PHONE SPREAD ON HEADER

  Object(_phoneSpread__WEBPACK_IMPORTED_MODULE_0__["telSpread"])({
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
  }); // END PHONE SPREAD ON HEADER
  //BURGER MENU

  burger(); //END BURGER MENU
  //MAIN TABS

  tabs('.btns-tab-main__list', '.contents-tab-main__wrapper', 'btns-tab-main__item_active', 'contents-tab-main__content_active', 'data-tab'); //END MAIN TABS
});

/***/ }),

/***/ "./src/assets/js/phoneSpread.js":
/*!**************************************!*\
  !*** ./src/assets/js/phoneSpread.js ***!
  \**************************************/
/*! exports provided: telSpread */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "telSpread", function() { return telSpread; });
const telSpread = function () {
  let {
    parentSelector,
    btnSelector,
    classes: {
      listClass,
      itemClass,
      linkClass,
      listActiveClass,
      arrowActiveClass
    },
    telsArray
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const parent = document.querySelector(parentSelector),
        btn = document.querySelector(btnSelector);
  const subList = document.createElement('ul');
  subList.classList.add(listClass);
  telsArray.forEach(tel => {
    subList.innerHTML += `
            <li class="${itemClass}">
                <a href="tel:${tel}" class="${linkClass}">${tel}</a>
            </li>
        `;
  });
  parent.append(subList);
  btn.addEventListener('click', () => {
    if (!subList.classList.contains(listActiveClass)) {
      subList.classList.add(listActiveClass);
      btn.classList.add(arrowActiveClass);
      console.log(subList.scrollHeight, subList.scrollTop, subList.offsetHeight);
      subList.style.maxHeight = subList.scrollHeight + 'px';
    } else {
      subList.classList.remove(listActiveClass);
      subList.style.maxHeight = 0 + 'px';
      btn.classList.remove(arrowActiveClass);
    }
  });
};



/***/ })

/******/ });
//# sourceMappingURL=script.js.map