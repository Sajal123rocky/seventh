 let randomnumber1=Math.floor(Math.random()*5+1);

let r1=document.querySelector(".img1");

switch(randomnumber1)
{
  case 1: r1.setAttribute("src","images/dice1.png");
  break;
  case 2:  r1.setAttribute("src","images/dice2.png");
  break;
  case 3: r1.setAttribute("src","images/dice3.png");
  break;
  case 4: r1.setAttribute("src","images/dice4.png");
  break;
  case 5: r1.setAttribute("src","images/dice5.png");
  break;
  case 6: r1.setAttribute("src","images/dice6.png");
  break;
}
//let randomnumber1=Math.floor(Math.random()*5+1);
let randomnumber2=Math.floor(Math.random()*5+1);
let r2=document.querySelector(".img2");

switch(randomnumber2)
{
  case 1: r2.setAttribute("src","images/dice1.png");
  break;
  case 2:  r2.setAttribute("src","images/dice2.png");
  break;
  case 3: r2.setAttribute("src","images/dice3.png");
  break;
  case 4: r2.setAttribute("src","images/dice4.png");
  break;
  case 5: r2.setAttribute("src","images/dice5.png");
  break;
  case 6: r2.setAttribute("src","images/dice6.png");
  break;
}
let r3=document.querySelector("h1");
if(randomnumber1==randomnumber2)
r3.textContent="draw";
else if(randomnumber1>randomnumber2)
r3.textContent="left wins";
else
r3.textContent="right wins";
