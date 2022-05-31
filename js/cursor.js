function drawCursor(){
   drawLeft()
   drawRight()
   drawBottom()
}

function drawLeft() {
    draw.fillRect(6*UNIT,5*UNIT,1*UNIT,17*UNIT);
 
 }
 
 function drawRight() {
    draw.fillRect(7*UNIT,6*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(8*UNIT,7*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(9*UNIT,8*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(10*UNIT,9*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(11*UNIT,10*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(12*UNIT,11*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(13*UNIT,12*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(14*UNIT,13*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(15*UNIT,14*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(16*UNIT,15*UNIT,1*UNIT,1*UNIT);
 }
 
 function drawBottom() {
    draw.fillRect(13*UNIT,16*UNIT,5*UNIT,1*UNIT);
    draw.fillRect(13*UNIT,16*UNIT,1*UNIT,3*UNIT);
    draw.fillRect(14*UNIT,19*UNIT,1*UNIT,2*UNIT);
    draw.fillRect(15*UNIT,21*UNIT,1*UNIT,2*UNIT);
    draw.fillRect(16*UNIT,23*UNIT,1*UNIT,2*UNIT);
    draw.fillRect(14*UNIT,25*UNIT,2*UNIT,1*UNIT);
    draw.fillRect(13*UNIT,23*UNIT,1*UNIT,2*UNIT);
    draw.fillRect(12*UNIT,21*UNIT,1*UNIT,2*UNIT);
    draw.fillRect(11*UNIT,19*UNIT,1*UNIT,2*UNIT);
    draw.fillRect(10*UNIT,17*UNIT,1*UNIT,2*UNIT);
    draw.fillRect(9*UNIT,18*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(8*UNIT,19*UNIT,1*UNIT,1*UNIT);
    draw.fillRect(7*UNIT,20*UNIT,1*UNIT,1*UNIT);
 }