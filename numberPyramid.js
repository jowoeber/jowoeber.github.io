var c = document.getElementById("numberPyramidCanvas");
var ctx = c.getContext("2d");



function drawSquare( posX, posY, number){

    squareSize = 30

    ctx.lineWidth = 2;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowColor = "transparent";

    ctx.strokeRect(posX-squareSize/2,posY- squareSize/2,squareSize, squareSize);
    ctx.textBaseline = 'middle';
    ctx.textAlign = "center";
    ctx.font = "14px sans-serif";
    ctx.fillText(number.toString(), posX, posY);

}

drawSquare(100,100,30)