sap.ui.define([
    "sap/ui/test/opaQunit"
], function (opaTest) {
    "use strict";

    var Journey = {
        run: function () {
            QUnit.module("First journey");
            opaTest("Start application", function (Given, When, Then) {
                Given.iStartMyApp();
                Then.onThexRFMxCU_FPG_AllowedFundingTypeList.iSeeThisPage();
            });
            opaTest("Navigate to ObjectPage", function (Given, When, Then) {
                // Note: this test will fail if the ListReport page doesn't show any data
                When.onThexRFMxCU_FPG_AllowedFundingTypeList.onFilterBar().iExecuteSearch();
                Then.onThexRFMxCU_FPG_AllowedFundingTypeList.onTable().iCheckRows();

                When.onThexRFMxCU_FPG_AllowedFundingTypeList.onTable().iPressRow(0);
                Then.onThexRFMxCU_FPG_AllowedFundingTypeObjectPage.iSeeThisPage();

            });

            opaTest("Teardown", function (Given, When, Then) {
                // Cleanup
                Given.iTearDownMyApp();
            });
        }
    }

    return Journey;
});
