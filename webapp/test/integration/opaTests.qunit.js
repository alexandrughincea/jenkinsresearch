sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/xRFMxCU_FPG_AllowedFundingTypeList',
		'project1/test/integration/pages/xRFMxCU_FPG_AllowedFundingTypeObjectPage'
    ],
    function(JourneyRunner, opaJourney, xRFMxCU_FPG_AllowedFundingTypeList, xRFMxCU_FPG_AllowedFundingTypeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThexRFMxCU_FPG_AllowedFundingTypeList: xRFMxCU_FPG_AllowedFundingTypeList,
					onThexRFMxCU_FPG_AllowedFundingTypeObjectPage: xRFMxCU_FPG_AllowedFundingTypeObjectPage
                }
            },
            opaJourney.run
        );
    }
);