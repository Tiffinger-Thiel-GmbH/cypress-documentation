import * as ejs from "ejs";

export class Doc {
  private readonly templateTextPath: string;
  private readonly templateHeaderPath: string;
  private readonly templateImagePath: string;
  private readonly templateAlertPath: string;
  private readonly templateLinkPath: string;
  private generated: string[] = [];

  constructor(templateFile: Props) {
    this.templateTextPath =
      templateFile.templateTextPath ||
      "./cypress/template/components/paragraph.ejs";
    this.templateHeaderPath =
      templateFile.templateHeaderPath ||
      "./cypress/template/components/header.ejs";
    this.templateImagePath =
      templateFile.templateImagePath ||
      "./cypress/template/components/image.ejs";
    this.templateAlertPath =
      templateFile.templateAlertPath ||
      "./cypress/template/components/alert.ejs";
    this.templateLinkPath =
      templateFile.templateLinkPath || "./cypress/template/components/link.ejs";
  }

  public text(text: string) {
    ejs.renderFile(this.templateTextPath, { text }, (err, str) => {
      if (err) {
        throw err;
      }
      this.generated.push(str);
    });
  }
  public header(text: string) {
    ejs.renderFile(this.templateHeaderPath, { text }, (err, str) => {
      if (err) {
        throw err;
      }
      this.generated.push(str);
    });
  }

  public alert(text: string) {
    ejs.renderFile(this.templateAlertPath, { text }, (err, str) => {
      if (err) {
        throw err;
      }
      this.generated.push(str);
    });
  }

  public screenshot(imageUrl: string) {
    ejs.renderFile(this.templateImagePath, { imageUrl }, (err, str) => {
      if (err) {
        throw err;
      }
      this.generated.push(str);
    });
  }

  public link(text: string, url: string) {
    ejs.renderFile(this.templateLinkPath, { text, url }, (err, str) => {
      if (err) {
        throw err;
      }
      this.generated.push(str);
    });
  }

  get doc() {
    return this.generated.reduce((prev, cur) => prev + "\n\n" + cur);
  }
}
