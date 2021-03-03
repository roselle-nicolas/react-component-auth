import RegexObject from "../type/regex-object-type";

const regexInputSelected = (inputName: string): RegexObject | void => {
    
    switch (inputName) {
        case 'username':
            return {
                regex: /^[a-z0-9A-Z\d\/.@àéèç'ê-]{1,40}$/,
                errorMsg: "l'identifiant peut comporter des lettres, des chiffres et des caractère spéciaux suivant: @àéèç'ê- ou un mail (ex: cantact@contact.com)"
            }

        case 'pseudo':
            return {
                regex: /^[a-z0-9A-Z\d@àéèç'ê-]{1,20}$/,
                errorMsg: "Le pseudo peut comporter de 1 à 20 caractères qui sont des lettre(majuscule ou minuscule), des chiffres et des caractère spéciaux suvant: @àéèç'ê-"
            }

        case 'email':
            return {
                regex: /^.+@.+\..+$/,
                errorMsg: "l'email doit être au format suivant: contact@contact.com"
            } 
            
        case 'password':
            return {
                regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]{8,}$/,
                errorMsg: "Le mot de passe doit contenir 8 caractères minimum, au moins une majuscule, une minuscule, un chiffre et l'un de ses caractères suivant : @$!%*#?&. Aucun autre caractère n'est autorisé."
            } 
            
            
    }

}

export default regexInputSelected;