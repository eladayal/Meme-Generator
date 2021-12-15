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

    const currMeme = getMeme()
    const memeImg = getMemeImg()
    var memeData = currMeme.lines

    memeData.forEach(function (line) {

        var img = new Image();
        img.src = `./${memeImg.url}`;
        img.onload = () => {
            gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
            drawText(line.txt, line.color,line.size, gElCanvas.width / 2, gElCanvas.height / 10)

        };
    })
}


function drawText(txt, color,size, x, y) {
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.lineWidth = 2.5;
    gCtx.strokeStyle = '#000';
    gCtx.font = `${size}px Impact`;
    gCtx.fillStyle = color;
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);
}

onLineWrite()
function onLineWrite() {
    const lineInput = document.querySelector('.line-input');
    lineInput.addEventListener('input', setLineTxt);
}

function onSetTextColor() {
    var txtColorInput = document.querySelector('.color-input').value
    setTextColor(txtColorInput)
}

function onIncreaseFontSize(){
    var currMeme = getMeme()
    var memeData = currMeme.lines

      memeData.forEach(function (line) {
        return line.size += 3

    })
    renderMeme() 
}

function onDecreaseFontSize(){
    var currMeme = getMeme()
    var memeData = currMeme.lines

      memeData.forEach(function (line) {
        return line.size -= 3

    })
    renderMeme() 
}