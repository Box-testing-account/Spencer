document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    console.log("tab is active")
  } else {
//    window.open("https://box-testing-account.github.io/Spencer");
    window.close();
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

window.onbeforeunload = function() {
    localStorage.setItem('tabIsOpen', 'closed');
};

window.addEventListener("keydown", checkKeyPressed, false);

if(Document.fullscreenElement == "null") {
	alert("Hello! I am an alert box!!");
};

window.addEventListener('beforeunload', (event) => {
	event.preventDefault();
	event.returnValue = '';
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
