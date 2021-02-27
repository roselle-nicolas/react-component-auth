import { FunctionComponent } from "react";
//routeur
import { Link } from "react-router-dom";
//model
import HeaderSideBarModel from "./models/header-side-bar";
//scss
import '../../sass/utils/_color.scss';
import './header-side-bar.scss';
//list menu
import menuList from'./menulist';



const slideMenu = () => {
    const sideNav = document.querySelector('.side-nav');
    sideNav?.classList.add('side-nav--reveal')
}

type Props = {
    headerData: HeaderSideBarModel,
    showSinupForm: Function,
}
const HeaderSideBar: FunctionComponent<Props> = ({headerData, showSinupForm}) => {

    const clickLinkSingupPage = () => {
        // text conexion ou inscription
        const linkSingup = document.querySelector('.LinkSingup');
        if (linkSingup !== null) {
            linkSingup.textContent==='Inscription'? linkSingup.textContent = 'connexion' : linkSingup.textContent = 'Inscription';
        }
        //
        showSinupForm();
    }

    return(
        <nav>
            <div className="nav-wrapper">
                {/* lien inscription */}
                {headerData.isPageLogin !== undefined && headerData.isPageLogin &&
                    <span className="LinkSingup" onClick={clickLinkSingupPage}>Inscription</span>
                }

                <span className="nav-title">{headerData.title}</span>
                {/* boutton menu mobile */}
                { headerData.showMenu &&
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons icon-menu" onClick={slideMenu}>menu</i></a>
                }
                {/* menu desktop */}
                { headerData.showMenu && 
                    <ul className="right hide-on-med-and-down">
                        {
                            menuList.map((menu => (
                                <li key={menu.name} ><Link to="/"> {menu.name} </Link></li>
                            )))
                        }
                    </ul>
                }
                {/* menu mobile */}
                <ul className="side-nav" id="mobile-demo">
                    {
                        menuList.map((menu => (
                            <li key={menu.name} ><Link to={"/" + menu.link}> {menu.name} </Link></li>
                        )))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default HeaderSideBar;