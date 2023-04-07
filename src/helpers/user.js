export const UNKNOWN_USER = 'Anonymous'
export const currentUser = process.argv.slice(2).at(-1)

export const checkUser = () => {
    if (currentUser && currentUser.includes('--username=')){
        return currentUser.split('=').at(-1) 
    }else{
        return UNKNOWN_USER
    }
}