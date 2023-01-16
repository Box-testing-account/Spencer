document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
  } else {
    window.close();
  }
});

resizeTo(window.screen.availWidth, window.screen.availHeight);
addEventListener("resize", (event) => {
    resizeTo(window.screen.availWidth, window.screen.availHeight);
});
setInterval(() => {
    if (window.screen.availWidth + window.screen.availHeight == 0) {
    } else {
        resizeTo(window.screen.availWidth, window.screen.availHeight);
    };
}, 100);

setInterval(function(){
    window.focus();
}, 500);


setInterval(function() {
  if (localStorage.getItem("activated") === "true") {
    if (window.opener) {
    } else {
      window.open("https://box-testing-account.github.io/Spencer-Trap/");
      setTimeout(window.close(), 100);
    }
    console.log("Activated is true")
  } else {
    // Code to run if "activated" is false
    console.log("Activated is false")
  }
}, 100);

addEventListener("click", function() {
    var el = document.documentElement, 
    rfs = el.webkitRequestFullScreen;
    rfs.call(el);
});

var open
var submit = document.getElementById('submit');
var download = document.getElementById('download');
var url = document.getElementById('url');
submit.onclick = () => {
	if(document.getElementById('instructions')) {
		document.getElementById('instructions').remove();
	}
};

//if (document.hasFocus()) {
//   console.log("The window is on top");
//} else {
//   console.log("The window is not on top");
//   window.focus();
//};
