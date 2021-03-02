import { FunctionComponent, useState } from "react";
import inputTestValidate from "../../helpers/input-test-validate";
import { SingupFormType } from "../../type/singup-type";





const SingupForm: FunctionComponent = () => {

    const[singupForm, setSingupForn] = useState<SingupFormType>({
        pseudo: {value: "", error: "", isValid: false},
        email: {value: "", error: "", isValid: false},
        password: {value: "", error: "", isValid: false}
    });

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
                        <input type="text" className="validate" white-text name="pseudo" id="icon_prefix" value={singupForm.pseudo?.value} onChange={(event) => handleInputChange(event)} autoComplete="off" required />
                        <label htmlFor="icon_prefix  white-text">Pseudo</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <input type="email" className="validate" name="email" id="icon_prefix" value={singupForm.email?.value} onChange={(event) => handleInputChange(event)} autoComplete="off" required />
                        <label htmlFor="icon_prefix  white-text">Email</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">enhanced_encryption</i>
                        <input type="password" className="validate" name="password" id="icon_prefix" value={singupForm.password.value} onChange={(event) => handleInputChange(event)} autoComplete="off" required />
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