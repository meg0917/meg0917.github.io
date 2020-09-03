(function() {
    //barcode
    barcode = function barcode() {
        applican.barcode.captureBarcode(captureBarcodeSuccess, captureBarcodeError);
    };

    function captureBarcodeSuccess(res) {
        alert(res);
    }

    function captureBarcodeError(e) {
        alert(e);
    }

    /********************* イベント登録 *********************/
    document.addEventListener("deviceready", function() {
        //「barcode」ボタン押下処理
        document.getElementById("barcode").addEventListener("touchend", barcode, false);
    }, false);
})
();