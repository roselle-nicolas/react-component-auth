import { FunctionComponent, useEffect, useState } from "react";
//type
import { SingupFormType } from "../../type/singup-form-type";
//helpers
import inputTestValidate from "../../helpers/input-test-validate";
import AlertInputInvalid from "../../helpers/alert-input-invalid";

const SingupForm: FunctionComponent = () => {

    const[singupForm, setSingupForn] = useState<SingupFormType>({
        pseudo: {value: "", error: "", isValid: false},
        email: {value: "", error: "", isValid: false},
        password: {value: "", error: "", isValid: false}
    });

    useEffect(() => {
        const btnSubmitElm: Element | null= document.querySelector('button[type="submit"]');
        
        // Affichage du boutton Envoyer (submit)
        const isFormValidate: boolean | null = singupForm.pseudo.isValid && singupForm.email.isValid && singupForm.password.isValid;
        isFormValidate?
            btnSubmitElm?.classList.remove('btn--disabled')
            : btnSubmitElm?.classList.add('btn--disabled');

        
    }, [singupForm])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // revoie des informations de validité de la valeur de l'input
        const newInputValue = inputTestValidate(event);
        // enregistre les changements dans le state
        setSingupForn({...singupForm, ...newInputValue});
    }

    return(
        <div className="container">
            <div className="card-panel">
                <form>
                    <div className="input-field">
                        <i className="material-icons prefix">account_box</i>
                        <input type="text" white-text name="pseudo" id="icon_prefix" value={singupForm.pseudo?.value} onChange={(event) => handleInputChange(event)} autoComplete="off" required />
                        {
                            !singupForm.pseudo.isValid && singupForm.pseudo.value !== "" &&
                            <i className="material-icons prefix help-icon" onClick={() => AlertInputInvalid(singupForm.pseudo, "pseudo")}>live_help</i>
                        }
                        <label htmlFor="icon_prefix  white-text">Pseudo</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <input type="email" name="email" id="icon_prefix" value={singupForm.email?.value} onChange={(event) => handleInputChange(event)} autoComplete="off" required />
                        {
                            !singupForm.email.isValid && singupForm.email.value !== "" &&
                            <i className="material-icons prefix help-icon" onClick={() => AlertInputInvalid(singupForm.email, "email")}>live_help</i>
                        }
                        <label htmlFor="icon_prefix  white-text">Email</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">enhanced_encryption</i>
                        <input type="password" name="password" id="icon_prefix" value={singupForm.password.value} onChange={(event) => handleInputChange(event)} autoComplete="off" required />
                        {
                            !singupForm.password.isValid && singupForm.password.value !== "" &&
                            <i className="material-icons prefix help-icon" onClick={() => AlertInputInvalid(singupForm.password, "mot de passe")}>live_help</i>
                        }
                        <label htmlFor="icon_prefix  white-text">Mot de passe</label>
                    </div>
                    <div className="center-align valign-weapper validate">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Envoyer
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SingupForm;