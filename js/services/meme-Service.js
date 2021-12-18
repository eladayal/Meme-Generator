'use strict'

var gCurrMeme;

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            id: makeId(),
            txt: 'Write Somthing',
            size: 45,
            align: 'center',
            color: '#ffffff',
            font: 'Impact',
            strokeColor: '#000000',
            y: 40,
            x: 300
        },
    ]
}


function addNewLine() {
    const newLine = {
        id: makeId(),
        txt: 'Write Somthing',
        size: 45,
        align: 'center',
        color: '#ffffff',
        font: 'Impact',
        strokeColor: '#000000',
        y: (gMeme.lines.length > 1) ? 250 : 480,
        x: 300
    }

    gMeme.lines.push(newLine)
    gMeme.selectedLineIdx = (gMeme.lines.length - 1)
}



function removeLine() {
    const lineIdx = gMeme.selectedLineIdx
    if(gMeme.lines.length === 1)return
    gMeme.lines.splice(lineIdx, 1)
    if (gMeme.selectedLineIdx > gMeme.lines.length) gMeme.selectedLineIdx--
    if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx = 0
}

function setLineIdxOnSwitch() {

    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx > gMeme.lines.length) gMeme.selectedLineIdx--
    if (gMeme.selectedLineIdx === gMeme.lines.length) gMeme.selectedLineIdx = 0
    console.log('gMeme.selectedLineIdx:', gMeme.selectedLineIdx);
    renderMeme()
}


function getMemeImg() {
    return gCurrMeme
}

function getMeme() {
    return gMeme
}


function getLine() {
    const lineIdx = gMeme.selectedLineIdx
    return gMeme.lines[lineIdx]
}

function setImg(meme) {
    gCurrMeme = meme
    gMeme.selectedImgId = gCurrMeme.id
}


function setLineTxt(ev) {
    var newText = ev.target.value
    var line = getLine()
    line.txt = newText
    renderMeme()
}


// Text font settings
function setFont(fontSelect) {
    var line = getLine()
    line.font = fontSelect
}


function setStrokeColor(color) {
    var line = getLine()
    line.strokeColor = color
}


function setTextColor(color) {
    var line = getLine()
    line.color = color
}


function IncreaseFontSize() {
    var line = getLine()
    line.size += 3
}


function DecreaseFontSize() {
    var line = getLine()
    line.size -= 3
}


// Text movement and Directions

function moveTextUD(isUp) {
    var line = getLine()
    if (isUp) {
        line.y -= 10
    } else {
        line.y += 10

    }
}


function moveTextLR(isLeft) {
    var line = getLine()
    if (isLeft) {
        line.x -= 25
    } else {
        line.x += 25

    }
}


function setTextDirec(direction) {
    var line = getLine()
    line.align = direction
}