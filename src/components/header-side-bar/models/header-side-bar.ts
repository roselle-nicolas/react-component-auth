export default class HeaderSideBarModel {
    title: string;
    showMenu: boolean;
    isPageLogin?: boolean;
    
    constructor(
        title: string,
        showMenu: boolean,
        isPageLogin?: boolean
    ) {
        this.title = title;
        this.showMenu = showMenu;
        this.isPageLogin = isPageLogin;
    }
 
}