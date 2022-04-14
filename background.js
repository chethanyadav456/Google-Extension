chrome.runtime.onInstalled.addListener(() => {
    var contextMenuItem = {
        "id": "google", 
        "title": "Search on Google",
        "contexts": ["selection"]
    }

    chrome.contextMenus.create(contextMenuItem);

    chrome.contextMenus.onClicked.addListener(function(info, tab){
        var newURL = "https://www.google.com/search?q=" + info.selectionText;
        chrome.tabs.create({ url: newURL})
    });
});