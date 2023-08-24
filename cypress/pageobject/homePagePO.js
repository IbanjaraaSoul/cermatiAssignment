class homePagepo {
  selector = {
    button_applyFilter: ".x-overlay-footer__apply-btn.btn.btn--primary",
    checkbox_USOnly: 'input[value="US Only"]',
    label_appliedFilter: ".brm__item-label",
    label_product: ".s-item__title > span",
  };

  Label_Header() {
    return cy.get("#gh-l-h1");
  }

  label_ShopByCategory() {
    return cy.get("#gh-shop-a");
  }

  button_AllFilters() {
    return cy.get(".brm__all-filters");
  }

  checkbox_screenSize() {
    return cy.get(".checkbox.cbx.x-refine__multi-select-checkbox > input");
  }

  link_price() {
    return cy.get("#c2-mainPanel-price");
  }

  input_minPrice() {
    return cy.get('input[aria-label="Minimum Value, US Dollar"]');
  }

  input_maxPrice() {
    return cy.get('input[aria-label="Maximum Value, US Dollar"]');
  }

  button_viewFilters() {
    return cy.get(".brm__aspect-item.brm__aspect-item--applied");
  }

  link_itemLocation() {
    return cy.get("#c2-mainPanel-location > .x-overlay-aspect__label");
  }

  input_searchBar() {
    return cy.get("#gh-ac");
  }

  button_search() {
    return cy.get(".btn.btn-prim.gh-spr");
  }

  label_laptopAccessories() {
    return cy.get(":nth-child(2) > :nth-child(1) > a > span");
  }

  label_footer() {
    return cy.get(".s-footer-notes > :nth-child(2)");
  }
}
export default new homePagepo();
