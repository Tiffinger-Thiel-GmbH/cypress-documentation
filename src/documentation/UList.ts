import * as ejs from "ejs";
import { Doc } from "./doc";

export class UList {
  public uDoc: Doc = new Doc();
  private _generated: string[] = [];

  private readonly _ulTemplate: string;
  private readonly _ilTemplate: string;

  constructor(ul: string, li: string) {
    this._ulTemplate = ul;
    this._ilTemplate = li;
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
