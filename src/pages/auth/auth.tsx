import { Fragment, FunctionComponent, useState } from "react";
//components
import HeaderSideBar from "../../components/header-side-bar/header-side-bar";
import HeaderSideBarModel from "../../components/header-side-bar/models/header-side-bar";
import SingupForm from "./components/singupForm/singupForm";
import LoginForm from "./components/loginForm/loginForm";
//scss
import './auth.scss';
//static
import  './connection.jpg';


const headerData: HeaderSideBarModel = {
    title: "Authentification",
    showMenu: false,
    isPageLogin: true
}

const Auth: FunctionComponent = () => {

    
    const[isloginPage, setIsloginPage] = useState<boolean>(true);

    const showSinupForm = () => {
        isloginPage? setIsloginPage(false) : setIsloginPage(true);
    }

    return(
        
        <Fragment>
            <HeaderSideBar headerData={headerData} showSinupForm={showSinupForm} />
            <section className="auth-section">
                {
                    isloginPage
                    ? <LoginForm />
                    : <SingupForm />
                };
                
                <p className="help-message">Pour améliorer la sécurité de ce site, certaines restrictions sont en vigueur. Cliquez sur cette icône <i className="material-icons prefix help-icon help-icon--disabled">live_help</i> quand elle apparaît pour vous aider.</p>
            </section>
        </Fragment>

    )
}

export default Auth;