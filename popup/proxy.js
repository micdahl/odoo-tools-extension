window.addEventListener("message", function(event){
    if(event.data.hasOwnProperty("event") && event.data.event == "odooToolsBarcodeMessage")
    {
        if (typeof odoo != "undefined") {
            odoo.__DEBUG__.services['web.core'].bus.trigger('barcode_scanned', event.data.value, $(".o_web_client")[0]);
        }
        else {
            console.log("Barcodes are only available for Odoo");
        }
    }
});

