import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import homePagepo from "../../pageobject/homePagePO";
import * as data from "../../fixtures/data.json";

Given("User navigates to the app URL", () => {
  cy.visit("/");
});

When("App loads successfully", () => {
  homePagepo.Label_Header().should("be.visible");
});

When("Navigate to Search by category as per specified path", (dataTable) => {
  homePagepo.label_ShopByCategory().click();
  dataTable.hashes().forEach((element) => {
    cy.contains(element.primary).click();
    cy.contains(element.secondary).click();
  });
});

When("click all filters", () => {
  homePagepo.button_AllFilters().click();
});

When("Apply screen size filter with below checkbox number", (dataTable) => {
  cy.contains(data.screenSize).click();
  dataTable.hashes().forEach((element) => {
    homePagepo.checkbox_screenSize().eq(element.checkBoxNumber).check();
  });
  cy.wait(2000);
});

When("Apply Min & Max price filter with below data", (dataTable) => {
  homePagepo.link_price().click();
  dataTable.hashes().forEach((element) => {
    homePagepo.input_minPrice().type(element.min);
    homePagepo.input_maxPrice().type(element.max);
  });
});

When("Apply item location filter option US only", () => {
  homePagepo.link_itemLocation().click();
  cy.get(homePagepo.selector.checkbox_USOnly).check();
});

When("Apply the filters", () => {
  cy.get(homePagepo.selector.button_applyFilter).click();
});

When("Verify that below filter set are applied", (dataTable) => {
  cy.contains("3 filters applied").should("be.visible").click();
  // Assuming you want to assert on the first <li> element
  dataTable.hashes().forEach((element) => {
    homePagepo.button_viewFilters().each(($el, index, $list) => {
      cy.wrap($el)
        .find(homePagepo.selector.label_appliedFilter)
        .invoke("text")
        .should((text) => {
          // Define the expected text for each element
          const expectedTexts = [
            element.filterOne,
            element.filterTwo,
            element.filterThree,
          ];
          // Check if the element's text includes the expected text
          expect(text).to.include(expectedTexts[index]);
        });
    });
  });
});
