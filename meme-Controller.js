'use strict'

var gElCanvas;
var gCtx;

var gNumOfLines = 1


function InitEditor() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()
    renderCanvas()
    // renderMeme()
    onLineWrite()
}


function renderCanvas() {
    gCtx.fillStyle = 'white'
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}


function renderMeme() {

    const currMeme = getMeme()
    const memeImg = getMemeImg()
    var currLine = getLine()
    // const lineIdx = currMeme.selectedLineIdx
    // console.log('lineIdx:', lineIdx);
    // console.log('currLine:', currLine);
    // console.log('currMeme:', currMeme);

    var img = new Image();
    img.src = `./${memeImg.url}`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(currLine.txt, currLine.color, currLine.size, currLine.align, currLine.strokeColor, gElCanvas.width /2, (gElCanvas.height - currLine.lineHeight) / 10 )
        // drawText2(currLine.txt, currLine.color, currLine.size, currLine.align, currLine.strokeColor, gElCanvas.width / 2, gElCanvas.height / 1.1)

    };

}



function drawText(txt, color, size, align, strokeColor, x, y) {
    // var lineHeight = size * 1.286;
console.log('x:', x);
console.log('y:', y);


    gCtx.textBaseline = 'top';
    gCtx.textAlign = align;
    gCtx.lineWidth = 2.5;
    gCtx.strokeStyle = strokeColor;
    gCtx.font = `${size}px Impact`;
    gCtx.fillStyle = color;
    gCtx.fillText(txt, x, y, gElCanvas.width);
    gCtx.strokeText(txt, x, y, gElCanvas.width);
    // gCtx.strokeRect(x-150, y, x, lineHeight);

}



// ADDING AND REMOVING LINES
function onAddTextLine() {
    gNumOfLines++
    if (gNumOfLines > 1) document.querySelector('.switch-btn').disabled = false
    addNewLine()

}


function onRemoveTextLine() {
    gNumOfLines--
    if (gNumOfLines <= 1) {
        gNumOfLines = 1
        document.querySelector('.switch-btn').disabled = true
    }

    // removeLine()
}

// LINE SWITCHER
function onSwitchLines() {

    setLineIdx(gNumOfLines)
    renderMeme()

}



function onLineWrite() {
    const lineInput = document.querySelector('.line-input');
    lineInput.addEventListener('input', setLineTxt);

}


function onSetTextStroke() {
    var strokeColorInput = document.querySelector('.stroke-color-input').value
    console.log('strokeColorInput:', strokeColorInput);
    setStrokeColor(strokeColorInput)
    renderMeme()

}


function onSetTextColor() {
    var txtColorInput = document.querySelector('.color-input').value
    setTextColor(txtColorInput)
    renderMeme()
}

function onIncreaseFontSize() {
    IncreaseFontSize()
    renderMeme()
}

function onDecreaseFontSize() {
    DecreaseFontSize()
    renderMeme()
}


function onTextDirection(direction) {
    setTextDirec(direction)
    renderMeme()

}

function onMoveText(isUp){

    moveText(isUp)
    renderMeme()

}