//@ui5-bundle vihaan/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"vihaan/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("vihaan.Component",{metadata:{manifest:"json"}})});
},
	"vihaan/ext/controller/DownloadExcel.js":function(){sap.ui.define(["sap/m/MessageToast","sap/ui/model/odata/v4/ODataModel","sap/ui/export/Spreadsheet"],function(e,a,t){"use strict";return{onclick:function(r){e.show("Custom handler invoked.");var i="/odata/v4/catalog/";var l=new a({serviceUrl:i,synchronizationMode:"None"});l.bindList("/Materials").requestContexts().then(function(a){var r=a.map(function(e){return e.getObject()});var i=r.map(e=>({MaterialID:e.MaterialID,Material:e.Material,Description:e.Description,CreatedOn:e.CreatedOn,Revision:e.Revision,BaseUnitOfMeasurement:e.BaseUnitOfMeasurement,Serviceability:e.Serviceability,PartDeletionDomestic:e.PartDeletionDomestic,PartDeletionInternational:e.PartDeletionInternational,PartReleaseStatus:e.PartReleaseStatus,ModelCode:e.ModelCode,Division:e.Division,InterchangeableParts:e.InterchangeableParts,LastServiceableDateDomestic:e.LastServiceableDateDomestic,LastServiceableDateInternational:e.LastServiceableDateInternational,ItemRevStatus:e.ItemRevStatus,Weight:e.Weight,WeightUnit:e.WeightUnit,Length:e.Length,Width:e.Width,Height:e.Height,DimensionUnit:e.DimensionUnit,BasicMaterial:e.BasicMaterial,MaterialClassification:e.MaterialClassification,MaterialCode:e.MaterialCode,MaterialGrade:e.MaterialGrade,HazardousMaterialCompliance:e.HazardousMaterialCompliance,MaterialQuality:e.MaterialQuality,DateNonCurrentDomestic:e.DateNonCurrentDomestic,DateNonCurrentInternational:e.DateNonCurrentInternational,MaterialSystem:e.MaterialSystem,SubSystem:e.SubSystem,PartFamily:e.PartFamily,ManufacturingProcess:e.ManufacturingProcess,Source:e.Source,CADSurfaceArea:e.CADSurfaceArea,Volume:e.Volume,VolumeUnit:e.VolumeUnit,StorageConditions:e.StorageConditions,ShelfLife:e.ShelfLife,HeatTreatment:e.HeatTreatment,SurfaceTreatment:e.SurfaceTreatment,KitTagging:e.KitTagging,CanPartBeSoldSeparately:e.CanPartBeSoldSeparately,ShelfLifeDetails:e.ShelfLifeDetails,ShelfLifeUnitOfMeasurement:e.ShelfLifeUnitOfMeasurement}));var l={workbook:{columns:[{label:"MaterialID",property:"MaterialID"},{label:"Material",property:"Material"},{label:"Description",property:"Description"},{label:"CreatedOn",property:"CreatedOn"},{label:"Revision",property:"Revision"},{label:"BaseUnitOfMeasurement",property:"BaseUnitOfMeasurement"},{label:"Serviceability",property:"Serviceability"},{label:"PartDeletionDomestic",property:"PartDeletionDomestic"},{label:"PartDeletionInternational",property:"PartDeletionInternational"},{label:"PartReleaseStatus",property:"PartReleaseStatus"},{label:"ModelCode",property:"ModelCode"},{label:"Division",property:"Division"},{label:"InterchangeableParts",property:"InterchangeableParts"},{label:"LastServiceableDateDomestic",property:"LastServiceableDateDomestic"},{label:"LastServiceableDateInternational",property:"LastServiceableDateInternational"},{label:"ItemRevStatus",property:"ItemRevStatus"},{label:"Weight",property:"Weight"},{label:"WeightUnit",property:"WeightUnit"},{label:"Length",property:"Length"},{label:"Width",property:"Width"},{label:"Height",property:"Height"},{label:"DimensionUnit",property:"DimensionUnit"},{label:"BasicMaterial",property:"BasicMaterial"},{label:"MaterialClassification",property:"MaterialClassification"},{label:"MaterialCode",property:"MaterialCode"},{label:"MaterialGrade",property:"MaterialGrade"},{label:"HazardousMaterialCompliance",property:"HazardousMaterialCompliance"},{label:"MaterialQuality",property:"MaterialQuality"},{label:"DateNonCurrentDomestic",property:"DateNonCurrentDomestic"},{label:"DateNonCurrentInternational",property:"DateNonCurrentInternational"},{label:"MaterialSystem",property:"MaterialSystem"},{label:"SubSystem",property:"SubSystem"},{label:"PartFamily",property:"PartFamily"},{label:"ManufacturingProcess",property:"ManufacturingProcess"},{label:"Source",property:"Source"},{label:"CADSurfaceArea",property:"CADSurfaceArea"},{label:"Volume",property:"Volume"},{label:"VolumeUnit",property:"VolumeUnit"},{label:"StorageConditions",property:"StorageConditions"},{label:"ShelfLife",property:"ShelfLife"},{label:"HeatTreatment",property:"HeatTreatment"},{label:"SurfaceTreatment",property:"SurfaceTreatment"},{label:"KitTagging",property:"KitTagging"},{label:"CanPartBeSoldSeparately",property:"CanPartBeSoldSeparately"},{label:"ShelfLifeDetails",property:"ShelfLifeDetails"},{label:"ShelfLifeUnitOfMeasurement",property:"ShelfLifeUnitOfMeasurement"}]},dataSource:i,fileName:"Materials.xlsx",worker:false};var n=new t(l);n.build().then(function(){e.show("Spreadsheet export has finished.")}).finally(function(){n.destroy()})}).catch(function(a){e.show("Error fetching data: "+a.message)})}}});
},
	"vihaan/ext/controller/ListReportExtension.js":function(){sap.ui.define(["sap/m/MessageToast","sap/m/Dialog","sap/m/Button","sap/ui/unified/FileUploader"],function(e,t,o,a){"use strict";return{handleUpload:function(n){var l=new t({title:"Upload Confirmation",type:"Message",content:[new sap.m.Text({text:"Do you want to proceed with the upload?"}),new a({id:"fileUploader",uploadUrl:"/odata/v4/catalog/Materials",uploadUrl:"your_upload_url",uploadComplete:function(){e.show("File uploaded successfully.");l.close()},visible:false})],beginButton:new o({text:"Yes",press:function(){l.close()}}),endButton:new o({text:"No",press:function(){l.close()}}),afterClose:function(){l.destroy()}});var s=new o({text:"Upload Excel",press:function(){var e=sap.ui.getCore().byId("fileUploader");e.setVisible(true);e.upload()}});var u=new o({text:"Cancel",press:function(){l.close()}});l.addButton(s);l.addButton(u);l.open()}}});
},
	"vihaan/ext/fragment/CustomAction.controller.js":function(){sap.ui.define(["sap/m/MessageToast"],function(s){"use strict";return{onPress:function(e){s.show("Custom handler invoked.")}}});
},
	"vihaan/ext/fragment/CustomAction.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m"><Button core:require="{ handler: \'vihaan/ext/fragment/CustomAction.controller\'}" text="CustomAction" press="handler.onPress" /></core:FragmentDefinition>',
	"vihaan/ext/handleDownload/HandleDownload.js":function(){sap.ui.define(["sap/m/MessageToast"],function(n){"use strict";return{handleDownload:function(e){n.show("Custom handler invoked.")}}});
},
	"vihaan/i18n/i18n.properties":'# This is the resource bundle for vihaan\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Object Page\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\n#XFLD,25\nflpTitle=Excel\n\n#XCOL: Custom action text\nuploadExcel=Upload Excel\n',
	"vihaan/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"vihaan","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"embeds":["thirdparty/customcontrol/spreadsheetimporter/v0_34_1"],"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.4","toolsId":"3ca0c609-9767-4138-a242-377329dc1e53"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"UploadExcel-Upload":{"semanticObject":"UploadExcel","action":"Upload","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"extends":{"extensions":{"sap.ui.commands":{"vihaan#myListReportComponent":{"CustomActionCommand":{"shortcut":"Ctrl+G"}}},"sap.ui.controllerExtensions":{"sap.suite.ui.generic.template.ListReport.view.ListReport":{"controllerName":"vihaan.ext.controller.ListReportExtension"},"sap.fe.templates.ListReport.ListReportController":{"controllerName":"vihaan.ext.fragment.CustomAction"}},"sap.ui.viewExtensions":{"sap.suite.ui.generic.template.ListReport.view.ListReport":{"AfterTableToolbar":{"fragmentName":"vihaan.ext.list.CustomActionFragment","type":"sap.ui.core.Fragment"}}}}},"sap.ui.generic.app":{"pages":[{"component":{"name":"sap.suite.ui.generic.template.ListReport","listReport":{"table":{"type":"ResponsiveTable","toolBar":{"actions":{"001":{"requiresSelection":false,"text":"Upload Excel","press":"vihaan.ext.controller.ListReportExtension.handleUpload","visible":true,"enabled":true}}}}}}}]},"flexEnabled":false,"resourceRoots":{"cc.spreadsheetimporter.v0_34_1":"./thirdparty/customcontrol/spreadsheetimporter/v0_34_1"},"componentUsages":{"spreadsheetImporter":{"name":"cc.spreadsheetimporter.v0_34_1"}},"dependencies":{"minUI5Version":"1.124.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"vihaan.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"MaterialsList","target":"MaterialsList"},{"pattern":"Materials({key}):?query:","name":"MaterialsObjectPage","target":"MaterialsObjectPage"}],"targets":{"MaterialsList":{"type":"Component","id":"MaterialsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Materials","variantManagement":"Page","navigation":{"Materials":{"detail":{"route":"MaterialsObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"},"actions":{"001":{"press":"vihaan.ext.controller.ListReportExtension.handleUpload","visible":true,"enabled":true,"requiresSelection":false,"text":"Upload Excel"},"002":{"press":"vihaan.ext.controller.DownloadExcel.onclick","visible":true,"enabled":true,"requiresSelection":false,"text":"Download Excel"}}}},"defaultTemplateAnnotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","views":{"paths":[{"key":"tableView","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView"},{"key":"excel","label":"Upload Excel","template":"vihaan.ext.fragment.CustomAction"}]}}}},"MaterialsObjectPage":{"type":"Component","id":"MaterialsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Materials"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"fiori"}}'
}});
