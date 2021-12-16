// MEME CONTROLLER
function renderMeme() {

    const currMeme = getMeme()
    const memeImg = getMemeImg()
    var memeData = currMeme.lines
    // const lineIdx = currMeme.selectedLineIdx
    // console.log('lineIdx:', lineIdx);
    
    // console.log('currMeme Line:', memeData[lineIdx]);
    // console.log('currMemeWHOLE:', currMeme); // try to do somthing like  memeData = currMeme.lines[0]

    memeData.map(function (line) {

        var img = new Image();
        img.src = `./${memeImg.url}`;
        img.onload = () => {
            gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
            drawText(line.txt, line.color, line.size, line.align, gElCanvas.width / 2, gElCanvas.height / 10)

        };
    })
}
