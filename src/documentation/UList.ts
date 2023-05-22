import * as ejs from "ejs";
import { readFileSync } from "fs";
import { Doc } from "./doc";
import { Template } from "./types";

export class UList {
  public uDoc: Doc;
  private _generated: string[] = [];

  private readonly _ulTemplate: string;
  private readonly _ilTemplate: string;

  constructor(ul: string, li: string, templatePath: Template) {
    this._ulTemplate = readFileSync(ul).toString();
    this._ilTemplate = readFileSync(li).toString();
    this.uDoc = new Doc(templatePath);
  }

  private generateLi() {
    this._generated = this.uDoc.generated.map((h) =>
      ejs.render(this._ilTemplate, { content: h })
    );
  }

  public generate() {
    this.generateLi();
    if (this._generated.length < 1) {
      return "";
    }
    return ejs.render(this._ulTemplate, {
      content: this._generated.reduce((prev, curr) => prev + "\n" + curr),
    });
  }
}
