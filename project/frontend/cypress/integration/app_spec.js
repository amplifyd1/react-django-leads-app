describe("Django REST framework / React quickstart app", () => {
  const lead = {
    name: "Bubba",
    email: "Bubs@gmail.com",
    message: "I have been looking for love in the wrong places"
  };

  before(() => {
    cy.exec("npm run dev");
    cy.exec("npm run flush");
  });
  it("should be able to fill a web form", () => {
    cy.visit("/");
    cy
      .get('input[name="name"]')
      .type(lead.name)
      .should("have.value", lead.name);
    cy
      .get('input[name="email"]')
      .type(lead.email)
      .should("have.value", lead.email);
    cy
      .get('textarea[name="message"]')
      .type(lead.message)
      .should("have.value", lead.message);
    cy.get("form").submit();
  });
  // more tests here
});
