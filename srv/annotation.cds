using { vihaan.data as db } from '../db/schema';


annotate db.Materials with @(
  UI : {
    SelectionFields  : [Material, Description],
    LineItem         : [
      { Value : Material, Label : 'Material' },
      { Value : Description, Label : 'Description' },
      { Value : CreatedOn, Label : 'Created On' },
      { Value : Revision, Label : 'Revision' },
    ],
    FieldGroup#LineItemData : {
      Data : [
        { Value : Material, Label : 'Material' },
        { Value : Description, Label : 'Description' },
        { Value : CreatedOn, Label : 'Created On' },
        { Value : Revision, Label : 'Revision' },
        
      ]
    },
    Facets           : [
       {
        $Type  : 'UI.ReferenceFacet',
        Label  : 'Line Item Data',
        Target : '@UI.FieldGroup#LineItemData',
      },
      {
        $Type  : 'UI.ReferenceFacet',
        Label  : 'Vihaan Data',
        Target : '@UI.FieldGroup#VihaanData'
      },
      // {
      //   $Type  : 'UI.ReferenceFacet',
      //   Label  : 'Material Attributes',
      //   Target : '@UI.FieldGroup#MaterialAttributes'
      // },
      {
        $Type  : 'UI.ReferenceFacet',
        Label  : 'Vihaan Data 2',
        Target : '@UI.FieldGroup#VihaanData2'
      }
     
    ],
    FieldGroup#VihaanData : {
      Data : [
        { Value : BaseUnitOfMeasurement, Label : 'Base Unit of Measurement' },
        { Value : Division, Label : 'Division' },
        { Value : Serviceability, Label : 'Serviceability' },
        { Value : PartDeletionDomestic, Label : 'Part Deletion (Domestic)' },
        { Value : PartDeletionInternational, Label : 'Part Deletion (International)' },
        { Value : PartReleaseStatus, Label : 'Part Release Status' },
        { Value : ModelCode, Label : 'Model Code' },
        { Value : InterchangeableParts, Label : 'Interchangeable Parts' },
        { Value : LastServiceableDateDomestic, Label : 'Last Serviceable Date (Domestic)' },
        { Value : LastServiceableDateInternational, Label : 'Last Serviceable Date (International)' },
        { Value : ItemRevStatus, Label : 'Item Revision Status' },
                { Value : Weight, Label : 'Weight' },
        { Value : WeightUnit, Label : 'Weight Unit' },
        { Value : Length, Label : 'Length' },
        { Value : Width, Label : 'Width' },
        { Value : Height, Label : 'Height' },
        { Value : DimensionUnit, Label : 'Dimension Unit' },
        { Value : BasicMaterial, Label : 'Basic Material' },
        { Value : MaterialClassification, Label : 'Material Classification' },
        { Value : MaterialCode, Label : 'Material Code' },
        { Value : MaterialGrade, Label : 'Material Grade' },
        { Value : HazardousMaterialCompliance, Label : 'Hazardous Material Compliance' },
        { Value : MaterialQuality, Label : 'Material Quality' },
        { Value : DateNonCurrentDomestic, Label : 'Date Non-Current (Domestic)' },
        { Value : DateNonCurrentInternational, Label : 'Date Non-Current (International)' }
      ]
    },
    // FieldGroup#MaterialAttributes : {
    //   Data : [
    //     { Value : Weight, Label : 'Weight' },
    //     { Value : WeightUnit, Label : 'Weight Unit' },
    //     { Value : Length, Label : 'Length' },
    //     { Value : Width, Label : 'Width' },
    //     { Value : Height, Label : 'Height' },
    //     { Value : DimensionUnit, Label : 'Dimension Unit' },
    //     { Value : BasicMaterial, Label : 'Basic Material' },
    //     { Value : MaterialClassification, Label : 'Material Classification' },
    //     { Value : MaterialCode, Label : 'Material Code' },
    //     { Value : MaterialGrade, Label : 'Material Grade' },
    //     { Value : HazardousMaterialCompliance, Label : 'Hazardous Material Compliance' },
    //     { Value : MaterialQuality, Label : 'Material Quality' },
    //     { Value : DateNonCurrentDomestic, Label : 'Date Non-Current (Domestic)' },
    //     { Value : DateNonCurrentInternational, Label : 'Date Non-Current (International)' }
    //   ]
    // },
    FieldGroup#VihaanData2 : {
      Data : [
        { Value  :MaterialSystem, Label: 'System' },
        { Value : SubSystem, Label : 'Sub-System' },
        { Value : PartFamily, Label : 'Part Family' },
        { Value : ManufacturingProcess, Label : 'Manufacturing Process' },
        { Value : Source, Label : 'Source (FSS/BTP)' },
        { Value : CADSurfaceArea, Label : 'CAD Surface Area' },
        { Value : Volume, Label : 'Volume' },
        { Value : VolumeUnit, Label : 'Volume Unit' },
        { Value : StorageConditions, Label : 'Storage Conditions' },
        { Value : ShelfLife, Label : 'Shelf Life' },
        { Value : HeatTreatment, Label : 'Heat Treatment' },
        { Value : SurfaceTreatment, Label : 'Surface Treatment' },
        { Value : KitTagging, Label : 'Kit Tagging (Yes/No)' },
        { Value : CanPartBeSoldSeparately, Label : 'Can Part be Sold Separately?' },
        { Value : ShelfLifeDetails, Label : 'Shelf Life Details' },
        { Value : ShelfLifeUnitOfMeasurement, Label : 'Shelf Life Unit of Measurement' }
      ]
    },
    
  }
);



