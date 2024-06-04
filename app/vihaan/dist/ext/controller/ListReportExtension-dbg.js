sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/ui/unified/FileUploader"
], function(MessageToast, Dialog, Button, FileUploader) {
    'use strict';
 
    return {
        handleUpload: function(oEvent) {
            var oDialog = new Dialog({
                title: "Upload Confirmation",
                type: "Message",
                content: [
                    new sap.m.Text({
                        text: "Do you want to proceed with the upload?"
                    }),
                    new FileUploader({
                        id: "fileUploader",
                        uploadUrl: "/odata/v4/catalog/Materials",
                        uploadUrl: "your_upload_url",
                        uploadComplete: function() {
                            MessageToast.show("File uploaded successfully.");
                            oDialog.close();
                        },
                        visible: false
                    })
                ],
                beginButton: new Button({
                    text: "Yes",
                    press: function() {
                        oDialog.close();
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
 
            var oUploadButton = new Button({
                text: "Upload Excel",
                press: function() {
                    var oFileUploader = sap.ui.getCore().byId("fileUploader");
                    oFileUploader.setVisible(true);
                    oFileUploader.upload();
                }
            });
 
            var oCancelButton = new Button({
                text: "Cancel",
                press: function() {
                    oDialog.close();
                }
            });
 
            oDialog.addButton(oUploadButton);
            oDialog.addButton(oCancelButton);
 
            oDialog.open();
        }
    };
});




 
// sap.ui.define([
//     "sap/m/MessageToast",
//     "sap/m/Dialog",
//     "sap/m/Button",
//     "sap/ui/unified/FileUploader",
//     "sap/ui/core/util/File",
//     "sap/ui/model/odata/v4/ODataModel"
// ], function(MessageToast, Dialog, Button, FileUploader, FileUtil, ODataModel) {
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
//                         uploadUrl: "your_upload_url", // Replace with your actual upload URL
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
//                         var oFileUploader = sap.ui.getCore().byId("fileUploader");
//                         oFileUploader.setVisible(true);
//                         oFileUploader.upload();
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
//         },
 
//         processExcelData: function(oEvent) {
//             var file = oEvent.getParameter("files") && oEvent.getParameter("files")[0];
//             if (file && window.FileReader) {
//                 var reader = new FileReader();
//                 reader.onload = function(e) {
//                     var data = e.target.result;
//                     var workbook = XLSX.read(data, { type: 'binary' });
//                     workbook.SheetNames.forEach(function(sheetName) {
//                         var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                     
//                         var oModel = new ODataModel("/CatalogService.svc");
//                         XL_row_object.forEach(function(row) {
//                             var material = {
//                                 Material: row.Material,
//                                 Description: row.Description,
//                                 // Map other properties from Excel to your entity fields
//                             };
//                             oModel.create("/Materials", material, {
//                                 success: function() {
//                                     console.log("Material created successfully.");
//                                 },
//                                 error: function() {
//                                     console.error("Error creating material.");
//                                 }
//                             });
//                         });
//                     });
//                 };
//                 reader.readAsBinaryString(file);
//             }
//         }
//     };
// });
 
 
 