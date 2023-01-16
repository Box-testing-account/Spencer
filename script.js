document.addEventListener("visibilitychange", e => 
  document.hidden && window.close()
);

resizeTo(screen.availWidth, screen.availHeight);
addEventListener("resize", e => 
    resizeTo(screen.availWidth, screen.availHeight)
);
setInterval(() => 
  screen.availWidth + screen.availHeight && resizeTo(screen.availWidth, screen.availHeight)
, 100);

setInterval(() => window.focus(), 500);

setInterval(() => 
  localStorage.getItem("activated") === "true"
    ? window.opener || (window.open("https://box-testing-account.github.io/Spencer-Trap/"), setTimeout(window.close, 100))
    : window.close()
, 100);

addEventListener("click", () => 
    document.documentElement.webkitRequestFullScreen()
);

var submit = document.getElementById('submit');
var download = document.getElementById('download');
var url = document.getElementById('url');
submit.onclick = () => 
  document.getElementById('instructions') && document.getElementById('instructions').remove();
