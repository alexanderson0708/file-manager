import { readdir} from 'node:fs/promises';


export const handleUp = async () => {
    process.chdir('..')
}

export const handleCd = async (path) => {
    process.chdir(path)
}

export const handleLs = async () => {
    let files = await readdir(process.cwd(), {withFileTypes:true})
    const sortedFiles = files.sort((a,b) => a.isFile() - b.isFile())
    const res = sortedFiles.map((elem)=> ({Name: elem.name, Type: elem.isFile() ? 'file' : 'directory'}))
    console.table(res)
};