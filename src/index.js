import {checkUser, greeting, goodbye, showCurrentDirectory, USER} from './helpers/index.js'
import {EventEmitter} from 'node:events'
import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline/promises';
import { handleCd, handleLs, handleUp, handleAdd, handleCP, handleCat, handleMV, 
    handleRM, handleRN, handleOS, handleHash, handleCompress, handleDecompress,
} from './handlers/index.js'
import { checkLine } from './helpers/checkLine.js';

const handleEvent = new EventEmitter()
const rl = readline.createInterface({input, output})

greeting(checkUser())
showCurrentDirectory()

handleEvent.setMaxListeners(0)

handleEvent
.on('up', handleUp)
.on('cd',handleCd)
.on('ls', handleLs)
.on('cat', handleCat)
.on('add', handleAdd)
.on('rn', handleRN)
.on('cp', handleCP)
.on('mv', handleMV)
.on('rm', handleRM)
.on('os', handleOS)
.on('hash', handleHash)
.on('compress',handleCompress)
.on('decompress',handleDecompress)
.on('.exit',goodbye)

rl
.on('line', (input) => checkLine(input, handleEvent))
.on('SIGINT', () => rl.close())
.on('close', () => goodbye(USER))