# CHow

## A user documentation generator embedded in Cypress!

### Installation

Not finished yet

### How to use

You can now use these commands to generate a html (event with your own template) for your documentation

Example:

```typescript
// First you must create a documentation instance to generate the output and to locale your templates
// These templates are optional HOWEVER for now you must create templates for each option
const doc = new Doc({
  templateTextPath: 'path/to/template/file.ejs';
  templateHeaderPath: 'path/to/template/file.ejs';
  templateImagePath: 'path/to/template/file.ejs';
  templateAlertPath: 'path/to/template/file.ejs';
  templateLinkPath: 'path/to/template/file.ejs';
  templateBodyPath: 'path/to/template/file.ejs';
  templateUlPath: 'path/to/template/file.ejs';
  templateLiPath: 'path/to/template/file.ejs';
})


// Then in your cypress test you can use these doc... commands

cy.docText(doc, "Some text")
cy.docHeader(doc, "Some header text")
cy.docAlert(doc, "Some alert")
cy.docImage(doc, "path/to/the/image")
cy.docLink(doc, "Text for the link", "url")
cy.docUlist(doc, (uDoc) => {
    cy.docText(uDoc /** You must use the given uDoc to generate inside the list */, "some text inside your list")
    ...
    // For the last element you must return this for cypress reasons (this will be fixted in the future)
    return cy.docLink(uDoc, "text for the link", url)
})


// At the end of your test (or when you end the documentation generation) you have to call the write command to write your html

cy.docWrite(doc, "path/to/write/html.html")
```

### Development

```bash
# Run yarn install
yarn

# open cypress
yarn cypress:open

# build (not finished yet)

yarn build
```
