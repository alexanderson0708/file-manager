import { readdir} from 'node:fs/promises';
import { FAILED_ERROR } from '../helpers/errors.js';
import { getPath } from '../helpers/getPath.js';


export const handleUp = async () => {
    process.chdir(getPath(path)+"../")
}///check this

export const handleCd = async (path) => {
    process.chdir(getPath(path))
}

export const hanldeLs = async (path) => {
    let files = await readdir(getPath(path), {withFileTypes:true})
    const sortedFiles = files.sort((a,b) => a.isFile() - b.isFile())
    const res = sortedFiles.map((elem)=> ({Name: elem.name, Type: elem.isFile() ? 'file' : 'directory'}))
    console.table(res)
};