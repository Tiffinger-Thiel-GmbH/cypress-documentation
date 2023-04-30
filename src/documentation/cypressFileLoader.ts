export function cypressFileLoader(
  filePath: string,
  cy: Cypress.Chainable<void>
) {
  return cy.readFile(filePath).then((str: string) => str);
}
