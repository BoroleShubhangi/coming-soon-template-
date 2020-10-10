const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl = document.getElementById("min");
const secondsEl = document.getElementById("seconds");

const head= document.querySelector(".head");
const para= document.querySelector("#para");
  const emailInput = document.querySelector("#notify-email"),
  sendButton = document.querySelector("#send-button"),
  thankyouLabel = document.querySelector("#thankyou-label"),
  outerButton = document.querySelector("#outer-button"),
 rotate=document.querySelector('#rotate')

const newYears = "19 April 2021";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const min = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minEl.innerHTML = formatTime(min);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function animationPlay(){
  const tl=new TimelineMax();

tl.fromTo(head,1,{y:"-220"},{y:"0",  ease:SlowMo.ease.config(0.7 ,0.7, false)});

TweenMax.fromTo(para,2, {
  x: -100,
  opacity:0
},{x:8 ,delay:2 ,opacity:1,
  ease: Back.easeOut.config(3)});
}

TweenMax.set([outerButton, sendButton, thankyouLabel], { scale: 0 });

//this tween controls the entrance of the 
//first button as the page loads
TweenMax.to(outerButton, 3, { scale: 0.8, ease: Back.easeOut.config(4),delay:3 })

//code that triggers the appearance of the 
//text box on button click
outerButton.addEventListener("click", function() {
  //The text box appears over half a second
  //and is scaled up
  TweenMax.to(emailInput, 0.5, {
    autoAlpha: 1,
    scale: 1
  });
  
  //the initial button disappears from view
  TweenMax.to(this, 1, {
    autoAlpha: 0
  });
  
  //the send button appears over half a second 
  //and it's scaled up 
  TweenMax.to(sendButton, 0.5, {
    autoAlpha: 1,
    scale: 1,
    delay: 0.5,
    ease: Back.easeOut.config(3)
  });
});

//code triggered after clicking the send button
sendButton.addEventListener("click", function() {
  //thank you label appears and starts to scale up
  TweenMax.to(thankyouLabel, 1, {
    autoAlpha: 1,
    scale: 0.7
  });
  
  //thank you label is scaled up completely
  TweenMax.to(thankyouLabel, 1, {
    scale: 1
  });

  //the text color inside the input box changes
  //to white to make it invisible
  TweenMax.to(
    emailInput,
    0,
    {
      color: "#123"
    });

  //the input box is scaled down and removed
  TweenMax.to(
    emailInput,
    0.2,
    {
      scaleX: 0,
      autoAlpha: 0,
      delay: 0.5
    });
  
  //the send button is removed
  TweenMax.to(
    this,
    0.3,
    {
      autoAlpha: 0
    });

  //the thank you label is scaled up on the 
  //X axis
  TweenMax.to(thankyouLabel, 0.5, {
    scaleX: 0.6,
    delay: 0.5,
    ease: Back.easeOut.config(3)
  });

  //the font-size in the thank you label 
  //is enlarged to make it more readable
  TweenMax.to(thankyouLabel, 0.5, {
    fontSize: 25,
    delay: 0.5
  });
});




// initial call
countdown();
animationPlay()
setInterval(countdown, 1000);
