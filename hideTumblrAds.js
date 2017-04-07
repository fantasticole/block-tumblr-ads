function hideTumblrAds () {
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".standalone-ad-container { display: none; }";
	document.body.appendChild(css);
}

hideTumblrAds();
