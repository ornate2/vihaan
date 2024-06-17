// sap.ui.define([
//     "sap/m/MessageToast",
//     "sap/m/Dialog",
//     "sap/m/Text",
//     "sap/m/Button"
// ], function(MessageToast, Dialog, Text, Button) {
//     'use strict';

//     return {
//         onclick: function(oEvent) {
//             MessageToast.show("Custom handler invoked. !!!!!");

//             // Create the dialog
//             var oDialog = new Dialog({
//                 title: 'Hello World',
//                 content: new Text({ text: "Hello World" }),
//                 beginButton: new Button({
//                     text: 'Close',
//                     press: function() {
//                         oDialog.close();
//                     }
//                 }),
//                 afterClose: function() {
//                     oDialog.destroy();
//                 }
//             });

//             // Open the dialog
//             oDialog.open();
//         }
//     };
// });


sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Table",
    "sap/m/Column",
    "sap/m/Text",
    "sap/m/ColumnListItem",
    "sap/ui/model/json/JSONModel"
], function(MessageToast, Dialog, Button, Table, Column, Text, ColumnListItem, JSONModel) {
    'use strict';

    return {
        onclick: function(oEvent) {
            MessageToast.show("Custom handler invoked. !!!!!");

            var aData = [
                { name: "John Doe", age: 30, city: "New York" },
                { name: "Jane Smith", age: 25, city: "San Francisco" },
                { name: "Mike Johnson", age: 35, city: "Chicago" }
            ];

            var oModel = new JSONModel();
            oModel.setData({ people: aData });

            var oTable = new Table({
                columns: [
                    new Column({
                        header: new Text({ text: "Name" })
                    }),
                    new Column({
                        header: new Text({ text: "Age" })
                    }),
                    new Column({
                        header: new Text({ text: "City" })
                    })
                ]
            });

            oTable.bindItems({
                path: "/people",
                template: new ColumnListItem({
                    cells: [
                        new Text({ text: "{name}" }),
                        new Text({ text: "{age}" }),
                        new Text({ text: "{city}" })
                    ]
                })
            });

            oTable.setModel(oModel);

            var oDialog = new Dialog({
                title: 'People Data',
                content: oTable,
                beginButton: new Button({
                    text: 'Close',
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
});

