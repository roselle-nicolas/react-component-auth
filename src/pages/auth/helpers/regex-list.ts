import RegexObject from "../type/regex-object";

const regexInputSelected = (inputName: string): RegexObject | void => {
    
    switch (inputName) {
        case 'username':
            return {
                regex: /^[a-z0-9A-Z\d@àéèç'ê-]{1,20}$/,
                errorMsg: "de 1 à 20 caractères autorisés: lettre, chiffre et @àéèç'ê-"
            } 
            
        case 'password':
            return {
                regex: /^[A-Za-z\d@$!%*#?&.]{8,}$/,
                errorMsg: "8 caractères minimum autorisés: lettre, chiffre et @$!%*#?&"
            } 
            
            
    }

}

export default regexInputSelected;