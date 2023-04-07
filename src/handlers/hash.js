import {createHash} from 'node:crypto'
import { readFile } from 'node:fs/promises';
import { getPath } from '../helpers/getPath';

export const handleHash = async (path) => {
    const content = await readFile(getPath(path))
    const hash = createHash('sha3-256').update(content).digest('hex')
    console.log('Hash:',hash)
};

await calculateHash();