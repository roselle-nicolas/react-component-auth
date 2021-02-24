type Field = {
    value?: string,
    error?: string,
    isValid?: boolean
}

export type AuthFormType = {
    username?: Field,
    pseudo?: Field,
    email?: Field,
    password: Field
}