export interface User {
    _id?: string,
    name: string,
    email: string,
    password: string,
    admin?: boolean,
    favoritos?: string[],
    createdAt: string
}
