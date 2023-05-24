describe("create documentation", () => {
  it("should created a file", () => {
    cy.log("Try to create a new instance of the documentation");

    cy.doc().header("Header TEST");

    cy.doc().paragraph("Dies ist ein Paragraph");

    cy.doc().alert("Dies ist ein Alert");

    cy.visit("https://aligator.dev/");

    cy.screenshot("aligator-dev", {
      capture: "viewport",
      overwrite: true,
    }).then(() => {
      cy.doc().image("cypress/screenshots/aligator-dev.png");
    });

    cy.doc().link("Hier der Weg zu Google.de", "https://www.google.de/");

    //   cy.doc().unorderedList(() => {
    //     cy.doc().paragraph("First element in the list");
    //     cy.doc().link("Second element", "https://google.de");
    //     cy.doc().header("Dies ist eine Überschrift in einer Liste");
    //   });

    //   cy.doc().header("After making list");
  });

  it("should work even session is cleared", () => {
    Cypress.session.clearAllSavedSessions();
    cy.doc().write("output.html");

    cy.visit("https://google.de");

    cy.doc().paragraph("This should work even session is cleared");
  });
});
