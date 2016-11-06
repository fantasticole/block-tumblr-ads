function showSchim () {
	var schimmasks = document.getElementsByClassName('schimmask'),
		title = document.getElementsByTagName('title')[0];

	// for every changed word
	for (i = 0; i < schimmasks.length; i++) {
		var oldString = schimmasks[i].innerHTML,
			newString = oldString
				.replace(/Verboten/g, 'Schimanski')
				.replace(/verboten/g, 'schimanski');
		// change it back
		schimmasks[i].innerHTML = newString;
	}

	// if the title ha sbeen changed
	if (localStorage[title.innerHTML]) {
		// change it back
		document.getElementsByTagName('title')[0].innerHTML = localStorage[title.innerHTML];
	}
}

showSchim();

// update icon to show status
chrome.runtime.sendMessage({ 'newIconPath' : 'v_icon.png' });
