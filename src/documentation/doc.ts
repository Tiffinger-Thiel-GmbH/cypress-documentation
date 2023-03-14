import { writeFile } from "fs/promises";

export class Document {
    private fileLocation: string;
  

    // Here the output file will be given
    constructor(filePath: string) {
        this.fileLocation = filePath;
    }


    public async writeFile(data: string) {
       await writeFile(this.fileLocation, data )     
    }


    
    
}