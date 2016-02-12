var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");

var coins = [];
  

var box = {
    xPos: 20,
    yPos: 55,
    width: 20,
    height: 20,
    goLeft: false,
    goRight: false,
    goUp: false,
    goDown: false,
    move: function() {
        console.log(box.goLeft);
        if (box.goLeft && box.xPos > 0) {
            box.xPos = box.xPos - 7
        }
        if (box.goRight && box.xPos < 480) {
            box.xPos += 7
        }
        if (box.goUp && box.yPos > 0) {
            box.yPos -= 7
        }
        if (box.goDown && box.yPos < 480) {
            box.yPos += 7
        }
        console.log(box.xPos);
    },
    draw: function() {
        ctx.rect(box.xPos, box.yPos, 20, 20);
        ctx.stroke();
    }
}




document.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 37) {
        box.goLeft = true;
    }
    if (evt.keyCode === 38) {
        box.goUp = true;
    }
    if (evt.keyCode === 39) {
        box.goRight = true;
    }
    if (evt.keyCode === 40) {
        box.goDown = true;
    }

});

document.addEventListener("keyup", function(evt) {
    if (evt.keyCode === 37) {
        box.goLeft = false;
    }
    if (evt.keyCode === 38) {
        box.goUp = false;
    }
    if (evt.keyCode === 39) {
        box.goRight = false;
    }
    if (evt.keyCode === 40) {
        box.goDown = false;
    }
})

function isColliding(obj1, obj2) {
    var isAbove = obj2.yPos + obj2.height < obj1.yPos
    var isBelow = obj2.yPos > obj1.yPos + obj1.height
    var isLeft = obj2.xPos + obj2.width < obj1.xPos
    var isRight = obj2.xPos > obj1.xPos + obj1.width
    return !(isAbove || isBelow || isLeft || isRight)

}


function gameLoop() {
    ctx.beginPath();
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    
    for(var i = 0; i < coins.length; i++){
        coins[i].draw();
    
        
        if(isColliding(box, coins[i])){
            coins.splice(i, 1);
        }
    }
    box.move();
    box.draw();
    window.requestAnimationFrame(gameLoop);
}
gameLoop();
