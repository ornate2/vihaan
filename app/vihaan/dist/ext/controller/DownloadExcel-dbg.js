sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/model/odata/v4/ODataModel",
    "sap/ui/export/Spreadsheet"
], function(MessageToast, ODataModel, Spreadsheet) {
    'use strict';

    return {
        onclick: function(oEvent) {
            // Show a message toast
            MessageToast.show("Custom handler invoked.");

            // Define the correct path to your OData service
            var sServiceUrl = "/odata/v4/catalog/"; // Adjust this according to your deployment settings

            // Create OData model
            var oModel = new ODataModel({
                serviceUrl: sServiceUrl,
                synchronizationMode: "None"
            });

            // Fetch data
            oModel.bindList("/Materials").requestContexts().then(function(aContexts) {
                var aData = aContexts.map(function(oContext) {
                    return oContext.getObject();
                });

                // Convert data to Excel
                var aExcelData = aData.map(item => ({
                    MaterialID: item.MaterialID,
                    Material: item.Material,
                    Description: item.Description,
                    CreatedOn: item.CreatedOn,
                    Revision: item.Revision,
                    BaseUnitOfMeasurement: item.BaseUnitOfMeasurement,
                    Serviceability: item.Serviceability,
                    PartDeletionDomestic: item.PartDeletionDomestic,
                    PartDeletionInternational: item.PartDeletionInternational,
                    PartReleaseStatus: item.PartReleaseStatus,
                    ModelCode: item.ModelCode,
                    Division: item.Division,
                    InterchangeableParts: item.InterchangeableParts,
                    LastServiceableDateDomestic: item.LastServiceableDateDomestic,
                    LastServiceableDateInternational: item.LastServiceableDateInternational,
                    ItemRevStatus: item.ItemRevStatus,
                    Weight: item.Weight,
                    WeightUnit: item.WeightUnit,
                    Length: item.Length,
                    Width: item.Width,
                    Height: item.Height,
                    DimensionUnit: item.DimensionUnit,
                    BasicMaterial: item.BasicMaterial,
                    MaterialClassification: item.MaterialClassification,
                    MaterialCode: item.MaterialCode,
                    MaterialGrade: item.MaterialGrade,
                    HazardousMaterialCompliance: item.HazardousMaterialCompliance,
                    MaterialQuality: item.MaterialQuality,
                    DateNonCurrentDomestic: item.DateNonCurrentDomestic,
                    DateNonCurrentInternational: item.DateNonCurrentInternational,
                    MaterialSystem: item.MaterialSystem,
                    SubSystem: item.SubSystem,
                    PartFamily: item.PartFamily,
                    ManufacturingProcess: item.ManufacturingProcess,
                    Source: item.Source,
                    CADSurfaceArea: item.CADSurfaceArea,
                    Volume: item.Volume,
                    VolumeUnit: item.VolumeUnit,
                    StorageConditions: item.StorageConditions,
                    ShelfLife: item.ShelfLife,
                    HeatTreatment: item.HeatTreatment,
                    SurfaceTreatment: item.SurfaceTreatment,
                    KitTagging: item.KitTagging,
                    CanPartBeSoldSeparately: item.CanPartBeSoldSeparately,
                    ShelfLifeDetails: item.ShelfLifeDetails,
                    ShelfLifeUnitOfMeasurement: item.ShelfLifeUnitOfMeasurement
                }));

                // Prepare the spreadsheet
                var oSettings = {
                    workbook: {
                        columns: [
                            { label: 'MaterialID', property: 'MaterialID' },
                            { label: 'Material', property: 'Material' },
                            { label: 'Description', property: 'Description' },
                            { label: 'CreatedOn', property: 'CreatedOn' },
                            { label: 'Revision', property: 'Revision' },
                            { label: 'BaseUnitOfMeasurement', property: 'BaseUnitOfMeasurement' },
                            { label: 'Serviceability', property: 'Serviceability' },
                            { label: 'PartDeletionDomestic', property: 'PartDeletionDomestic' },
                            { label: 'PartDeletionInternational', property: 'PartDeletionInternational' },
                            { label: 'PartReleaseStatus', property: 'PartReleaseStatus' },
                            { label: 'ModelCode', property: 'ModelCode' },
                            { label: 'Division', property: 'Division' },
                            { label: 'InterchangeableParts', property: 'InterchangeableParts' },
                            { label: 'LastServiceableDateDomestic', property: 'LastServiceableDateDomestic' },
                            { label: 'LastServiceableDateInternational', property: 'LastServiceableDateInternational' },
                            { label: 'ItemRevStatus', property: 'ItemRevStatus' },
                            { label: 'Weight', property: 'Weight' },
                            { label: 'WeightUnit', property: 'WeightUnit' },
                            { label: 'Length', property: 'Length' },
                            { label: 'Width', property: 'Width' },
                            { label: 'Height', property: 'Height' },
                            { label: 'DimensionUnit', property: 'DimensionUnit' },
                            { label: 'BasicMaterial', property: 'BasicMaterial' },
                            { label: 'MaterialClassification', property: 'MaterialClassification' },
                            { label: 'MaterialCode', property: 'MaterialCode' },
                            { label: 'MaterialGrade', property: 'MaterialGrade' },
                            { label: 'HazardousMaterialCompliance', property: 'HazardousMaterialCompliance' },
                            { label: 'MaterialQuality', property: 'MaterialQuality' },
                            { label: 'DateNonCurrentDomestic', property: 'DateNonCurrentDomestic' },
                            { label: 'DateNonCurrentInternational', property: 'DateNonCurrentInternational' },
                            { label: 'MaterialSystem', property: 'MaterialSystem' },
                            { label: 'SubSystem', property: 'SubSystem' },
                            { label: 'PartFamily', property: 'PartFamily' },
                            { label: 'ManufacturingProcess', property: 'ManufacturingProcess' },
                            { label: 'Source', property: 'Source' },
                            { label: 'CADSurfaceArea', property: 'CADSurfaceArea' },
                            { label: 'Volume', property: 'Volume' },
                            { label: 'VolumeUnit', property: 'VolumeUnit' },
                            { label: 'StorageConditions', property: 'StorageConditions' },
                            { label: 'ShelfLife', property: 'ShelfLife' },
                            { label: 'HeatTreatment', property: 'HeatTreatment' },
                            { label: 'SurfaceTreatment', property: 'SurfaceTreatment' },
                            { label: 'KitTagging', property: 'KitTagging' },
                            { label: 'CanPartBeSoldSeparately', property: 'CanPartBeSoldSeparately' },
                            { label: 'ShelfLifeDetails', property: 'ShelfLifeDetails' },
                            { label: 'ShelfLifeUnitOfMeasurement', property: 'ShelfLifeUnitOfMeasurement' }
                        ]
                    },
                    dataSource: aExcelData,
                    fileName: "Materials.xlsx",
                    worker: false // We need to disable worker as we are using Browser's Blob object
                };

                var oSpreadsheet = new Spreadsheet(oSettings);
                oSpreadsheet.build().then(function() {
                    MessageToast.show("Spreadsheet export has finished.");
                }).finally(function() {
                    oSpreadsheet.destroy();
                });

            }).catch(function(oError) {
                MessageToast.show("Error fetching data: " + oError.message);
            });
        }
    };
});
