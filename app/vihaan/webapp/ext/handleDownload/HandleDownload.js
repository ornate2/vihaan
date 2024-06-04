sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
         handleDownload: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
