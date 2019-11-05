// ================ FIRST FRAME ================
//Simple fade in and out for orange logo
//Shine/light animation handled by CSS
TweenMax.to("#orange-logo", 1.5, {
  opacity: 1
});
TweenMax.to("#orange-logo", 1.2, {
  opacity: 0,
  delay: 1.5
});

// ================ SECOND FRAME ================
//Fade cup in and then zoom out
TweenMax.to("#cup", 1.5, {
  opacity: 1,
  delay: 1.5
});
TweenMax.to("#cup", 1.5, {
  backgroundSize: "113px 153px",
  backgroundPosition: "49.55% 90%",
  delay: 3
});

// ================ THIRD FRAME ================
//Animate in copy towards the left
TweenMax.to("#banners-copy", 1.2, {
  left: "50%",
  marginLeft: "-88.5px",
  delay: 4
});
TweenMax.to("#banners-refreshing-copy", 1.2, {
  left: "50%",
  marginLeft: "-84.5px",
  delay: 4.3
});
//Animate bubbles rising up
TweenMax.to("#bubbles", 1.2, {
  backgroundPosition: "49% 85%",
  opacity: 0.3,
  delay: 4.3
});
//'Fizzing' effect
TweenMax.fromTo(
  "#bubbles",
  0.6,
  { scale: 1 },
  { scale: 1.05, transformOrigin: "center center", repeat: 20, yoyo: true }
);
// ================ FOURTH FRAME ================
//Animate out earlier copy out of banner view
TweenMax.to("#banners-copy", 1.2, {
  left: "0%",
  marginLeft: "-500px",
  ease: Power2.easeInOut,
  delay: 7
});
TweenMax.to("#banners-refreshing-copy", 1.2, {
  left: "0%",
  marginLeft: "-500px",
  ease: Power2.easeInOut,
  delay: 7.3
});
//Raise cup and bubbles up
TweenMax.to("#cup", 1.2, {
  backgroundPosition: "49.55% 60%",
  delay: 7.3
});
TweenMax.to("#bubbles", 1.2, {
  backgroundPosition: "49% 69%",
  opacity: 0.3,
  delay: 7.3
});
//Animate in hashtag copy
TweenMax.to("#super-fresh-hashtag", 1.2, {
  left: "50%",
  marginLeft: "-88.5px",
  delay: 7.3
});

//Animate in CTA button
TweenMax.to("#cta", 1.7, {
  opacity: 1,
  zIndex: 8,
  delay: 8.1
});
//Mouse events for growing/shrinking button and opening link in new window
//Using ES5 syntax for older browser support i.e. the dreadded IE..
function shrinkButton(e) {
  e.stopPropagation;
  TweenMax.to("#cta", 1, {
    scale: 1
  });
}

function growButton(e) {
  e.stopPropagation;
  TweenMax.to("#cta", 1, {
    scale: 1.05
  });
}
document.getElementById("cta").addEventListener("mouseover", growButton);
document.getElementById("cta").addEventListener("mouseout", shrinkButton);
//Using touchstart and touchend events for mobile hover simulation
document.getElementById("cta").addEventListener("touchstart", growButton);
document.getElementById("cta").addEventListener("touchend", shrinkButton);

document.getElementById("cta").addEventListener("click", function(e) {
  e.stopPropagation;
  window.open("https://craftww.com/");
});
