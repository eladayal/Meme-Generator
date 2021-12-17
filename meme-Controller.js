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
    const meme = getMeme()
    const memeImg = getMemeImg()

    var img = new Image();
    img.src = `./${memeImg.url}`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);

        meme.lines.map(function (line, lineIdx) {
            return drawText(line.txt, lineIdx, line.x, line.y)
        })
    };
}


function drawText(txt, idx, x, y) {
    const meme = getMeme()
    gCtx.lineWidth = 2.5;
    gCtx.textBaseline = 'top';
    gCtx.textAlign = `${meme.lines[idx].align}`;
    gCtx.strokeStyle = `${meme.lines[idx].strokeColor}`;
    gCtx.font = `${meme.lines[idx].size}px ${meme.lines[idx].font}`;
    gCtx.fillStyle = `${meme.lines[idx].color}`;
    gCtx.fillText(txt, x, y, gElCanvas.width);
    gCtx.strokeText(txt, x, y, gElCanvas.width);
}


// ADDING AND REMOVING LINES
function onAddTextLine() {

    gNumOfLines++
    if (gNumOfLines > 1) document.querySelector('.switch-btn').disabled = false
    resetLineSetting()
    addNewLine()
    renderMeme()
}


function onRemoveTextLine() {
    gNumOfLines--
    if (gNumOfLines <= 1) {
        gNumOfLines = 1
        document.querySelector('.switch-btn').disabled = true
    }

    removeLine()
    setCurrLineSettings()
    renderMeme()

}




// LINE SWITCHER
function onSwitchLines() {

    setLineIdxOnSwitch()
    setCurrLineSettings()
    const lineIdx = getMeme().selectedLineIdx
    document.querySelector('.line-num-span').innerText = lineIdx + 1

    renderMeme()

}


// Setter for inputs

function resetLineSetting() {
    document.querySelector('.line-input').value = ' '
    document.querySelector('.stroke-color-input').value = '#000000'
    document.querySelector('.color-input').value = '#ffffff'
}

function setCurrLineSettings() {
    const currLine = getLine()
    document.querySelector('.line-input').value = currLine.txt
    document.querySelector('.stroke-color-input').value = currLine.strokeColor
    document.querySelector('.color-input').value = currLine.color
}


function onLineWrite() {
    const lineInput = document.querySelector('.line-input');
    lineInput.addEventListener('input', setLineTxt);
    // renderMeme()

}


// Button Inputs
function onSetTextStroke() {
    var strokeColorInput = document.querySelector('.stroke-color-input').value
    setStrokeColor(strokeColorInput)
    renderMeme()

}


function onChangeFont() {
    var fontSelect = document.getElementById('nav-select').value
    setFont(fontSelect)
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


function onMoveTextUpDown(isUp) {

    moveTextUD(isUp)
    renderMeme()

}


function onMoveTextLftRgt(isLeft) {
    moveTextLR(isLeft)
    renderMeme()
}

// Download meme

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'Gen-X meme';
  }