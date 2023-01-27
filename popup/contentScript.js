var inject = document.createElement("script");
inject.src=chrome.runtime.getURL("./popup/proxy.js");
(document.head||document.documentElement).appendChild(inject);

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
    window.postMessage({ "event": "odooToolsBarcodeMessage", "value": message.barcode });
}
