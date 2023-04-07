import os from "os"


export const handleOS = (action) => {
    switch(action){
        case "--eol":
        case "--EOL":
            console.log(`EOL:${JSON.stringify(os.EOL)}`);
            break;
        case "--cpus":
        case "--CPUS":
            const res = os.cpus().map((elem)=>{
                
            })
            console.log(os.cpus().length);
            break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }
}