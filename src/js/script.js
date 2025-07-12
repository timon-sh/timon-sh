"use strict";

/* Large Image Preview */

function preview_image(event, img_src) {

    if (event == 'view') {

        document.querySelector('#large-image-preview').style.display = 'flex';
        document.querySelector('#large-image-preview').style.animation = 'fade_in 0.5s both';
        document.querySelector('#navigation').style.animation = 'fade_out 0.5s both';
        document.querySelector('#nav-area').style.animation = 'fade_out 0.5s both';
        document.querySelector('main').style.filter = 'brightness(0.5)';
        document.querySelector('main').style.opacity = '0.5';
        document.querySelector('main').style.backgroundColor = 'var(--clr-surface-dark)';

        document.querySelector('#large-image-preview img').src = img_src;
        document.querySelector('#large-image-preview img').style.animation = 'fade_in 0.5s both';

    } else if (event == 'close') {

        document.querySelector('#large-image-preview').style.animation = 'fade_out 0.5s both';
        setTimeout(() => {
            document.querySelector('#large-image-preview').style.display = 'none';
        }, 500);
        document.querySelector('#navigation').style.animation = 'fade_in 0.5s both';
        document.querySelector('#nav-area').style.animation = 'fade_in 0.5s both';
        document.querySelector('main').style.filter = 'brightness(1)';
        document.querySelector('main').style.opacity = '1';
        document.querySelector('main').style.backgroundColor = 'var(--clr-surface)';

    }

}

/* Scroll Ability */

function scroll_to_id(id, change_active) {

    const element = document.getElementById(id);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - 100;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });

    if (change_active != null) {

        document.querySelectorAll('#navigation a').forEach(a => { a.classList.remove('active') });
        document.querySelector(`#navigation a.${change_active}`).classList.add('active');

    }

}