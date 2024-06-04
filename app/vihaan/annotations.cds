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
