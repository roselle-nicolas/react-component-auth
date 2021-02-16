type Field = {
    value?: string,
    error?: string,
    isValid?: boolean
}

export type SingupFormType = {
    pseudo: Field,
    email: Field,
    password: Field
}