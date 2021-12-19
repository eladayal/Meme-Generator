'use strict'

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function backToHomePage() {
    if (document.querySelector('.main-meme-editor').classList.contains('display-none')) return
    var isRemove = confirm('If you go back to gallery your progress will be deleted! Are you sure you want to go back?')
    if (!isRemove) return
    location.reload()
} 
