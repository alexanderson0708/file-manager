import { createReadStream, createWriteStream } from 'fs';
import { getPath } from '../helpers/getPath.js';
import { writeFile, rename, cp, unlink, copyFile } from "fs/promises";
import { parse } from 'path';
import { pipeline } from 'stream/promises';

export const handleAdd = async (fileName) => {
    await writeFile(getPath(fileName), '', {flag: 'wx'})
};

export const handleCat = async (path) => {
    const stream = createReadStream(path)
    stream.pipe(process.stdout)
};

export const handleRM = async (path) => {
    await unlink(path)
};

export const handleRN = async (path, newFileName) => {
    const fileDirectory = parse(path).dir
    await rename(path, `${fileDirectory}/${newFileName}`)
};

export const handleCP = async (path, newDirectoryPath) => {
    const baseName = parse(path).base
    const readStream = createReadStream(path)
    const writeStream =  createWriteStream(`${newDirectoryPath}/${baseName}`)
    await pipeline(readStream, writeStream)
};

export const handleMV = async (path, newDirectoryPath) => {
    await handleCP(path, newDirectoryPath)
    await handleRM(path)
};