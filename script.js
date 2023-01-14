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
    setTimeout(window.close(), 600);
  }
}, 100);

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
