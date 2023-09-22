export type User = {
    firstName: string,
        lastName: string,
        userId:string,
        userType: UserType,
        contactNo: string
}

export enum UserType {
    NAVIGATOR = "NAVIGATOR",
    CASE_WORKER="CASE_WORKER"
}