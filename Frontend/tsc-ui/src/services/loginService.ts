import { User, UserType } from "../types/login"

const users : {[key: string] : User}= {
    'test1' :{
        firstName: "Vinay",
        lastName:"Desai",
        userId:'test1',
        userType: UserType.NAVIGATOR,
        contactNo: "34243"
    },
    'test2' :{
        firstName: "Yuvraj",
        lastName:"Patil",
        userId:'test2',
        userType: UserType.CASE_WORKER,
        contactNo: "34243"
    }
}
export const loginUser = (username: string):Promise<User> => {
    return new Promise((resolve, reject) => {
        if(users[username]) {
            resolve(users[username])
        }
        reject(null)
    })
}