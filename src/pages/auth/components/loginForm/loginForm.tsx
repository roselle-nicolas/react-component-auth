import { FunctionComponent, useState } from "react";
import { AuthFormType } from "../../type/singup-type";

const LoginForm: FunctionComponent = () => {
    const[loginForm, setSingupForn] = useState<AuthFormType>({
        username: {value: "", error: "", isValid: false},
        password: {value: "", error: "", isValid: false}
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputName: string = event.target.name;
        const inputValue: string = event.target.value;
        const newInputValue = { [inputName]: {value: inputValue, error: "", isValid: false} }
        setSingupForn({...loginForm, ...newInputValue});
    }

    return(
        <div className="container">
            <div className="card-panel">
                <form>
                    <div className="input-field">
                        <i className="material-icons prefix">account_box</i>
                        <input type="text" className="validate" name="username" id="icon_prefix" value={loginForm.email?.value} onChange={(event) => handleInputChange(event)} autoComplete="off" />
                        <label htmlFor="icon_prefix  white-text">identifiant</label>
                    </div>
                    <div className="input-field">
                        <i className="material-icons prefix">enhanced_encryption</i>
                        <input type="password" className="validate" name="password" id="icon_prefix" value={loginForm.password.value} onChange={(event) => handleInputChange(event)} autoComplete="off" />
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

export default LoginForm;