import axios from "axios"
import { User, UserType } from "../types/login"

const baseHost = axios.create({baseURL: "https://uig75k9qxf.us-east-1.awsapprunner.com/tsc"})

const users : {[key: string] : User}= {
    'test1' :{
        firstName: "Vinay",
        lastName:"Desai",
        userID:'test1',
        userType: UserType.NAVIGATOR,
        contactNo: "34243"
    },
    'test2' :{
        firstName: "Yuvraj",
        lastName:"Patil",
        userID:'test2',
        userType: UserType.CASE_WORKER,
        contactNo: "34243"
    }
}
export const loginUser = (username: string, password: string):Promise<User> => {
    return baseHost.get("/login", {params: {userID: username, password}}).then(res => ({...res.data.user, userType: res.data.user.userType === "Navigator" ? UserType.NAVIGATOR : UserType.CASE_WORKER}))
    // return new Promise((resolve, reject) => {
    //     if(users[username]) {
    //         resolve(users[username])
    //     }
    //     reject(null)
    // })
}