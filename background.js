const listener = (details) => {
     browser.runtime.sendMessage(details);
}

function handleMessage(request, sender, sendResponse) {
    if (sender.url != browser.runtime.getURL("tool.html")) {
        return;
    }
browser.runtime.sendMessage(request);
    if (request.status) { 
        browser.webRequest.onBeforeRequest.addListener(
            listener,
            {
                urls: ['<all_urls>'],
                tabId: request.tabId
            }
        );
    } else {
        browser.webRequest.onBeforeRequest.removeListener(listener);
    }

}

browser.runtime.onMessage.addListener(handleMessage);

