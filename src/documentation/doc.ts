import * as ejs from "ejs";
import { Props } from "./types";

export class Doc {
  private readonly _templateTextPath: string;
  public get templateTextPath(): string {
    return this._templateTextPath;
  }

  private readonly _templateHeaderPath: string;
  public get templateHeaderPath(): string {
    return this._templateHeaderPath;
  }

  private readonly _templateImagePath: string;
  public get templateImagePath(): string {
    return this._templateImagePath;
  }

  private readonly _templateAlertPath: string;
  public get templateAlertPath(): string {
    return this._templateAlertPath;
  }

  private readonly _templateLinkPath: string;
  public get templateLinkPath(): string {
    return this._templateLinkPath;
  }

  private readonly _templateBodyPath: string;
  public get templateBodyPath(): string {
    return this._templateBodyPath;
  }

  private readonly _templateUlPath: string;

  public get templateUlPath(): string {
    return this._templateUlPath;
  }

  private readonly _templateLiPath: string;

  public get templateLiPath(): string {
    return this._templateLiPath;
  }

  private readonly _generated: string[] = [];
  public get generated(): string[] {
    return this._generated;
  }
  constructor(templateFile: Props) {
    this._templateTextPath = templateFile.templateTextPath;
    this._templateHeaderPath = templateFile.templateHeaderPath;
    this._templateImagePath = templateFile.templateImagePath;
    this._templateAlertPath = templateFile.templateAlertPath;
    this._templateLinkPath = templateFile.templateLinkPath;
    this._templateBodyPath = templateFile.templateBodyPath;
    this._templateUlPath = templateFile.templateUlPath;
    this._templateLiPath = templateFile.templateLiPath;

    console.log("New Doc instance have been created!");
  }

  public text(template: string, text: string) {
    const html = ejs.render(template, { text });
    this._generated.push(html);
  }
  public header(template: string, header: string) {
    const html = ejs.render(template, { header });
    this._generated.push(html);
  }

  public alert(template: string, text: string) {
    const html = ejs.render(template, { text });
    this._generated.push(html);
  }

  public screenshot(template: string, imageUrl: string) {
    const html = ejs.render(template, { imageUrl });
    this._generated.push(html);
  }

  public link(template: string, text: string, link: string) {
    const html = ejs.render(template, { link: { text, link } });
    this._generated.push(html);
  }

  public generate(bodyTemplate: string): string {
    return ejs.render(bodyTemplate, { body: this.doc });
  }

  public uList(ulistHtml: string) {
    return this._generated.push(ulistHtml);
  }

  get doc() {
    if (this._generated.length < 1) {
      console.warn("Array is empty!");
    }
    return this._generated.reduce((prev, cur) => prev + "\n\n" + cur);
  }
}
