describe("create documentation", () => {
  it("should created a file", () => {
    cy.log("Try to create a new instance of the documentation");

    cy.doc().init();

    cy.doc().header("Header TEST");

    cy.doc().paragraph("Dies ist ein Paragraph");

    cy.doc().alert("Dies ist ein Alert");

    cy.doc().link("Hier der Weg zu Google.de", "https://www.google.de/");

    cy.visit("https://aligator.dev/");

    cy.screenshot("aligator-dev", {
      capture: "viewport",
      overwrite: true,
    }).then(() => {
      cy.doc().image("cypress/screenshots/aligator-dev.png");
    });

    // cy.doc().unorderedList(() => {
    //   cy.doc().paragraph("First element in the list");
    //   cy.doc().link("Second element", "https://google.de");
    //   cy.doc().header("Dies ist eine Überschrift in einer Liste");
    // });
  });

  it("should generate more elements", () => {
    cy.doc().paragraph("Ein weiter paragraph");
    cy.doc().paragraph("Ein weiter paragraph");
    cy.doc().paragraph("Ein weiter paragraph");
    cy.doc().paragraph("Ein weiter paragraph");
  });
  it("should work even session is cleared", () => {
    // Cypress.session.clearAllSavedSessions();
    cy.visit("https://google.de");

    cy.doc().paragraph("This should work even session is cleared");
  });

  it("should write the file", () => {
    cy.doc().write("output.html");
  });
});
