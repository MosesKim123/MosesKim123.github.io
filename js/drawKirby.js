function drawKirby(x,y){
    draw.save();
    draw.translate(x*UNIT,y*UNIT);
    drawBlack();
    drawLightPink();
    drawPink();
    draw.restore();
} 


function drawLightPink() {
    draw.fillStyle = "#ffa6c9"
    draw.fillRect(6 * UNIT, 1 * UNIT, 5 * UNIT, 13 * UNIT);
    draw.fillRect(11 * UNIT, 2 * UNIT, 2 * UNIT, 3 * UNIT);
    draw.fillRect(1 * UNIT, 6 * UNIT, 14 * UNIT, 5 * UNIT);
    draw.fillRect(4 * UNIT, 2 * UNIT, 2 * UNIT, 4 * UNIT);
    draw.fillRect(3 * UNIT, 3 * UNIT, 1 * UNIT, 3 * UNIT);
    draw.fillRect(1 * UNIT, 6 * UNIT, 14 * UNIT, 5 * UNIT);
    draw.fillRect(2 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(11 * UNIT, 5 * UNIT, 2 * UNIT, 8 * UNIT);
    draw.fillRect(5 * UNIT, 11 * UNIT, 1 * UNIT, 3 * UNIT);
    draw.fillRect(2 * UNIT, 11 * UNIT, 2 * UNIT, 1 * UNIT);
    draw.fillRect(4 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillStyle = "black"
    draw.fillRect(11 * UNIT, 5 * UNIT, 1 * UNIT, 4 * UNIT);
    draw.fillRect(9 * UNIT, 5 * UNIT, 1 * UNIT, 4 * UNIT);
    draw.fillRect(10 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
}
function drawBlack() {
    draw.fillStyle = "black"
    draw.fillRect(6 * UNIT, 0 * UNIT, 5 * UNIT, 1 * UNIT);
    draw.fillRect(4 * UNIT, 1 * UNIT, 2 * UNIT, 1 * UNIT);
    draw.fillRect(3 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(2 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    draw.fillRect(1 * UNIT, 5 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(0 * UNIT, 6 * UNIT, 1 * UNIT, 5 * UNIT);
    draw.fillRect(1 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(2 * UNIT, 12 * UNIT, 2 * UNIT, 1 * UNIT);
    draw.fillRect(4 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(3 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT);
    draw.fillRect(2 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(1 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(1 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(2 * UNIT, 16 * UNIT, 5 * UNIT, 1 * UNIT);
    draw.fillRect(5 * UNIT, 14 * UNIT, 7 * UNIT, 1 * UNIT);
    draw.fillRect(1 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(7 * UNIT, 15 * UNIT, 4 * UNIT, 1 * UNIT);
    draw.fillRect(10 * UNIT, 16 * UNIT, 5 * UNIT, 1 * UNIT);
    draw.fillRect(15 * UNIT, 15 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(14 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(12 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT);
    draw.fillRect(13 * UNIT, 11 * UNIT, 1 * UNIT, 2 * UNIT);
    draw.fillRect(14 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(15 * UNIT, 6 * UNIT, 1 * UNIT, 6 * UNIT);
    draw.fillRect(14 * UNIT, 4 * UNIT, 1 * UNIT, 2 * UNIT);
    draw.fillRect(13 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    draw.fillRect(11 * UNIT, 1 * UNIT, 2 * UNIT, 1 * UNIT);
}
function drawPink(){
    draw.fillStyle = "#d74894"
    draw.fillRect(2*UNIT,15*UNIT,5*UNIT,1*UNIT);
    draw.fillRect(3*UNIT,14*UNIT,2*UNIT,1*UNIT);
    draw.fillRect(11*UNIT,15*UNIT,4*UNIT,1*UNIT);
    draw.fillRect(12*UNIT,14*UNIT,2*UNIT,1*UNIT);
    draw.fillRect(6*UNIT,1*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(10*UNIT,1*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(12*UNIT,2*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(13*UNIT,4*UNIT,1*UNIT,2*UNIT);
    draw.fillRect(12*UNIT,9*UNIT,2*UNIT,1*UNIT);
    draw.fillRect(13*UNIT,10*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(14*UNIT,11*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(12*UNIT,12*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(11*UNIT,13*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(4*UNIT,2*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(3*UNIT,3*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(1*UNIT,6*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(1*UNIT,10*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(2*UNIT,11*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(4*UNIT,10*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(4*UNIT,12*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(5*UNIT,13*UNIT,2*UNIT,1*UNIT);
    draw.fillRect(6*UNIT,9*UNIT,2*UNIT,1*UNIT);
}
function drawKirby2(x,y){
    draw.save();
    draw.translate(x*UNIT,y*UNIT)
    draw.fillStyle = "#ffa6c9"
    draw.fillRect(6 * UNIT, 1 * UNIT, 5 * UNIT, 12 * UNIT);
    draw.fillRect(2* UNIT, 4 * UNIT, 13 * UNIT, 6 * UNIT);
    draw.fillRect(4 * UNIT, 2 * UNIT, 9 * UNIT, 10 * UNIT);
    draw.fillRect(15 * UNIT, 4 * UNIT, 1 * UNIT, 3 * UNIT);

    draw.fillStyle = "#d74894"
    draw.fillRect(6 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(10 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(4 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(12 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(2 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(5 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(13 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(2 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(6 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT);
    draw.fillRect(12 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT);
    draw.fillRect(15 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(4 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(3 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(13 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(12 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(6 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(10 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(2 * UNIT, 10 * UNIT, 2 * UNIT, 4 * UNIT);
    draw.fillRect(4 * UNIT, 12 * UNIT, 2 * UNIT, 3 * UNIT);
    draw.fillRect(11 * UNIT, 12 * UNIT, 5 * UNIT, 2 * UNIT);
    draw.fillRect(14 * UNIT, 11 * UNIT, 2 * UNIT, 1 * UNIT);
draw.fillStyle = "black"
draw.fillRect(6 * UNIT, 0 * UNIT, 5 * UNIT, 1 * UNIT);
draw.fillRect(4 * UNIT, 1 * UNIT, 2 * UNIT, 1 * UNIT);
draw.fillRect(3 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
draw.fillRect(13 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
draw.fillRect(11 * UNIT, 1 * UNIT, 2 * UNIT, 1 * UNIT);
draw.fillRect(2 * UNIT, 3 * UNIT, 3 * UNIT, 1 * UNIT);
draw.fillRect(1 * UNIT, 4 * UNIT, 1 * UNIT, 4 * UNIT);
draw.fillRect(2 * UNIT, 8 * UNIT, 2 * UNIT, 1 * UNIT);
draw.fillRect(2 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
draw.fillRect(1 * UNIT, 10 * UNIT, 1 * UNIT, 2 * UNIT);
draw.fillRect(3 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
draw.fillRect(4 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
draw.fillRect(2 * UNIT, 12 * UNIT, 1 * UNIT, 2 * UNIT);
draw.fillRect(5 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
draw.fillRect(3 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
draw.fillRect(4 * UNIT, 15 * UNIT, 2 * UNIT, 1 * UNIT);
draw.fillRect(6 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
draw.fillRect(6 * UNIT, 13 * UNIT, 5 * UNIT, 1 * UNIT);
draw.fillRect(11 * UNIT, 12 * UNIT, 2 * UNIT, 1 * UNIT);
draw.fillRect(11 * UNIT, 14 * UNIT, 3 * UNIT, 1 * UNIT);
draw.fillRect(13 * UNIT, 10 * UNIT, 1 * UNIT, 2 * UNIT);
draw.fillRect(14 * UNIT, 13 * UNIT, 2 * UNIT, 1 * UNIT);
draw.fillRect(14 * UNIT, 10 * UNIT, 2 * UNIT, 1 * UNIT);
draw.fillRect(16 * UNIT, 11 * UNIT, 1 * UNIT, 2 * UNIT);
draw.fillRect(14 * UNIT, 3 * UNIT, 1 * UNIT, 7 * UNIT);
draw.fillRect(15 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
draw.fillRect(16 * UNIT, 4 * UNIT, 1 * UNIT, 4 * UNIT);
draw.fillRect(15 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
draw.fillRect(11 * UNIT, 4 * UNIT, 1 * UNIT, 3 * UNIT);
draw.fillRect(9* UNIT, 4 * UNIT, 1 * UNIT, 3 * UNIT);
draw.fillRect(10 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
draw.restore()
}

function drawKirby3(x,y){
    draw.save()
    draw.translate(x*UNIT,y*UNIT)
    draw.fillStyle = "#ffa6c9"
    draw.fillRect(4 * UNIT, 1 * UNIT, 8 * UNIT, 11 * UNIT);
    draw.fillRect(2 * UNIT, 2 * UNIT, 11 * UNIT, 8 * UNIT);
    draw.fillRect(1 * UNIT, 5 * UNIT, 1 * UNIT, 3 * UNIT);

    draw.fillStyle = "#d74894"
    draw.fillRect(5 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(10 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(3 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(2 * UNIT, 3 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(4 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(6 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT);
    draw.fillRect(12 * UNIT, 7 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(1 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(2 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(4 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(5 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(12 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(11 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(4 * UNIT, 12 * UNIT, 7 * UNIT, 2 * UNIT);

    draw.fillStyle = "black"
    draw.fillRect(5 * UNIT, 0 * UNIT, 6 * UNIT, 1 * UNIT);
    draw.fillRect(3 * UNIT, 1 * UNIT, 2 * UNIT, 1 * UNIT);
    draw.fillRect(2 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(12 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    draw.fillRect(11 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(13 * UNIT, 4 * UNIT, 1 * UNIT, 7 * UNIT);
    draw.fillRect(14 * UNIT, 5 * UNIT, 1 * UNIT, 5 * UNIT);
    draw.fillRect(12 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(11 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(9 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(9 * UNIT, 4 * UNIT, 1 * UNIT, 3 * UNIT);
    draw.fillRect(11 * UNIT, 4 * UNIT, 1 * UNIT, 3 * UNIT);
    draw.fillRect(10 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(5 * UNIT, 12 * UNIT, 7 * UNIT, 1 * UNIT);
    draw.fillRect(5 * UNIT, 14 * UNIT, 6 * UNIT, 1 * UNIT);
    draw.fillRect(4 * UNIT, 8 * UNIT, 1 * UNIT, 2 * UNIT);
    draw.fillRect(4 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(4 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(3 * UNIT, 10 * UNIT, 1 * UNIT, 3 * UNIT);
    draw.fillRect(2 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(1 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(0 * UNIT, 5 * UNIT, 1 * UNIT, 4 * UNIT);
    draw.fillRect(1 * UNIT, 3 * UNIT, 1 * UNIT, 2 * UNIT);
    draw.restore()
    
}

function drawKirby4(x,y){
draw.save();
draw.translate(x*UNIT, y*UNIT);
    draw.fillStyle = "#ffa6c9"
    draw.fillRect(3 * UNIT, 1 * UNIT, 9 * UNIT, 11 * UNIT);
    draw.fillRect(2 * UNIT, 4 * UNIT, 11 * UNIT, 7 * UNIT);
    draw.fillRect(6 * UNIT, 12 * UNIT, 4 * UNIT, 1 * UNIT);
    draw.fillStyle = "#d74894"
    draw.fillRect(5 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(9 * UNIT, 1 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(3 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(11 * UNIT, 2 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(2 * UNIT, 4 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(2 * UNIT, 8 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(3 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(5 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(9 * UNIT, 7 * UNIT, 2 * UNIT, 1 * UNIT);
    draw.fillRect(5 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(12 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(11 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(4 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(1 * UNIT, 10 * UNIT, 3 * UNIT, 4 * UNIT);
    draw.fillRect(10 * UNIT, 12 * UNIT, 5 * UNIT, 3 * UNIT);
    draw.fillStyle = "black"
    draw.fillRect(5 * UNIT, 0 * UNIT, 5 * UNIT, 1 * UNIT);
    draw.fillRect(3 * UNIT, 1 * UNIT, 2 * UNIT, 1 * UNIT);
    draw.fillRect(2 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    draw.fillRect(1 * UNIT, 4 * UNIT, 1 * UNIT, 5 * UNIT);
    draw.fillRect(0* UNIT,  9 * UNIT, 3 * UNIT, 1 * UNIT);
    draw.fillRect(0 * UNIT, 10 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(2 * UNIT, 10 * UNIT, 4 * UNIT, 1 * UNIT);
    draw.fillRect(0 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(3 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(0 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(4 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(1 * UNIT, 13 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(2 * UNIT, 14 * UNIT, 2 * UNIT, 1 * UNIT);
    draw.fillRect(4 * UNIT, 13 * UNIT, 7 * UNIT, 1 * UNIT);
    draw.fillRect(9 * UNIT, 14 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(6 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(7 * UNIT, 7 * UNIT, 1 * UNIT, 2 * UNIT);
    draw.fillRect(6 * UNIT, 6 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(10 * UNIT, 15 * UNIT, 5 * UNIT, 1 * UNIT);
    draw.fillRect(15 * UNIT, 13 * UNIT, 1 * UNIT, 2 * UNIT);
    draw.fillRect(14 * UNIT, 12 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(11 * UNIT, 12 * UNIT, 2 * UNIT, 1 * UNIT);
    draw.fillRect(12 * UNIT, 11 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.fillRect(13 * UNIT, 4 * UNIT, 1 * UNIT, 8 * UNIT);
    draw.fillRect(12 * UNIT, 2 * UNIT, 1 * UNIT, 2 * UNIT);
    draw.fillRect(10 * UNIT, 1 * UNIT, 2 * UNIT, 1 * UNIT);
    draw.fillRect(11 * UNIT, 4 * UNIT, 1 * UNIT, 3 * UNIT);
    draw.fillRect(11 * UNIT, 9 * UNIT, 1 * UNIT, 1 * UNIT);
    draw.restore();
    
   
}