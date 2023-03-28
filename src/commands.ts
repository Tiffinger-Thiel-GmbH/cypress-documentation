import { Doc } from "./documentation/doc"


Cypress.Commands.add('docHeader',(doc: Doc, text: string) => {
    doc.header(text);
})

Cypress.Commands.add('docText',(doc: Doc, text: string) => {
    doc.text(text)
})

Cypress.Commands.add('docWrite', (doc: Doc, filePath: string) => {
    cy.writeFile(filePath, doc.doc)
    cy.log(`Documentation file written to ${filePath}`)
})