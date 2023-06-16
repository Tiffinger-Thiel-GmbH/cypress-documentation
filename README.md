# Cy-How

## A user documentation generator embedded in Cypress!

### Installation

1. First install the package with

#### Important - this plugin is at the moment not accessible via npm repository

```bash
# With npm
npm i @tiffinger-thiel/cy-how

# With yarn
yarn add @tiffinger-thiel/cy-how
```

2. Add to `cypress/support/commands.{ts|js}` the following:

```javascript
import "@tiffinger-thiel/cy-how/dist/commands";
```

3. Add the setup function to your `cypress.config.{ts|js}`

```typescript
import { setUpDocumentationGenerator } from "@tiffinger-thiel/cy-how/dist/documentation/setup";

// OR Legacy import:
const {
  setUpDocumentationGenerator,
} = require("@tiffinger-thiel/cy-how/dist/documentation/setup");

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      setUpDocumentationGenerator(
        on,
        // Here you define the path to your template.
        // For more information see chapter 'template'
        {
          templateTextPath: "cypress/template/components/paragraph.ejs",
          templateHeaderPath: "cypress/template/components/header.ejs",
          templateImagePath: "cypress/template/components/image.ejs",
          templateAlertPath: "cypress/template/components/alert.ejs",
          templateLinkPath: "cypress/template/components/link.ejs",
          templateBodyPath: "cypress/template/documentPage.ejs",
        },
        {
          templateLiPath: "cypress/template/components/list.ejs",
          templateUlPath: "cypress/template/components/uList.ejs",
        }
      );
    },
  },
});
```

### How to use

You can now use these commands to generate a html (event with your own template) for your documentation

Example:

```typescript
before(() => {
  // First you have to initialize the documentation (marking beginning)
  cy.doc().init();
});

after(() => {
  // After the test you have to specify the output file
  cy.doc().write("outputFile.html");
});

// Then in your cypress test you can use these doc... commands

cy.doc().paragraph("text");
cy.doc().header("text");
cy.doc().link("http:/url.some", "link text");
// IMPORTANT!: This is the path relative where your output file is located
cy.doc().image("path/to/image");
cy.doc().alert("text");
cy.doc().unorderedList(() => {
  // Here you can put all html element commands from above. E.g
  cy.doc().paragraph("text");
  cy.doc().link("http:/url.some", "link text");
});
```

### Template

For more flexibility in your html document this generator runs with a html template engine: [EJS](https://ejs.co/)

Thefore you have do define for each element a html template.
These elements are:

- paragraph
- header
- link
- image
- alert
- unordered list
- list element
- document (body)

You can name it as you want, but you have to define the right path in the `setUpDocumentationGenerator()` - function

Here you can define how the html look like. That will be generated in the document.

| Templatefile   | Parsed Param                          | Description                                                                                                                            |
| -------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| paragraph      | `{text: string}`                      | Template for a simple html paragraph. E.g `<p><% text %></p>`                                                                          |
| header         | `{header: string}`                    | Template for a simple header. E.g. `<h2><%=header%></h2>`                                                                              |
| link           | `{link: {url: string ,text: string}}` | Template for a simple link element. E.g. `<a href="<%= link.url %>"><%= link.text %></a>`                                              |
| alert          | `{text: string}`                      | Template for a alert like html element. E.g. with bootstrap classes: `<div class="alert alert-primary" role="alert"><%= text %></div>` |
| image          | `{imageUrl: string}`                  | Template for an image element. E.g.: `<image src="<%= imageUrl %>"></image>`                                                           |
| unorderdList   | `{content: any}`                      | Template for the ul with can hold any content inside. E.g.: `<ul> <%- content %></ul>`                                                 |
| list (element) | `{content: any}`                      | Template for the li with can hold any content inside. E.g.: `<li> <%- content %></li>`                                                 |
| document       | `{body: any}`                         | The whole document. This should be a standart html template.                                                                           |

### Development

```bash
# Run yarn install
yarn

# open cypress
yarn cypress:open

# build (not finished yet)

yarn build
```
