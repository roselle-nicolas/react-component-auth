import { FunctionComponent, useEffect, useState } from "react";
//type
import { LoginFormType } from "../../type/login-type";
//helpers
import { testInput } from "../../helpers/input-test-regex";
import TestInputReponse from "../../type/test-input-response";
import inputValidStyle from "../../helpers/input-valid-style";



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

    // au changement des valeurs input
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // element DOM input
        const inputElm: Element = event.target
        // donnée de l'input
        const inputName: string = event.target.name;
        const inputValue: string = event.target.value;
        // test de validité des entrées de loginForm
        const inputTestResult: TestInputReponse | null = testInput(inputName, inputValue);
        // gestion du style d'un input valide ou non
        inputValidStyle(inputTestResult, inputElm);
        // mise à jour de loginForm
        const newInputValue = { [inputName]: {value: inputValue, error: inputTestResult?.errorMsg, isValid: inputTestResult?.result} }
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
                        <input type="text" className="" name="username" id="icon_prefix" value={loginForm.username?.value} onChange={(event) => handleInputChange(event)} autoComplete="off" required />
                        <label htmlFor="icon_prefix  white-text">identifiant</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">enhanced_encryption</i>
                        <input type="password" className="" name="password" id="icon_prefix" value={loginForm.password.value} onChange={(event) => handleInputChange(event)} autoComplete="off" required />
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