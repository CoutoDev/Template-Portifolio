;(function(){
    'use strict'
    const classMenu = 'menu-opened';
    var btn =document.querySelector('.header-nav__hamburgger');
    var html = document.querySelector('html');    
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
    }

    function openMenu(){
        menuState = true;
        html.classList.add(classMenu);
        
    }

}())