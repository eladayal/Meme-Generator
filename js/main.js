'use strict'

function toggleMenu() {
    document.body.classList.toggle('menu-open'); 
}

function backToHomePage(isTrue){
    if(isTrue){
    var isRemove = confirm('If you go back to gallery your work progress will be deleted! Are you sure you want to go back?')
    if (!isRemove) return
    location.reload()
    } else{
        location.reload()
    }
}