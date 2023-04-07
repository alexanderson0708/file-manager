import { resolve } from "path"
import { cwd } from "process"

export const getPath = (fileName) =>{
    return resolve(cwd(), fileName)
}

