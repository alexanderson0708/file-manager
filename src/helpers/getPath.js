import { resolve } from "path"

export const getPath = (fileName) =>{
    return resolve(process.cwd(), fileName)
}

export const showCurrentDirectory = () => {
    return console.log(`CURRENT DIRECTORY: ${process.cwd()}`);
}