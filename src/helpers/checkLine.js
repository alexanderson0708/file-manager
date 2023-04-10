import { showCurrentDirectory } from "./getPath.js"
import { USER } from "./user.js"

export const FAILED_ERROR = 'Operation failed'

export const checkLine = (line, eventEmitter) => {
    try {
        const [event, ...args] = line.trim().split(' ')

        switch (event) {
            case 'up':
            case 'ls':
                eventEmitter.emit(event)
                break;
            case 'cd':
            case 'cat':
            case 'add':
            case 'rm':
            case 'os':
            // case 'hash':
                eventEmitter.emit(event, args[0])
                break;
            case 'rn':
            case 'cp':
            case 'mv':     
            // case 'comperess':
            // case 'decompres':
                eventEmitter.emit(event, args[0], args[1])
                break;
            case '.exit':
                eventEmitter.emit(event, USER)
                break;
            default:
                console.log('Invalid input');
                break;
        }
        showCurrentDirectory()
    }
    catch (err){
        console.log(eventEmitter);
        console.log(line);
        console.error('Operation failed');
    }
}