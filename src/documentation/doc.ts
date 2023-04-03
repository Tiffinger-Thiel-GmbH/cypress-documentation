export class Doc {
  private generated: string[] = [];

  public header(text: string) {
    const header = `# ${text}`;
    this.generated.push(header);
  }
  public text(text: string) {
    const t = `${text}`;
    this.generated.push(t);
  }

  public alert(text: string) {
    this.generated.push(`> ${text}`);
  }

  get doc() {
    return this.generated.reduce((prev, cur) => prev + "\n\n" + cur);
  }
}
