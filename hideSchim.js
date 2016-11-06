function hideSchim () {
	var tagList = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'li', 'span', 'em'],
		allTagsFromList = document.querySelectorAll(tagList),
		title = document.getElementsByTagName('title')[0],
		schimmasks = document.getElementsByClassName('schimmask'),
		newTitle;

	// if words have been changed
	if (schimmasks.length > 0) {
		// change each one back
		for (i = 0; i < schimmasks.length; i++) {
			var oldString = schimmasks[i].innerHTML,
				newString = oldString
					.replace(/Schimanski/g, "Verboten")
					.replace(/schimanski/g, "verboten");
			// update the current element's text
			schimmasks[i].innerHTML = newString;
		}
		// if the page title has been changed
		if (localStorage[title.innerHTML]) {
			// update the page title
			document.getElementsByTagName('title')[0].innerHTML = localStorage[title.innerHTML];
		}
	} else {
		// set the text inside of the document
		for (i = 0; i < allTagsFromList.length; i++) {
			var oldString = document.querySelectorAll(tagList)[i].innerHTML,
				newString = oldString
					.replace(/Schimanski/g, "<span class='schimmask'>Verboten</span>")
					.replace(/schimanski/g, "<span class='schimmask'>verboten</span>");

			// update the current element's text
			document.querySelectorAll(tagList)[i].innerHTML = newString;
		}

		// set the text for the page title
		newTitle = title.innerHTML
			.replace(/Schimanski/g, "Verboten")
			.replace(/schimanski/g, "verboten");

		// if the title changes
		if (newTitle !== title.innerHTML) {
			// set the new and old titles on local storage
			localStorage[newTitle] = title.innerHTML;
			localStorage[title.innerHTML] = newTitle;
			// and update the page title
			document.getElementsByTagName('title')[0].innerHTML = newTitle;
		}
	}
}

hideSchim();

// update icon to show status
chrome.runtime.sendMessage({ "newIconPath" : 'v_icon2.png' });
