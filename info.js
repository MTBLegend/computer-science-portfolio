var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");

var info1 = document.getElementById("info1");


item1.addEventListener("click", function(){
    info1.innerHTML = "Downhill Mtb is a full downhill sport. The racers get paid for the races won and they race specialized bikes with lts of travel in the suspention. They have front and rear suspention.";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "Enduro Mtb is when racers have to ride up hill and down hill but it is more down hill oriented these bikes dont have as much suspention travel as DH bikes but have enough to get down the rugged hill. they have both front and rear suspention. ";
});
item3.addEventListener("click", function(){
    info1.innerHTML = "Dirt Jump Mtb is when people go off jumps and do tricks they have minimal front suspention and have no rear suspention they are bigger than bmx bikes fut smaller than regular mountain bikes so that they could move them around better.";
});
item4.addEventListener("click", function(){
    info1.innerHTML = "Cross country is when they ride on mostly on flat land but the bikes vary they all have minimal front suspention and they ether have no suspention in back or they have minimal suspention in back.";
    });