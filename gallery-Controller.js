'use strict'
var gNextId = 1



var gImgs = [
    { id: gNextId, desc: 'Trump Meme', url: 'img/1.jpg', keywords: ['polittics', 'funny'] },
    { id: ++gNextId, desc: 'Doggies', url: 'img/2.jpg', keywords: ['animels', 'happy'] },
    { id: ++gNextId, desc: 'Sleeping dob & Baby', url: 'img/3.jpg', keywords: ['animels', 'cute'] },
    { id: ++gNextId, desc: 'Sleppy Cat', url: 'img/4.jpg', keywords: ['animels', 'funny'] },
];


function onInit() {
    renderGallery()
    InitEditor() // Activates the Meme Editor

}




function renderGallery() {
    const strHTML = gImgs.map(function (img) {
        // console.log('img:', img);

        return `
    <div class="grid-img img-${img.id}">
    ${img.desc}<img onclick="onImgSelect(${img.id})" class="img-${img.id}" src="./${img.url}" alt="">
    </div>
    `

    })

    document.querySelector('.grid-container').innerHTML = strHTML.join('')

}



function onImgSelect(imgId) {
    console.log('imgId:', imgId);
    
    const pickedMeme = gImgs.find(function (img) {
        return img.id === imgId
    })

    setImg(pickedMeme)
    renderMeme()
}



