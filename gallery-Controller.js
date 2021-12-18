'use strict'
var gNextId = 1

var gImgs = [
    { id: gNextId, desc: 'Office Jim', url: 'img/1.jpg', keywords: ['tv', '2 liner', 'office'] },
    { id: ++gNextId, desc: 'Futurama not sure', url: 'img/2.jpg', keywords: ['tv', 'satire','original meme'] },
    { id: ++gNextId, desc: 'Drake', url: 'img/3.jpg', keywords: ['2 liner', 'cute', 'famous'] },
    { id: ++gNextId, desc: 'Penguin', url: 'img/4.jpg', keywords: ['kid', 'funny','original meme'] },
    { id: ++gNextId, desc: 'Success Kid', url: 'img/5.jpg', keywords: ['kid', 'win'] },
    { id: ++gNextId, desc: 'Impressed Obama', url: 'img/6.jpg', keywords: ['politics', 'win','original meme'] },
    { id: ++gNextId, desc: 'Kobi!', url: 'img/7.jpg', keywords: ['animals', 'funny'] },
    { id: ++gNextId, desc: 'Condescending Wonka', url: 'img/8.jpg', keywords: ['tv', 'satire','original meme'] },
    { id: ++gNextId, desc: 'No One Is Safe', url: 'img/9.jpg', keywords: ['kid', 'funny'] },
    { id: ++gNextId, desc: 'Laughing Obama', url: 'img/10.jpg', keywords: ['politics', 'funny'] },
    { id: ++gNextId, desc: 'Just Right', url: 'img/11.jpg', keywords: ['tv', 'funny','original meme'] },
    { id: ++gNextId, desc: 'Batman Slapping Robbin', url: 'img/12.jpg', keywords: ['tv', '2 liner'] },
    { id: ++gNextId, desc: 'Cheers', url: 'img/13.jpg', keywords: ['tv', 'funny'] },
    { id: ++gNextId, desc: 'What If i Told You', url: 'img/14.jpg', keywords: ['tv', 'satire','original meme'] },
    { id: ++gNextId, desc: 'One Does Not Simply', url: 'img/15.jpg', keywords: ['tv', 'funny','original meme'] },
    { id: ++gNextId, desc: 'Cpt. Why The Fuck?!', url: 'img/16.jpg', keywords: ['tv', 'funny','original meme'] },
    { id: ++gNextId, desc: 'Putin', url: 'img/17.jpg', keywords: ['politics', 'funny'] },
    { id: ++gNextId, desc: 'What If i Told You', url: 'img/18.jpg', keywords: ['tv', 'funny','original meme'] },
    { id: ++gNextId, desc: 'Confession Bear', url: 'img/19.jpg', keywords: ['animals', 'funny','original meme'] },
    { id: ++gNextId, desc: 'Trump', url: 'img/20.jpg', keywords: ['politics', 'satire'] },
    { id: ++gNextId, desc: 'Suddenly', url: 'img/21.jpg', keywords: ['satire', 'funny'] },
    { id: ++gNextId, desc: 'Aliens', url: 'img/22.jpg', keywords: ['tv', 'funny','original meme'] },
    { id: ++gNextId, desc: 'Philosoraptor', url: 'img/23.jpg', keywords: ['animals', 'funny','original meme'] },
    { id: ++gNextId, desc: 'First World Problems', url: 'img/24.jpg', keywords: ['satire', 'funny','original meme'] },
    { id: ++gNextId, desc: 'Really?! Kid', url: 'img/25.jpg', keywords: ['Kid', 'funny'] },
    { id: ++gNextId, desc: 'Gordon', url: 'img/26.jpg', keywords: ['tv', 'funny'] },
    { id: ++gNextId, desc: 'Why You So?!', url: 'img/27.jpg', keywords: ['funny','original meme'] },
    { id: ++gNextId, desc: 'Stonks', url: 'img/28.jpg', keywords: ['economy', 'funny'] },
    { id: ++gNextId, desc: 'That Escalated Quickly', url: 'img/29.jpg', keywords: ['tv', 'funny', 'famous'] },
    { id: ++gNextId, desc: 'Spiderman', url: 'img/30.jpg', keywords: ['tv', '2 liner','original meme'] },
];


function onInit() {
    renderGallery()
    onSearch()
    InitEditor() // Activates the Meme Editor
}


function renderGallery() {
    const strHTML = gImgs.map(function (img) {

        return `
    <div class="grid-img img-${img.id}">
    ${img.desc}<img onclick="onImgSelect(${img.id})" class="img-${img.id}" src="./${img.url}" alt="">
    </div>
    `
    })
    document.querySelector('.grid-container').innerHTML = strHTML.join('')
}


function onImgSelect(imgId) {
    const pickedMeme = gImgs.find(function (img) {
        return img.id === imgId
    })

    document.querySelector('.main-meme-editor').classList.toggle('visibility-hidden')
    setImg(pickedMeme)
    document.querySelector('.main-gallery').classList.toggle('display-none')
    document.querySelector('.main-about').classList.toggle('visibility-hidden')
    renderMeme()

}



function onSearch() {
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', filterMemes);
}

function filterMemes(ev) {
    var filterWord = ev.target.value
    var filteredImgs = gImgs.filter((img) => {
        if (img.keywords.includes(filterWord.toLowerCase())) return img

    })

    const strHTML = filteredImgs.map(function (img) {

    return `
    <div class="grid-img img-${img.id}">
    ${img.desc}<img onclick="onImgSelect(${img.id})" class="img-${img.id}" src="./${img.url}" alt="">
    </div>
    `
    })
    document.querySelector('.grid-container').innerHTML = strHTML.join('')

    if(filteredImgs.length === 0) renderGallery()
    
}
