export default class HeaderSideBarModel {
    title: string;
    showMenu: boolean;
    
    constructor(
        title: string,
        showMenu: boolean
    ) {
        this.title = title;
        this.showMenu = showMenu;
    }
 
}