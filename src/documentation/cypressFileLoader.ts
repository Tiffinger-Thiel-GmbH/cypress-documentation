export function cypressFileLoader(
  filePath: string,
  cy: Cypress.Chainable<any>
) {
  return cy.readFile(filePath).then((str: string) => str);
}
