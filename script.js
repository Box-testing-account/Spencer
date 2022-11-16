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

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "17") {
	window.open("https://box-testing-account.github.io/Spencer");
        window.close();
    }
};
//

setTimeout(() => {  window.prompt('Whats the magic word?') }, 500);
if('opensesame'){
    alert('Well Done. Correct answer');
    window.open("https://shattereddisk.github.io/rickroll/rickroll.mp4");
    window.close();
}
else{
    alert('Sorry, incorrect, it is a dog')
}

//
if(Document.fullscreenElement == "null") {
	alert("Hello! I am an alert box!!");
};

window.addEventListener('beforeunload', (event) => {
	event.preventDefault();
	event.returnValue = '';
});

//window.addEventListener("beforeunload", function(){
   //window.open("https://box-testing-account.github.io/Spencer");
//	window.open("www.google.com, _self");
//   alert("Hello! I am an alert box!!");
//}, false);

var open
var submit = document.getElementById('submit');
var download = document.getElementById('download');
var url = document.getElementById('url');
submit.onclick = () => {
	if(document.getElementById('instructions')) {
		document.getElementById('instructions').remove();
	}
};
