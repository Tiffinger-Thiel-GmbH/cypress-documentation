import { readFileSync } from "fs";

const DEFAULT_OUTPUT_FILE = './dist/doc/output/output.md'

export class Doc {
    private fileLocation: string;
    private file?: Buffer;

    private generated: string[] = [];

    // Here the output file will be given
    constructor(filePath: string) {
        this.fileLocation = filePath;
        this.file = readFileSync(this.fileLocation);

        console.log(this.fileLocation);

        console.log("successfully file loaded")
    }

    public header(text: string) {
        const header = `**${text}**`

        this.generated.push(
            header
        )
    }

 
    public text(text: string) {
        const t = `${text}`

        this.generated.push(t);
    }

}