// sap.ui.define([
//     "sap/m/MessageToast",
//     "sap/m/Dialog",
//     "sap/m/Button",
//     "sap/ui/unified/FileUploader"
// ], function(MessageToast, Dialog, Button, FileUploader) {
//     'use strict';
 
//     return {
//         handleUpload: function(oEvent) {
//             var oDialog = new Dialog({
//                 title: "Upload Confirmation",
//                 type: "Message",
//                 content: [
//                     new sap.m.Text({
//                         text: "Do you want to proceed with the upload?"
//                     }),
//                     new FileUploader({
//                         id: "fileUploader",
//                         uploadUrl: "/odata/v4/catalog/Materials",
//                         uploadUrl: "your_upload_url",
//                         uploadComplete: function() {
//                             MessageToast.show("File uploaded successfully.");
//                             oDialog.close();
//                         },
//                         visible: false
//                     })
//                 ],
//                 beginButton: new Button({
//                     text: "Yes",
//                     press: function() {
//                         oDialog.close();
//                     }
//                 }),
//                 endButton: new Button({
//                     text: "No",
//                     press: function() {
//                         oDialog.close();
//                     }
//                 }),
//                 afterClose: function() {
//                     oDialog.destroy();
//                 }
//             });
 
//             var oUploadButton = new Button({
//                 text: "Upload Excel",
//                 press: function() {
//                     var oFileUploader = sap.ui.getCore().byId("fileUploader");
//                     oFileUploader.setVisible(true);
//                     oFileUploader.upload();
//                 }
//             });
 
//             var oCancelButton = new Button({
//                 text: "Cancel",
//                 press: function() {
//                     oDialog.close();
//                 }
//             });
 
//             oDialog.addButton(oUploadButton);
//             oDialog.addButton(oCancelButton);
 
//             oDialog.open();
//         }
//     };
// });

sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/ui/unified/FileUploader",
    "sap/ui/model/json/JSONModel",
    "sap/m/Text"
], function(MessageToast, Dialog, Button, FileUploader, JSONModel, Text) {
    'use strict';

    const uploadModule = {

        sendDataToService: function(data) {
            const oModel = new sap.ui.model.odata.v4.ODataModel({
                serviceUrl: "/odata/v4/catalog/"
            });

            const oListBinding = oModel.bindList("/Materials");
            const aBatchOperations = [];

            data.forEach((item) => {
                const oOperation = oListBinding.create(item, true);
                aBatchOperations.push(oOperation);
            });

            oModel.submitBatch("batchGroupId")
                .then(() => {
                    MessageToast.show("Data uploaded successfully.");
                })
                .catch((error) => {
                    MessageToast.show("Error uploading data: " + error.message);
                });
        },

        handleUpload: function() {
            const handleFileChange = (oEvent) => {
                const oFileUploader = oEvent.getSource();
                const oFile = oFileUploader.oFileUpload.files[0];

                if (oFile) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const data = e.target.result;
                        const workbook = XLSX.read(data, {
                            type: 'binary'
                        });

                        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                        const jsonData = XLSX.utils.sheet_to_json(firstSheet);

                        uploadModule.sendDataToService(jsonData);

                        oDialog.close();
                    };

                    reader.readAsBinaryString(oFile);
                }
            };

            const oDialog = new Dialog({
                title: "Upload Confirmation",
                type: "Message",
                content: [
                    new Text({
                        text: "Do you want to proceed with the upload?"
                    }),
                    new FileUploader({
                        id: "fileUploader",
                        uploadUrl: "/odata/v4/catalog/Materials",
                        name: "uploadFile",
                        change: handleFileChange, 
                        visible: true 
                    })
                ],
                beginButton: new Button({
                    text: "Yes",
                    press: function() {
                        const oFileUploader = sap.ui.getCore().byId("fileUploader");
                        oFileUploader.setVisible(true);
                        oFileUploader.focus(); 
                    }
                }),
                endButton: new Button({
                    text: "No",
                    press: function() {
                        oDialog.close();
                    }
                }),
                afterClose: function() {
                    oDialog.destroy();
                }
            });

            oDialog.open();
        }
    };

    return uploadModule;
});

