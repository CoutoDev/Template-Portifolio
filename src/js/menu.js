;(function(){
    'use strict'
    const classMenu = 'menu-opened';
    var btn =document.querySelector('.header-nav__hamburgger');
    var html = document.querySelector('html');
    var menu = document.querySelector('#mainMenu');
    var menuState = false; // false == Fechado

    html.addEventListener('click', function(e){       

        if(e.target === html && classMenu){
            closeMenu();
        }
    })

    btn.addEventListener('click',  toggleMenu);

    function toggleMenu(e){

        if(menuState){
            closeMenu();
        } else {
            openMenu();
        }

    }

    function closeMenu(){
        menuState = false;
        html.classList.remove(classMenu);
        btn.blur();
        menu.setAttribute('aria-expanded', false);
        btn.setAttribute('aria-expanded', false);
    }

    function openMenu(){
        menuState = true;
        html.classList.add(classMenu);
        menu.setAttribute('aria-expanded', true);
        btn.setAttribute('aria-expanded', true);


    }

}())