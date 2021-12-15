'use strict'

var gElCanvas;
var gCtx;



function InitEditor() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    renderCanvas()
    // renderMeme()

}





function renderCanvas() {
    gCtx.fillStyle = 'white'
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    // console.log('elContainer.offsetWidth:', elContainer.offsetWidth);

    gElCanvas.height = elContainer.offsetHeight
    // console.log('elContainer.offsetHeight:', elContainer.offsetHeight);


}


function renderMeme() {

    const CurrMeme = getMeme()
    const memeImg = getMemeImg()
    // console.log('memeImg:', memeImg.url);
    var memeData = CurrMeme.lines

    memeData.forEach(function (line) {

        var img = new Image();
        img.src = `./${memeImg.url}`;
        img.onload = () => {
            gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
            drawText(line.txt , gElCanvas.width / 2, gElCanvas.height / 10)

        };
    })
}


function drawText(txt, x, y) {
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = '#000';
    gCtx.font = '45px Impact';
    gCtx.fillStyle = '#fff';
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);
}

onLineWrite()
function onLineWrite(){
const lineInput = document.querySelector('.line-input');
lineInput.addEventListener('input', setLineTxt);
}


