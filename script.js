document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    console.log("tab is active")
  } else {
//    window.open("https://box-testing-account.github.io/Spencer");
    window.close();
  }
});

setInterval(() => {
  if (window.opener) {
    console.log("The parent window is still open");
  } else {
    console.log("The parent window has been closed");
    window.open("https://box-testing-account.github.io/Spencer-Trap/");
    window.close();
  }
}, 100);

window.addEventListener("mousemove", function(event) {
    if(event.clientX > 0 && event.clientX < window.innerWidth && event.clientY > 0 && event.clientY < window.innerHeight){
        console.log("Cursor is on the webpage");
    }else{
        console.log("Cursor is off the webpage");
    }
});

addEventListener("click", function() {
    var el = document.documentElement, 
    rfs = el.webkitRequestFullScreen;
    rfs.call(el);
});

// setting the value of the storage to open when the tab is open
localStorage.setItem('tabIsOpen', 'open');
window.onfocus = function() {
    localStorage.setItem('tabIsOpen', 'open');
};

var open
var submit = document.getElementById('submit');
var download = document.getElementById('download');
var url = document.getElementById('url');
submit.onclick = () => {
	if(document.getElementById('instructions')) {
		document.getElementById('instructions').remove();
	}
};

if (document.hasFocus()) {
   console.log("The window is on top");
} else {
   console.log("The window is not on top");
};
