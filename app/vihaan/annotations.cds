using CatalogService as service from '../../srv/schema_srv';
using from '../../srv/annotation';

annotate service.Materials with {
    ModelCode @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Materials',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : ModelCode,
                    ValueListProperty : 'ModelCode',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Materials with @(
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Table View',
    }
);
annotate service.Materials with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Line Item Data',
            Target : '@UI.FieldGroup#LineItemData',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Vihaan Data',
            Target : '@UI.FieldGroup#VihaanData',
        },
        // {
        //     $Type : 'UI.ReferenceFacet',
        //     Label : 'Material Attributes',
        //     Target : '@UI.FieldGroup#MaterialAttributes',
        // },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Vihaan Data 2',
            Target : '@UI.FieldGroup#VihaanData2',
        },
    ]
);
annotate service.Materials with @(
    UI.LineItem #tableView : [
    ],
    UI.SelectionPresentationVariant #tableView1 : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Table View 1',
    }
);
annotate service.Materials with @(
    UI.FieldGroup #VihaanData : {
        Data : [
            {
                $Type : 'UI.DataField',
                Value : BaseUnitOfMeasurement,
                Label : 'Base Unit of Measurement',
            },
            {
                $Type : 'UI.DataField',
                Value : Division,
                Label : 'Division',
            },
            {
                $Type : 'UI.DataField',
                Value : Serviceability,
                Label : 'Serviceability',
            },
            {
                $Type : 'UI.DataField',
                Value : PartDeletionDomestic,
                Label : 'Part Deletion (Domestic)',
            },
            {
                $Type : 'UI.DataField',
                Value : PartDeletionInternational,
                Label : 'Part Deletion (International)',
            },
            {
                $Type : 'UI.DataField',
                Value : PartReleaseStatus,
                Label : 'Part Release Status',
            },
            {
                $Type : 'UI.DataField',
                Value : ModelCode,
                Label : 'Model Code',
            },
            {
                $Type : 'UI.DataField',
                Value : InterchangeableParts,
                Label : 'Interchangeable Parts',
            },
            {
                $Type : 'UI.DataField',
                Value : LastServiceableDateDomestic,
                Label : 'Last Serviceable Date (Domestic)',
            },
            {
                $Type : 'UI.DataField',
                Value : LastServiceableDateInternational,
                Label : 'Last Serviceable Date (International)',
            },
            {
                $Type : 'UI.DataField',
                Value : ItemRevStatus,
                Label : 'Item Revision Status',
            },
            {
                $Type : 'UI.DataField',
                Value : Weight,
                Label : 'Weight',
            },
            {
                $Type : 'UI.DataField',
                Value : WeightUnit,
                Label : 'Weight Unit',
            },
            {
                $Type : 'UI.DataField',
                Value : Length,
                Label : 'Length',
            },
            {
                $Type : 'UI.DataField',
                Value : Width,
                Label : 'Width',
            },
            {
                $Type : 'UI.DataField',
                Value : Height,
                Label : 'Height',
            },
            {
                $Type : 'UI.DataField',
                Value : DimensionUnit,
                Label : 'Dimension Unit',
            },
            {
                $Type : 'UI.DataField',
                Value : BasicMaterial,
                Label : 'Basic Material',
            },
            {
                $Type : 'UI.DataField',
                Value : MaterialClassification,
                Label : 'Material Classification',
            },
            {
                $Type : 'UI.DataField',
                Value : MaterialCode,
                Label : 'Material Code',
            },
            {
                $Type : 'UI.DataField',
                Value : MaterialGrade,
                Label : 'Material Grade',
            },
            {
                $Type : 'UI.DataField',
                Value : HazardousMaterialCompliance,
                Label : 'Hazardous Material Compliance',
            },
            {
                $Type : 'UI.DataField',
                Value : MaterialQuality,
                Label : 'Material Quality',
            },
            {
                $Type : 'UI.DataField',
                Value : DateNonCurrentInternational,
                Label : 'Date Non-Current (International)',
            },
            {
                $Type : 'UI.DataField',
                Value : DateNonCurrentDomestic,
                Label : 'Date Non-Current (Domestic)',
            },
        ],
    }
);
