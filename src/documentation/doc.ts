import * as ejs from "ejs";
import { readFileSync } from "fs";
import { Template } from "./types";

export class Doc {
  private readonly _generated: string[] = [];

  public get generated(): string[] {
    return this._generated;
  }

  private readonly _templates: Template;
  public get templates(): Template {
    return this._templates;
  }

  constructor(templateFiles: Template) {
    this._templates = {
      templateAlertPath: readFileSync(
        templateFiles.templateAlertPath
      ).toString(),
      templateTextPath: readFileSync(templateFiles.templateTextPath).toString(),
      templateHeaderPath: readFileSync(
        templateFiles.templateHeaderPath
      ).toString(),
      templateBodyPath: readFileSync(templateFiles.templateBodyPath).toString(),
      templateImagePath: readFileSync(
        templateFiles.templateImagePath
      ).toString(),
      templateLinkPath: readFileSync(templateFiles.templateLinkPath).toString(),
    };
  }

  public text(text: string) {
    const html = ejs.render(this._templates.templateTextPath, { text });
    this._generated.push(html);
  }
  public header(header: string) {
    const html = ejs.render(this._templates.templateHeaderPath, { header });
    this._generated.push(html);
  }

  public alert(text: string) {
    const html = ejs.render(this._templates.templateAlertPath, { text });
    this._generated.push(html);
  }

  public screenshot(imageUrl: string) {
    const html = ejs.render(this._templates.templateImagePath, { imageUrl });
    this._generated.push(html);
  }

  public link(text: string, link: string) {
    const html = ejs.render(this._templates.templateLinkPath, {
      link: { text, link },
    });
    this._generated.push(html);
  }

  public generate(): string {
    return ejs.render(this._templates.templateBodyPath, { body: this.doc });
  }

  public list(ulistHtml: string) {
    return this._generated.push(ulistHtml);
  }

  get doc() {
    if (this._generated.length < 1) {
      console.warn("Array is empty!");
      return [];
    }
    return this._generated.reduce((prev, cur) => prev + "\n\n" + cur);
  }
}
