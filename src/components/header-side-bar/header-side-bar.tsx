import { FunctionComponent } from "react";
import './header-side-bar.scss';
import HeaderSideBarModel from "./models/header-side-bar";
//scss
import '../../sass/utils/_color.scss';

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
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li>
                    </ul>
                }

                <ul className="side-nav" id="mobile-demo">
                    <li><a href="#">Sass</a></li>
                    <li><a href="#">Components</a></li>
                    <li><a href="#">Javascript</a></li>
                    <li><a href="#">Mobile</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default HeaderSideBar;