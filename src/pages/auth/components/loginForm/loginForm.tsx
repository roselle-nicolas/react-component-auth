import { FunctionComponent, useEffect, useState } from "react";
//type
import LoginFormType from "../../type/login-form-type";
import TestInputReponseType from "../../type/test-input-response-type";
//helpers
import testInput from "../../helpers/input-test-regex";
import inputValidStyle from "../../helpers/input-valid-style";
import inputTestValidate from "../../helpers/input-test-validate";



const LoginForm: FunctionComponent = () => {

    //Hook state
    const[loginForm, setLoginForn] = useState<LoginFormType>({
        username: {value: "", error: "", isValid: false},
        password: {value: "", error: "", isValid: false}
    });

    useEffect(() => {
        const btnSubmitElm: Element | null= document.querySelector('button[type="submit"]');
        
        // Affichage du boutton Envoyer (submit)
        const isFormValidate: boolean | null = loginForm.username.isValid && loginForm.password.isValid;
        isFormValidate?
            btnSubmitElm?.classList.remove('btn--disabled')
            : btnSubmitElm?.classList.add('btn--disabled');

        
    }, [loginForm])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // revoie des informations de validité de la valeur de l'input
        const newInputValue = inputTestValidate(event);
        // enregistre les changements dans le state
        setLoginForn({...loginForm, ...newInputValue});
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return(
        <div className="container">
            <div className="card-panel">
                <form onSubmit={event => handleSubmit(event)}>
                    <div className="input-field">
                        <i className="material-icons prefix">account_box</i>
                        <input type="text" name="username" id="icon_prefix" value={loginForm.username?.value} onChange={(event) => handleInputChange(event)} autoComplete="off" required />
                        <label htmlFor="icon_prefix  white-text">identifiant</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">enhanced_encryption</i>
                        <input type="password" name="password" id="icon_prefix" value={loginForm.password.value} onChange={(event) => handleInputChange(event)} autoComplete="off" required />
                        <label htmlFor="icon_prefix  white-text">Mot de passe</label>
                    </div>
                    <div className="center-align valign-weapper validate">
                        <button className="btn waves-effect waves-light btn--disabled" type="submit" name="action">Envoyer
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;