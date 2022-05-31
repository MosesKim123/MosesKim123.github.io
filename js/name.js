function drawName(){
    draw.save(); //starting translation
    draw.translate(10*UNIT,10*UNIT);
    drawK()
    drawI()
    drawM()
    draw.restore();
}
 


function drawK() {
    draw.fillRect(0*UNIT,0*UNIT,1*UNIT,7*UNIT);
    draw.fillRect(1*UNIT,3*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(2*UNIT,2*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(3*UNIT,1*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(4*UNIT,0*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(2*UNIT,4*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(3*UNIT,5*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(4*UNIT,6*UNIT,1*UNIT,1*UNIT);
}

function drawI() {
    draw.fillRect(6*UNIT,0*UNIT,3*UNIT,1*UNIT);
    draw.fillRect(7*UNIT,1*UNIT,1*UNIT,5*UNIT);
    draw.fillRect(6*UNIT,6*UNIT,3*UNIT,1*UNIT);
}

function drawM() {
    draw.fillRect(10*UNIT,0*UNIT,1*UNIT,7*UNIT);
    draw.fillRect(11*UNIT,1*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(12*UNIT,2*UNIT,1*UNIT,2*UNIT);
    draw.fillRect(13*UNIT,1*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(14*UNIT,0*UNIT,1*UNIT,7*UNIT);
}
