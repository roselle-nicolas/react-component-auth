import { FunctionComponent } from "react";
import './header-side-bar.scss';
import HeaderSideBarModel from "./models/header-side-bar";
//scss
import '../../sass/utils/_color.scss';
import menuList from'./menulist';
import { Link } from "react-router-dom";

const slideMenu = () => {
    const sideNav = document.querySelector('.side-nav');
    sideNav?.classList.add('side-nav--reveal')
}

type Props = {
    headerData: HeaderSideBarModel
}
const HeaderSideBar: FunctionComponent<Props> = ({headerData}) => {
    return(
        <nav>
            <div className="nav-wrapper">
                <span className="nav-title">{headerData.title}</span>
                
                { headerData.showMenu &&
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons icon-menu" onClick={slideMenu}>menu</i></a>
                }
                { headerData.showMenu && 
                    <ul className="right hide-on-med-and-down">
                        {
                            menuList.map((menu => (
                                <li key={menu.name} ><Link to="/"> {menu.name} </Link></li>
                            )))
                        }
                        

                    </ul>
                }

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