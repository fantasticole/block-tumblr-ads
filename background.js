function toggleSchim () {
	if (getStorage('displaySchim') === 'true') {
		chrome.tabs.executeScript(null, {file: "hideSchim.js"});
		setStorage('displaySchim', 'false')
	}
	else {
		chrome.tabs.executeScript(null, {file: "showSchim.js"});
		setStorage('displaySchim', 'true')
	}
}

function setStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
};

function getStorage(key) {
  return JSON.parse(localStorage.getItem(key));
};

chrome.browserAction.onClicked.addListener(toggleSchim);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // read `newIconPath` from request and read `tab.id` from sender
    chrome.browserAction.setIcon({
        path: request.newIconPath,
        tabId: sender.tab.id
    });
});
