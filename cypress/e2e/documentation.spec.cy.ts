import { Doc } from "../../src/documentation/doc"

const doc = new Doc('public/test.md')


describe('create documentation', () => {
    it('should created a file', () => {
        cy.log('Try to create a new instance of the documentation')
        cy.doc(doc)
    })
})