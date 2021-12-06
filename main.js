const status = {
    isRecording: false,
};
const list = document.getElementById("result");
const fqdnList = new Set();
document.getElementById("recordAction").addEventListener("click", () => {
    if (status.isRecording) {
        browser.runtime.sendMessage({
            tabId: browser.devtools.inspectedWindow.tabId,
            status: !status.isRecording
        });

        document.getElementById("recordAction").innerHTML = "start recording";
        status.isRecording = !status.isRecording;
    } else {
        fqdnList.clear()
        browser.runtime.sendMessage({
            tabId: browser.devtools.inspectedWindow.tabId,
            status: !status.isRecording
        });
        document.getElementById("recordAction").innerHTML = "stop recording";
        status.isRecording = !status.isRecording;
    }

})

const handleMessage = (request, sender, sendResponse) => {
    const url = new URL(request.url);
    fqdnList.add(url.host);
    let str = "";
    fqdnList.forEach(element => {
        str += `${element}<br />`
    });
    list.innerHTML = str;
};
browser.runtime.onMessage.addListener(handleMessage);
