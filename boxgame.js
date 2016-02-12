var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d");

var coins = [];

for(var i = 0; i < 1000; i++){
    var rand1=Math.floor(Math.random() * (mycanvas.width - 10 ) )
    var rand2=Math.floor(Math.random() * (mycanvas.height - 10) )
    coins.push(new Coin(rand1,rand2)) 
}
  
var name = prompt("What is your name")


var box = {
    xPos: 20,
    yPos: 55,
    width: 20,
    height: 20,
    speed: 3,
    fontsize:15,
    goLeft: false,
    goRight: false,
    goUp: false,
    goDown: false,
    move: function() {
        console.log(box.goLeft);
        if (box.goLeft && box.xPos > 0) {
            box.xPos = box.xPos - box.speed
        }
        if (box.goRight && box.xPos + box.width < mycanvas.width) {
            box.xPos += box.speed
        }
        if (box.goUp && box.yPos > 0) {
            box.yPos -= box.speed
        }
        if (box.goDown && box.yPos + box.height < mycanvas.height) {
            box.yPos += box.speed
        }
        console.log(box.xPos);
    },
    draw: function() {
        ctx.rect(box.xPos, box.yPos, box.height, box.width);
        ctx.stroke();
        ctx.font= this.fontsize+"px Georgia";
        ctx.fillText(name,box.xPos,box.yPos + box.height / 2);
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



function Coin(x, y) {
    this.color = '#' + (function co(lor){   return (lor +=
  [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
  && (lor.length == 6) ?  lor : co(lor); })('');
    this.xPos = x;
    this.yPos = y;
    this.width = 10;
    this.height = 10;
    this.draw = function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
        ctx.stroke();
        
    }

}

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
            box.speed-=.0001
            box.height+=.05
            box.width+=.05
            box.fontsize+=.01
            coins.splice(i, 1);
        }
       
    }
function askName(){
    
}
    box.move();
    box.draw();
    box.move();
    box.draw();
    window.requestAnimationFrame(gameLoop);
}
gameLoop();
