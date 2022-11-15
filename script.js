window.close();

if (open == 'true') {
    // the variable is defined
}

document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    console.log("tab is active")
  } else {
    let open = true
  }
});

localStorage.openpages = Date.now();
var onLocalStorageEvent = function(e){
    if(e.key == "openpages"){
        // Listen if anybody else is opening the same page!
        localStorage.page_available = Date.now();
    }
    if(e.key == "page_available"){
        alert("One more page already open");
    }
};
        window.addEventListener('storage', onLocalStorageEvent, false);

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
}
