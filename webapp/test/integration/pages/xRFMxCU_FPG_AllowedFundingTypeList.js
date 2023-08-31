sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'project1',
            componentId: 'xRFMxCU_FPG_AllowedFundingTypeList',
            entitySet: 'xRFMxCU_FPG_AllowedFundingType'
        },
        CustomPageDefinitions
    );
});