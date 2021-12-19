'use strict'

var gElCanvas;
var gCtx;

var gNumOfLines = 1


function initEditor() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')

    renderCanvas()
    addListeners()
}


function renderCanvas() {
    gCtx.fillStyle = 'white'
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth - 80
    gElCanvas.height = elContainer.offsetHeight - 80
}



function addListeners() {
    if (document.querySelector('.main-meme-editor').classList.contains('display-none')) return
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderCanvas()
        renderMeme()
    })
}


function renderMeme() {
    const meme = getMeme()
    const memeImg = getMemeImg()

    var img = new Image();
    img.src = `./${memeImg.url}`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        meme.lines.forEach(function (line, lineIdx) {

            drawText(line.txt, lineIdx, line.x, line.y)
            if (meme.selectedLineIdx === lineIdx) markSelectedLine(line.txt, line.x, line.y, line.size)

        })
    };
}


function drawText(txt, idx, x, y) {
    const meme = getMeme()

    gCtx.lineWidth = 2.5;

    gCtx.textAlign = `${meme.lines[idx].align}`;
    gCtx.strokeStyle = `${meme.lines[idx].strokeColor}`;
    gCtx.font = `${meme.lines[idx].size}px ${meme.lines[idx].font}`;
    gCtx.fillStyle = `${meme.lines[idx].color}`;
    gCtx.fillText(txt, x, y, gElCanvas.width);
    gCtx.strokeText(txt, x, y, gElCanvas.width);
}

function markSelectedLine(txt, x, y, size) {
    let height = size
    let width = gCtx.measureText(txt).width;

    let xStart = x - width / 2 - 10
    let yStart = y - height
    let xEnd = width + 20
    let yEnd = height + 10

    gCtx.beginPath();
    gCtx.strokeStyle = "#ffffff96";
    gCtx.rect(xStart, yStart, xEnd, yEnd);
    gCtx.stroke();
    gCtx.closePath()
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


function onLineWrite(ev) {
    setLineTxt(ev)
    renderMeme()
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


// Pick a diffrent meme
function onPickDiffMeme() {
    document.querySelector('.main-meme-editor').classList.toggle('display-none')
    document.querySelector('.main-gallery').classList.toggle('display-none')
    document.querySelector('.main-about').classList.toggle('display-none')
}