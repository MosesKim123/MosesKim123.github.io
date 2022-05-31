function drawBricks(x,y,number){
    for(i = 0; i<number; i++){
        draw.save();
        draw.translate(x*UNIT+16*UNIT*i,y*UNIT)
        drawBrick();
        draw.restore();
    }
}
    
function drawBackground(){
drawSky();
drawBricks(0,70,20);


}



function drawBrick(){
draw.fillStyle = "#BA5425"
draw.fillRect(0,0,16*UNIT,16*UNIT);
draw.fillStyle = "#F2BEB3"
draw.fillRect(1*UNIT,0*UNIT,8*UNIT,1*UNIT);
draw.fillRect(11*UNIT,0*UNIT,4*UNIT,1*UNIT);
draw.fillRect(0*UNIT,1*UNIT,1*UNIT,9*UNIT);
draw.fillRect(0*UNIT,11*UNIT,1*UNIT,4*UNIT);
draw.fillRect(0*UNIT,1*UNIT,1*UNIT,9*UNIT);
draw.fillRect(10*UNIT,1*UNIT,1*UNIT,4*UNIT);
draw.fillRect(1*UNIT,11*UNIT,1*UNIT,1*UNIT);
draw.fillRect(2*UNIT,12*UNIT,2*UNIT,1*UNIT);
draw.fillRect(4*UNIT,13*UNIT,4*UNIT,1*UNIT);
draw.fillRect(10*UNIT,6*UNIT,5*UNIT,1*UNIT);
draw.fillRect(10*UNIT,7*UNIT,1*UNIT,3*UNIT);
draw.fillRect(9*UNIT,10*UNIT,1*UNIT,2*UNIT);
draw.fillRect(8*UNIT,12*UNIT,1*UNIT,4*UNIT);
draw.fillStyle = "black"
draw.fillRect(9*UNIT,0*UNIT,1*UNIT,10*UNIT);
draw.fillRect(8*UNIT,10*UNIT,1*UNIT,2*UNIT);
draw.fillRect(7*UNIT,12*UNIT,1*UNIT,3*UNIT);
draw.fillRect(4*UNIT,12*UNIT,3*UNIT,1*UNIT);
draw.fillRect(2*UNIT,11*UNIT,2*UNIT,1*UNIT);
draw.fillRect(0*UNIT,10*UNIT,2*UNIT,1*UNIT);
draw.fillRect(1*UNIT,15*UNIT,6*UNIT,1*UNIT);
draw.fillRect(15*UNIT,1*UNIT,1*UNIT,4*UNIT);
draw.fillRect(11*UNIT,4*UNIT,1*UNIT,1*UNIT);
draw.fillRect(15*UNIT,6*UNIT,1*UNIT,9*UNIT);
draw.fillRect(11*UNIT,5*UNIT,4*UNIT,1*UNIT);
draw.fillRect(14*UNIT,14*UNIT,1*UNIT,1*UNIT);
draw.fillRect(9*UNIT,15*UNIT,6*UNIT,1*UNIT);
}

function drawSky(){
    draw.fillStyle = "gray"
    draw.fillRect(0*UNIT,0*UNIT,canvas.width,canvas.height)
}


