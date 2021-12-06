function handleShown() {
    console.log("panel is being shown");
}

function handleHidden() {
    console.log("panel is being hidden");
}

browser.devtools.panels.create(
    "FQDNRecoder",       // title
    "",                  // icon
    "tool.html"          // content
).then((newPanel) => {
    newPanel.onShown.addListener(handleShown);
    newPanel.onHidden.addListener(handleHidden);
});