chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({"url":"inky.html","selected":true});
});