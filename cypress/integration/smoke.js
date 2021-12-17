describe("My First Test", () => {
  it("Visits the ReactApp", () => {
    cy.visit("http://localhost:3000/");
  });
  it("checking the articles data", () => {
    cy.contains("id : 13335");
    cy.contains("title : Satellite Vu orders first satellite from SSTL");
    cy.contains(
      "url : https://spacenews.com/satellite-vu-orders-first-satellite-from-sstl/"
    );
    cy.contains("newsSite : SpaceNews");
    cy.contains("publishedAt : 2021-12-17T05:26:43.000Z");
    // cy.contains("updatedAt :2021-12-17T05:26:43.481Z");
  });
  it("checking the Routing links", () => {
    cy.contains("Articles").wait(1000).click();
    cy.contains("Dashboard").wait(1000).click();
  });
  it("checking the Dashbaord button", () => {
    cy.contains("DashboardPage").wait(1000).click();
    cy.contains("DashboardPage").wait(1000).click();
  });
});
