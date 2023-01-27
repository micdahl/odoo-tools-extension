const sendBarcodeBtn = document.getElementById("sendbarcode");
if (sendBarcodeBtn) {
    sendBarcodeBtn.onclick = function() {
        barcode = document.getElementById("barcode")
        if (barcode) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                const message = {
                    barcode: barcode.value
                }
                chrome.tabs.sendMessage(tabs[0].id, message);
            });
        }
    }
}

const sendValidateBarcodeBtn = document.getElementById("validate");
if (sendValidateBarcodeBtn) {
    sendValidateBarcodeBtn.onclick = function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const message = {
                barcode: "O-BTN.validate"
            }
            chrome.tabs.sendMessage(tabs[0].id, message);
        });
    }
}


const sendCancelBarcodeBtn = document.getElementById("cancel");
if (sendCancelBarcodeBtn) {
    sendCancelBarcodeBtn.onclick = function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const message = {
                barcode: "O-BTN.cancel"
            }
            chrome.tabs.sendMessage(tabs[0].id, message);
        });
    }
}


const sendPutInPackBarcodeBtn = document.getElementById("put-in-pack");
if (sendPutInPackBarcodeBtn) {
    sendPutInPackBarcodeBtn.onclick = function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const message = {
                barcode: "O-BTN.pack"
            }
            chrome.tabs.sendMessage(tabs[0].id, message);
        });
    }
}

const sendNextPageBarcodeBtn = document.getElementById("next");
if (sendNextPageBarcodeBtn) {
    sendNextPageBarcodeBtn.onclick = function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const message = {
                barcode: "O-CMD.NEXT"
            }
            chrome.tabs.sendMessage(tabs[0].id, message);
        });
    }
}

const sendPreviousPageBarcodeBtn = document.getElementById("previous");
if (sendPreviousPageBarcodeBtn) {
    sendPreviousPageBarcodeBtn.onclick = function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const message = {
                barcode: "O-CMD.PREV"
            }
            chrome.tabs.sendMessage(tabs[0].id, message);
        });
    }
}


