import { Doc } from "./doc";

export class UList {
  private readonly _uDoc: Doc = new Doc();

  private _generated: string[] = [];

  public get uDoc() {
    return this._uDoc;
  }

  constructor(doc: Doc) {}

  private addLi() {}

  public generateUlist() {}
}
