// MEME CONTROLLER
function renderMeme() {

    const currMeme = getMeme()
    const memeImg = getMemeImg()
    var currLine = getLine()
    const lineIdx = currMeme.selectedLineIdx

    var img = new Image();
    img.src = `./${memeImg.url}`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);

        currMeme.lines.map(function (line) {
            console.log('line:', line);
            drawText(currLine.txt, currLine.color, currLine.size, currLine.align, currLine.strokeColor, (gElCanvas.width - currLine.lineWidth) / 2, (gElCanvas.height - currLine.lineHeight) / 10)




        })


    };

}



function drawText(txt, color, size, align, strokeColor, x, y) {
    // var lineHeight = size * 1.286;
    // console.log('x:', x);
    // console.log('y:', y);
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


switch (lineIdx) {
    case 0:
        drawText(currLine.txt, currLine.color, currLine.size, currLine.align, currLine.strokeColor, gElCanvas.width / 2, (gElCanvas.height - currLine.lineHeight) / 10)

        break;

    case 1:
        drawText(currLine.txt, currLine.color, currLine.size, currLine.align, currLine.strokeColor, gElCanvas.width / 2, gElCanvas.height / 1.1)
        break;
}