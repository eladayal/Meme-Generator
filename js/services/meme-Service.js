'use strict'

var gCurrMeme;

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Expample Line',
            size: 45,
            align: 'left',
            color: 'white'
        }
    ]
}






function getMemeImg(){
    return gCurrMeme
}

function getMeme(){
return gMeme
}


function setTextColor(color){
    var newTextColor = color    
    gMeme.lines.map(function(line){
        line.color = newTextColor
    })
    renderMeme() 
}

function setImg(meme){
gCurrMeme = meme
console.log('currMeme:', gCurrMeme);
gMeme.selectedImgId = gCurrMeme.id

}


function setLineTxt(ev){
    var newText = ev.target.value

    gMeme.lines.map(function(line){
        line.txt = newText
    })
    renderMeme() 
    }