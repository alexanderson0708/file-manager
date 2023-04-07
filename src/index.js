import {checkUser, greeting, goodbye} from './helpers/index.js'
import {EventEmitter} from 'node:events'
import { homedir } from 'node:os'
import readline from 'node:readline'


process.chdir(homedir())


greeting(checkUser())
process.on('exit', ()=>goodbye(checkUser()))

// const hadleEvent = new EventEmitter()
// hadleEvent.setMaxListeners(0)

// hadleEvent
// .on()
// .on()
// .on()
// .on()
// .on()
// .on()
// .on()
// .on()
// .on()
// .on()
// .on()
// .on()
