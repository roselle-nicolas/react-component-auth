import { Fragment, FunctionComponent } from "react";
import HeaderSideBar from "../../components/header-side-bar/header-side-bar";
import HeaderSideBarModel from "../../components/header-side-bar/models/header-side-bar";
import SingupForm from "./components/singupForm/singupForm";
//scss
import './auth.scss';
//static
import backgroundImg from './build-a-file.jpg'


const headerData: HeaderSideBarModel = {
    title: "Authetification",
    showMenu: false
}

const Auth: FunctionComponent = () => {
    return(
        
        <Fragment>
            <HeaderSideBar headerData={headerData}/>
            <section className="auth-section">
                <SingupForm />
            </section>
        </Fragment>

    )
}

export default Auth;