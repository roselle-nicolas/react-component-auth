import RegexObject from "../type/regex-object-type";

const regexInputSelected = (inputName: string): RegexObject | void => {
    
    switch (inputName) {
        case 'username':
            return {
                regex: /^[a-z0-9A-Z\d\/.@àéèç'ê-]{1,40}$/,
                errorMsg: "un pseudo: caractères autorisés: lettre, chiffre et @àéèç'ê- ou un mail (ex: cantact@contact.com)"
            }

        case 'pseudo':
            return {
                regex: /^[a-z0-9A-Z\d@àéèç'ê-]{1,20}$/,
                errorMsg: "de 1 à 20, caractères autorisés: lettre, chiffre et @àéèç'ê-"
            }

        case 'email':
            return {
                regex: /^.+@.+\..+$/,
                errorMsg: "l'email doit être au bon format. Ex: contact@contact.com"
            } 
            
        case 'password':
            return {
                regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]{8,}$/,
                errorMsg: "8 caractères minimum autorisés: lettre, chiffre et @$!%*#?&"
            } 
            
            
    }

}

export default regexInputSelected;