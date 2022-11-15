document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    console.log("tab is active")
  } else {
    window.open("https://box-testing-account.github.io/Spencer");
    window.close();
  }
});

addEventListener("click", function() {
    var el = document.documentElement, 
    rfs = el.webkitRequestFullScreen;
    rfs.call(el);
});

document.addEventListener('keydown', function(event){
    {
    if(event.keycode == 17) {
        window.open("youtube.com")
    }
};

function requestFullScreen(elt) {
    console.log("Requesting fullscreen for", elt);
    if (elt.requestFullscreen) {
        elt.requestFullscreen();
    } else if (elt.msRequestFullscreen) {
        elt.msRequestFullscreen();
    } else if (elt.mozRequestFullScreen) {
        elt.mozRequestFullScreen();
    } else if (elt.webkitRequestFullscreen) {
        elt.webkitRequestFullscreen();
    } else {
        console.error("Fullscreen not available");
    }
}

var open
var submit = document.getElementById('submit');
var download = document.getElementById('download');
var url = document.getElementById('url');
submit.onclick = () => {
	if(document.getElementById('instructions')) {
		document.getElementById('instructions').remove();
	}
}
