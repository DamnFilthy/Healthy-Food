"use strict";

import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 5000);
    // Tabs
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');

    // Timer
    timer('.timer', '2021-05-30');

    // Modal 
    modal('[data-modal]', '.modal', modalTimerId);

    // Cards
    cards();
    
    // Calculator
    calc();

    // Forms 
    forms('form', modalTimerId);

    // Slider
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

    
    
});