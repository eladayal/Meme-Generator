'use strict'

var gCurrMeme;

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            id:makeId(),
            txt: 'Expample Line',
            size: 45,
            align: 'center',
            color: 'white',
            strokeColor: 'black',
            lineHeight: 0
        },
    
    ]
}




function addNewLine() {
    const newLine = {
        id:makeId(),
        txt: 'Expample Line',
        size: 45,
        align: 'center',
        color: 'white',
        strokeColor: 'black',
        lineHeight: 0
    }

    gMeme.lines.push(newLine)
}


// function removeLine(){
// const selected

//     gMeme.line
// }


function setLineIdx(NumOfLines){

if( gMeme.selectedLineIdx === 0)  gMeme.selectedLineIdx++
console.log('selectedLineIdx:',     gMeme.selectedLineIdx);


console.log('gMeme.lines.length:', gMeme.lines.length);

}


function getMemeImg() {
    return gCurrMeme
}

function getMeme() {
    return gMeme
}

function setImg(meme) {
    gCurrMeme = meme
    gMeme.selectedImgId = gCurrMeme.id

}

function setStrokeColor(color) {
    var line = getLine()
        line.strokeColor = color
}


function setTextColor(color) {
    var line = getLine()
        line.color = color
}


function IncreaseFontSize(){
    var line = getLine()
    line.size += 3
}


function DecreaseFontSize(){
    var line = getLine()
    line.size -= 3
}



function setLineTxt(ev) {
    var newText = ev.target.value
    var line = getLine()
    line.txt = newText
    renderMeme()

}

// MOVE LINES UP DOWN

function moveText(isUp){
    var line = getLine()
    if(isUp){
    line.lineHeight += 100
    } else{
        line.lineHeight -= 100

    }
}




function setTextDirec(direction) {

    var line = getLine()
        line.align = direction
}


function getLine() {
    const lineIdx = gMeme.selectedLineIdx

    return gMeme.lines[lineIdx]

}