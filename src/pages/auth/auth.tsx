import { Fragment, FunctionComponent, useState } from "react";
//components
import HeaderSideBar from "../../components/header-side-bar/header-side-bar";
import HeaderSideBarModel from "../../components/header-side-bar/models/header-side-bar";
import SingupForm from "./components/singupForm/singupForm";
import LoginForm from "./components/loginForm/loginForm";
//scss
import './auth.scss';
//static
import backgroundImg from './build-a-file.jpg'


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
            </section>
        </Fragment>

    )
}

export default Auth;