import * as ejs from "ejs";
import { Doc } from "./doc";

export class UList {
  public uDoc: Doc;
  private _generated: string[] = [];

  private readonly _ulTemplate: string;
  private readonly _ilTemplate: string;

  constructor(ul: string, li: string, parentDoc: Doc) {
    this._ulTemplate = ul;
    this._ilTemplate = li;
    this.uDoc = new Doc({
      templateAlertPath: parentDoc.templateAlertPath,
      templateBodyPath: parentDoc.templateBodyPath,
      templateHeaderPath: parentDoc.templateHeaderPath,
      templateImagePath: parentDoc.templateImagePath,
      templateLinkPath: parentDoc.templateLinkPath,
      templateLiPath: parentDoc.templateLiPath,
      templateTextPath: parentDoc.templateTextPath,
      templateUlPath: parentDoc.templateUlPath,
    });
  }

  private generateLi() {
    this._generated = this.uDoc.generated.map((h) =>
      ejs.render(this._ilTemplate, { content: h })
    );
  }

  public generate() {
    this.generateLi();
    if (this._generated.length < 1) {
      return;
    }
    return ejs.render(this._ulTemplate, {
      content: this._generated.reduce((prev, curr) => prev + "\n" + curr),
    });
  }
}
