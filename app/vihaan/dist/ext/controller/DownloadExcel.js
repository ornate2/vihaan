sap.ui.define(["sap/m/MessageToast","sap/ui/model/odata/v4/ODataModel","sap/ui/export/Spreadsheet"],function(e,a,t){"use strict";return{onclick:function(r){var i="/odata/v4/catalog/";var l=new a({serviceUrl:i,synchronizationMode:"None"});l.bindList("/Materials").requestContexts().then(function(a){var r=a.map(function(e){return e.getObject()});var i=r.map(e=>({MaterialID:e.MaterialID,Material:e.Material,Description:e.Description,CreatedOn:e.CreatedOn,Revision:e.Revision,BaseUnitOfMeasurement:e.BaseUnitOfMeasurement,Serviceability:e.Serviceability,PartDeletionDomestic:e.PartDeletionDomestic,PartDeletionInternational:e.PartDeletionInternational,PartReleaseStatus:e.PartReleaseStatus,ModelCode:e.ModelCode,Division:e.Division,InterchangeableParts:e.InterchangeableParts,LastServiceableDateDomestic:e.LastServiceableDateDomestic,LastServiceableDateInternational:e.LastServiceableDateInternational,ItemRevStatus:e.ItemRevStatus,Weight:e.Weight,WeightUnit:e.WeightUnit,Length:e.Length,Width:e.Width,Height:e.Height,DimensionUnit:e.DimensionUnit,BasicMaterial:e.BasicMaterial,MaterialClassification:e.MaterialClassification,MaterialCode:e.MaterialCode,MaterialGrade:e.MaterialGrade,HazardousMaterialCompliance:e.HazardousMaterialCompliance,MaterialQuality:e.MaterialQuality,DateNonCurrentDomestic:e.DateNonCurrentDomestic,DateNonCurrentInternational:e.DateNonCurrentInternational,MaterialSystem:e.MaterialSystem,SubSystem:e.SubSystem,PartFamily:e.PartFamily,ManufacturingProcess:e.ManufacturingProcess,Source:e.Source,CADSurfaceArea:e.CADSurfaceArea,Volume:e.Volume,VolumeUnit:e.VolumeUnit,StorageConditions:e.StorageConditions,ShelfLife:e.ShelfLife,HeatTreatment:e.HeatTreatment,SurfaceTreatment:e.SurfaceTreatment,KitTagging:e.KitTagging,CanPartBeSoldSeparately:e.CanPartBeSoldSeparately,ShelfLifeDetails:e.ShelfLifeDetails,ShelfLifeUnitOfMeasurement:e.ShelfLifeUnitOfMeasurement}));var l={workbook:{columns:[{label:"MaterialID",property:"MaterialID"},{label:"Material",property:"Material"},{label:"Description",property:"Description"},{label:"CreatedOn",property:"CreatedOn"},{label:"Revision",property:"Revision"},{label:"BaseUnitOfMeasurement",property:"BaseUnitOfMeasurement"},{label:"Serviceability",property:"Serviceability"},{label:"PartDeletionDomestic",property:"PartDeletionDomestic"},{label:"PartDeletionInternational",property:"PartDeletionInternational"},{label:"PartReleaseStatus",property:"PartReleaseStatus"},{label:"ModelCode",property:"ModelCode"},{label:"Division",property:"Division"},{label:"InterchangeableParts",property:"InterchangeableParts"},{label:"LastServiceableDateDomestic",property:"LastServiceableDateDomestic"},{label:"LastServiceableDateInternational",property:"LastServiceableDateInternational"},{label:"ItemRevStatus",property:"ItemRevStatus"},{label:"Weight",property:"Weight"},{label:"WeightUnit",property:"WeightUnit"},{label:"Length",property:"Length"},{label:"Width",property:"Width"},{label:"Height",property:"Height"},{label:"DimensionUnit",property:"DimensionUnit"},{label:"BasicMaterial",property:"BasicMaterial"},{label:"MaterialClassification",property:"MaterialClassification"},{label:"MaterialCode",property:"MaterialCode"},{label:"MaterialGrade",property:"MaterialGrade"},{label:"HazardousMaterialCompliance",property:"HazardousMaterialCompliance"},{label:"MaterialQuality",property:"MaterialQuality"},{label:"DateNonCurrentDomestic",property:"DateNonCurrentDomestic"},{label:"DateNonCurrentInternational",property:"DateNonCurrentInternational"},{label:"MaterialSystem",property:"MaterialSystem"},{label:"SubSystem",property:"SubSystem"},{label:"PartFamily",property:"PartFamily"},{label:"ManufacturingProcess",property:"ManufacturingProcess"},{label:"Source",property:"Source"},{label:"CADSurfaceArea",property:"CADSurfaceArea"},{label:"Volume",property:"Volume"},{label:"VolumeUnit",property:"VolumeUnit"},{label:"StorageConditions",property:"StorageConditions"},{label:"ShelfLife",property:"ShelfLife"},{label:"HeatTreatment",property:"HeatTreatment"},{label:"SurfaceTreatment",property:"SurfaceTreatment"},{label:"KitTagging",property:"KitTagging"},{label:"CanPartBeSoldSeparately",property:"CanPartBeSoldSeparately"},{label:"ShelfLifeDetails",property:"ShelfLifeDetails"},{label:"ShelfLifeUnitOfMeasurement",property:"ShelfLifeUnitOfMeasurement"}]},dataSource:i,fileName:"Materials.xlsx",worker:false};var n=new t(l);n.build().then(function(){e.show("Spreadsheet export has finished.")}).finally(function(){n.destroy()})}).catch(function(a){e.show("Error fetching data: "+a.message)})}}});