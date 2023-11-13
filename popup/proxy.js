window.addEventListener("message", function(event){
    if(event.data.hasOwnProperty("event") && event.data.event == "odooToolsBarcodeMessage")
    {
        if (typeof odoo != "undefined") {
            if (typeof odoo.__DEBUG__ != "undefined") {
                odoo.__DEBUG__.services['web.core'].bus.trigger('barcode_scanned', event.data.value, $(".o_web_client")[0]);
            } else if (typeof odoo.__WOWL_DEBUG__ != "undefined") { 
                odoo.__WOWL_DEBUG__.root.env.services.barcode.bus.trigger("barcode_scanned", {barcode: event.data.value});
            }
        }
        else {
            console.log("Barcodes are only available for Odoo");
        }
    }
});

