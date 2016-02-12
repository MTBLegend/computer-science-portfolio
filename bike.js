var dropdown = document.getElementById("dropdown");
var V10 = document.getElementById("v10")
var Nomad = document.getElementById("nomad")
var Jackall = document.getElementById("jackall")

var backwheel = document.getElementById("backwheel");
var rearbrake = document.getElementById("rearbrake");
var rearderailleur1 = document.getElementById("rearderailleur1");
var rearderailleur2 = document.getElementById("rearderailleur2");
var frontwheel = document.getElementById("frontwheel");
var frontbrake = document.getElementById("frontbrake");
var saddle = document.getElementById("saddle");
var crank = document.getElementById("crank");
var handlebars = document.getElementById("handlebars");
var rearshock = document.getElementById("rearshock");
var fork = document.getElementById("fork")
var seatpost = document.getElementById("seatpost")
var reartriangle = document.querySelectorAll("div.reartriangle");
var frames = document.querySelectorAll("div.frame");
var textbox = document.getElementById("textbox");
var chain1 = document.getElementById("chain1");
var chain2 = document.getElementById("chain2");

var backwheel1 = document.getElementById("backwheel1");
var frontwheel1 = document.getElementById("frontwheel1");
var saddle1 = document.getElementById("saddle1");
var crank1 = document.getElementById("crank1");
var handlebars1 = document.getElementById("handlebars1");
var rearshock1 = document.getElementById("rearshock1");
var textbox1 = document.getElementById("textbox1");

var backwheel2 = document.getElementById("backwheel2");
var frontwheel2 = document.getElementById("frontwheel2");
var saddle2 = document.getElementById("saddle2");
var crank2 = document.getElementById("crank2");
var handlebars2 = document.getElementById("handlebars2");
var textbox2 = document.getElementById("textbox2");

dropdown.addEventListener("change", function(){
    if  (dropdown.value == "V10"){
        V10.style.display = 'block'
        Nomad.style.display = 'none'
        Jackall.style.display = 'none'
    }
    if  (dropdown.value == "Nomad"){
        V10.style.display = 'none'
        Nomad.style.display = 'block'
        Jackall.style.display = 'none'
    }
    if  (dropdown.value == "Jackall"){
        V10.style.display = 'none'
        Nomad.style.display = 'none'
        Jackall.style.display = 'block'
    } 
})

for(var i = 0; i < frames.length; i++){
   frames[i].addEventListener("mouseover", mousein02);
   frames[i].addEventListener("mouseout", mouseout02);
}
function mousein02()
{ 
   textbox.innerHTML = 'Frame'
}
function mouseout02()
{  
   textbox.innerHTML = ''
}
for(var i = 0; i < reartriangle.length; i++){
   reartriangle[i].addEventListener("mouseover", mousein03);
   reartriangle[i].addEventListener("mouseout", mouseout03);
}
function mousein03()
{ 
   textbox.innerHTML = 'Rear Traingle'
}
function mouseout03()
{  
   textbox.innerHTML = ''
}
seatpost.addEventListener("mouseover", mousein01, false);
seatpost.addEventListener("mouseout", mouseout01, false);
function mousein01()
{ 
   textbox.innerHTML = 'Seatpost'
}
function mouseout01()
{  
   textbox.innerHTML = ''
}
fork.addEventListener("mouseover", mousein0, false);
fork.addEventListener("mouseout", mouseout0, false);
function mousein0()
{ 
   textbox.innerHTML = 'Fork/ Shock'
}
function mouseout0()
{  
   textbox.innerHTML = ''
}
frontwheel.addEventListener("mouseover", mousein, false);
frontwheel.addEventListener("mouseout", mouseout, false);
function mousein()
{ 
   textbox.innerHTML = 'Front Wheel'
}
function mouseout()
{  
   textbox.innerHTML = ''
}
frontbrake.addEventListener("mouseover", mousein18, false);
frontbrake.addEventListener("mouseout", mouseout18, false);
function mousein18()
{ 
   textbox.innerHTML = 'Front Brake'
}
function mouseout18()
{  
   textbox.innerHTML = ''
}
backwheel.addEventListener("mouseover", mousein1, false);
backwheel.addEventListener("mouseout", mouseout1, false);
function mousein1()
{ 
   textbox.innerHTML = 'Back Wheel'
}
function mouseout1()
{  
   textbox.innerHTML = ''
}
rearbrake.addEventListener("mouseover", mousein19, false);
rearbrake.addEventListener("mouseout", mouseout19, false);
function mousein19()
{ 
   textbox.innerHTML = 'Rear Brake'
}
function mouseout19()
{  
   textbox.innerHTML = ''
}
rearderailleur1.addEventListener("mouseover", mousein20, false);
rearderailleur1.addEventListener("mouseout", mouseout20, false);
function mousein20()
{ 
   textbox.innerHTML = 'Derailleur'
}
function mouseout20()
{  
   textbox.innerHTML = ''
}
rearderailleur2.addEventListener("mouseover", mousein21, false);
rearderailleur2.addEventListener("mouseout", mouseout21, false);
function mousein21()
{ 
   textbox.innerHTML = 'Derailleur'
}
function mouseout21()
{  
   textbox.innerHTML = ''
}
chain2.addEventListener("mouseover", mousein22, false);
chain2.addEventListener("mouseout", mouseout22, false);
function mousein22()
{ 
   textbox.innerHTML = 'Chain'
}
function mouseout22()
{  
   textbox.innerHTML = ''
}
chain1.addEventListener("mouseover", mousein22, false);
chain1.addEventListener("mouseout", mouseout22, false);
function mousein22()
{ 
   textbox.innerHTML = 'Chain'
}
function mouseout22()
{  
   textbox.innerHTML = ''
}
saddle.addEventListener("mouseover", mousein2, false);
saddle.addEventListener("mouseout", mouseout2, false);
function mousein2()
{ 
   textbox.innerHTML = 'Saddle'
}
function mouseout2()
{  
   textbox.innerHTML = ''
}
crank.addEventListener("mouseover", mousein3, false);
crank.addEventListener("mouseout", mouseout3, false);
function mousein3()
{ 
   textbox.innerHTML = 'Cranks'
}
function mouseout3()
{  
   textbox.innerHTML = ''
}
rearshock.addEventListener("mouseover", mousein4, false);
rearshock.addEventListener("mouseout", mouseout4, false);
function mousein4()
{ 
   textbox.innerHTML = 'Rear Shock'
}
function mouseout4()
{  
   textbox.innerHTML = ''
}
handlebars.addEventListener("mouseover", mousein5, false);
handlebars.addEventListener("mouseout", mouseout5, false);
function mousein5()
{ 
   textbox.innerHTML = 'Handlebars'
}
function mouseout5()
{  
   textbox.innerHTML = ''
}
frontwheel1.addEventListener("mouseover", mousein6, false);
frontwheel1.addEventListener("mouseout", mouseout6, false);
function mousein6()
{ 
   textbox1.innerHTML = 'Front Wheel'
}
function mouseout6()
{  
   textbox1.innerHTML = ''
}
backwheel1.addEventListener("mouseover", mousein7, false);
backwheel1.addEventListener("mouseout", mouseout7, false);
function mousein7()
{ 
   textbox1.innerHTML = 'Back Wheel'
}
function mouseout7()
{  
   textbox1.innerHTML = ''
}
saddle1.addEventListener("mouseover", mousein8, false);
saddle1.addEventListener("mouseout", mouseout8, false);
function mousein8()
{ 
   textbox1.innerHTML = 'Saddle'
}
function mouseout8()
{  
   textbox1.innerHTML = ''
}
crank1.addEventListener("mouseover", mousein9, false);
crank1.addEventListener("mouseout", mouseout9, false);
function mousein9()
{ 
   textbox1.innerHTML = 'Cranks'
}
function mouseout9()
{  
   textbox1.innerHTML = ''
}
rearshock1.addEventListener("mouseover", mousein11, false);
rearshock1.addEventListener("mouseout", mouseout11, false);
function mousein11()
{ 
   textbox1.innerHTML = 'Rear Shock'
}
function mouseout11()
{  
   textbox1.innerHTML = ''
}
handlebars1.addEventListener("mouseover", mousein12, false);
handlebars1.addEventListener("mouseout", mouseout12, false);
function mousein12()
{ 
   textbox1.innerHTML = 'Handlebars'
}
function mouseout12()
{  
   textbox1.innerHTML = ''
}
frontwheel2.addEventListener("mouseover", mousein13, false);
frontwheel2.addEventListener("mouseout", mouseout13, false);
function mousein13()
{ 
   textbox2.innerHTML = 'Front Wheel'
}
function mouseout13()
{  
   textbox2.innerHTML = ''
}
backwheel2.addEventListener("mouseover", mousein14, false);
backwheel2.addEventListener("mouseout", mouseout14, false);
function mousein14()
{ 
   textbox2.innerHTML = 'Back Wheel'
}
function mouseout14()
{  
   textbox2.innerHTML = ''
}
saddle2.addEventListener("mouseover", mousein15, false);
saddle2.addEventListener("mouseout", mouseout15, false);
function mousein15()
{ 
   textbox2.innerHTML = 'Saddle'
}
function mouseout15()
{  
   textbox2.innerHTML = ''
}
crank2.addEventListener("mouseover", mousein16, false);
crank2.addEventListener("mouseout", mouseout16, false);
function mousein16()
{ 
   textbox2.innerHTML = 'Cranks'
}
function mouseout16()
{  
   textbox2.innerHTML = ''
}
handlebars2.addEventListener("mouseover", mousein17, false);
handlebars2.addEventListener("mouseout", mouseout17, false);
function mousein17()
{ 
   textbox2.innerHTML = 'Handlebars'
}
function mouseout17()
{  
   textbox2.innerHTML = ''
}