"use strict";
var media_stat = window.matchMedia('(max-width: 800px)');
var menu = document.getElementById('menu');
checkMenuVisible(media_stat);
media_stat.addListener(checkMenuVisible);

document.getElementById('menu_bt').addEventListener('click', () => {
    if(window.innerWidth <= 800) {
        console.log(menu.style.display);
        if(menu.style.display == '' || menu.style.display == 'none') {
            console.log('menu open');
            menu.style.display = 'block';
        }else {
            console.log('menu close');
            menu.style.display = 'none';
        }
    }
})

function checkMenuVisible(stat) {
    if(stat.matchs) {
        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';
    }
}