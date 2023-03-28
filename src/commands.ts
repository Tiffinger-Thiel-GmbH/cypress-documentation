import { Doc } from "./documentation/doc"

Cypress.Commands.add('doc',(doc) => {
    return doc;
})

Cypress.Commands.add('header', {prevSubject: true} ,(doc: Doc, text) => {
    doc.header(text);
})

Cypress.Commands.add('text', {prevSubject: true}, (doc: Doc, text) => {
    doc.text(text)
})