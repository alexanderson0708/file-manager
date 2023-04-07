import { pipeline } from 'node:stream';
import { createBrotliCompress, createBrotliDecompress } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs'
import { getPath } from '../helpers/getPath';

const BROTLI_ACTION = { 
    Compress: "compress",
    Decompress: "decompress"
}

const handleBrotli = async (pathToFile, pathToDistination, action) => {
    const readStream = createReadStream(getPath(pathToFile))
    const writeStream = createWriteStream(getPath(pathToDistination))
    const currentAction = action === BROTLI_ACTION.Compress ? createBrotliCompress() : createBrotliDecompress()
    pipeline(readStream, currentAction, writeStream,) 
};

export const handleCompress = async (pathToFile, pathToDistination) => {
    await handleBrotli(pathToFile, pathToDistination, BROTLI_ACTION.Compress)
}

export const handleDecompress = async (pathToFile, pathToDistination) => {
    await handleBrotli(pathToFile, pathToDistination, BROTLI_ACTION.Decompress)
}