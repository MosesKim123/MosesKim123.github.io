var requestId;
var x = -20;
var y = 55
var time = 0
var isJumping = false; //this variable is a type of boolean, and can only store values of true or false//
var jumpX = 0 //whick X position did the jump start?//
var jumpSpeed = 1     
var speed =0.6
const CYCLE =60
const GRAVITY =1
const howFar = 50


function slide(){
    stopAnimation();
    updateX()
    drawBackground();
    drawKirby2(x,y);
    requestId = requestAnimationFrame(slide)//continuing animation and calling slide functions again//
}

function updateX(){
    if (x > canvas.width/UNIT){
        x = -20;
    } else{
        x += speed;
    }

}
function walk(){
    stopAnimation();
    updateTime();
    updateX();
    drawBackground();
    animateKirby();
    requestId = requestAnimationFrame(walk)
}

function updateTime(){
    if (time >= CYCLE){
        time = 0
    }else{
        time += 1
    } 

}
function animateKirby(){
    if (0 <= time && time < CYCLE/4) {//0-14
        drawKirby4(x,y);
    }else if(CYCLE/4 <= time && time <= CYCLE*2/4){
        drawKirby3(x,y);
    }else if(CYCLE*2/4 < time && time <= CYCLE*3/4 ){
        drawKirby4(x,y);
    }else if(CYCLE*3/4 < time && time <= CYCLE){
        drawKirby3(x,y)
    }        
}


function stopAnimation(){
    cancelAnimationFrame(requestId);

}

function updateY(){
    //starting location: jumpX

    //landing location ; landX
    //peak location: peakX
    const landX = jumpX + howFar
    const peakX = (jumpX + landX) / 2

    const GRAVITY = -0.01
    if (jumpX <= x && x <= peakX) {
        y -= jumpSpeed;
        jumpSpeed -= GRAVITY;
    }else if(peakX <= x && x <= landX){
        y += jumpSpeed;
        jumpSpeed += GRAVITY;
    } else {
        y = 55;
        isJumping = false
    }
}

function startJump(){
    stopAnimation();
    isJumping = true
    jumpX = x;
    JumpKirby()

}

function JumpKirby(){
    updateY();
    updateX();
    drawBackground();
    drawKirby2(x,y);
    handleJump();

}
function handleJump() {
    if (isJumping) {
        requestId = requestAnimationFrame(JumpKirby)
    }else {
        requestId = requestAnimationFrame(walk)
    } 
}

function slowSpeed(){
    speed = 0.3
}

function normalSpeed(){
    speed = 0.6
}
    

function fastSpeed(){
    speed = 1.2
}