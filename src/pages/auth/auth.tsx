import { Fragment, FunctionComponent } from "react";
import HeaderSideBar from "../../components/header-side-bar/header-side-bar";
import HeaderSideBarModel from "../../components/header-side-bar/models/header-side-bar";
import SingupForm from "./components/singupForm/singupForm";

const headerData: HeaderSideBarModel = {
    title: "Authetification",
    showMenu: false
}
const Auth: FunctionComponent = () => {
    return(
        
        <Fragment>
                  <HeaderSideBar headerData={headerData}/>
                  <SingupForm />
        </Fragment>
    )
}

export default Auth;