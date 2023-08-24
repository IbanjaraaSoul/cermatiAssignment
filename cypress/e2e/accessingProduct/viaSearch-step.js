import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import homePagepo from "../../pageobject/homePagePO";

When("Type a text in the search bar", (dataTable) => {
  dataTable.hashes().forEach((element) => {
    homePagepo.input_searchBar().clear().type(element.text);
  });
});

When("Click search", () => {
  homePagepo.button_search().click();
});

When("Change the category section to laptop desktop accessories", () => {
  homePagepo.label_laptopAccessories().click();
});

When("Verify that the home page loads completely", () => {
  homePagepo.label_footer().should("be.visible");
});

When(
  "Verify that the nth result name matches with the search string",
  (dataTable) => {
    dataTable.hashes().forEach((element) => {
      cy.get(homePagepo.selector.label_product)
        .eq(element.nth)
        .invoke("text")
        .should("include", element.text);
    });
  }
);
