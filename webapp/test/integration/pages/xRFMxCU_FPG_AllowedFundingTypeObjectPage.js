sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';
    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };
    return new ObjectPage(
        {
            appId: 'project1',
            componentId: 'xRFMxCU_FPG_AllowedFundingTypeObjectPage',
            entitySet: 'xRFMxCU_FPG_AllowedFundingType'
        },
        CustomPageDefinitions
    );
});