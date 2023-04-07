import { getPath } from "../helpers/getPath";
import { writeFile, createReadStream, rename, cp, unlink, copyFile } from "fs/promises";;

export const handleAdd = async (fileName) => {
    await writeFile(getPath(fileName), '', {flag: 'wx'})
};

export const handleCat = async (path) => {
    const stream = createReadStream(getPath(path))
    stream.pipe(process.stdout)
};

export const handleRN = async (path, newFileName) => {
    await rename(getPath(path), getPath(newFileName))
};

export const handleCP = async (path, newPath) => {
    await cp(getPath(path), getPath(newPath), {errorOnExist:true, recursive:true, force:false})
};

export const handleRM = async (path) => {
    await unlink(getPath(path))
};

export const handleMV = async (path, newPath) => {
    await handleCP(getPath(path), copyFile(newPath))
    await handleRM(path)
};