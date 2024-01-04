chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
    window.postMessage({ "event": "odooToolsBarcodeMessage", "value": message.barcode });
}
