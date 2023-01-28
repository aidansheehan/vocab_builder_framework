import { HeaderItemsConfigType } from "../types/header-menu.header-items-config.type";

/**
 * Config for rendering items inside header menu (unauthorized users)
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const HEADER_ITEMS_PUBLIC_CONFIG: HeaderItemsConfigType = {

    routeButtons: [
        
        { route: '/auth/login', icon: 'right-to-bracket', ref: 'nav_login_link', devices: [ 'mobile' ] },
        { route: '/auth/register', icon: 'user-plus', ref: 'nav_register_link', devices: [ 'mobile' ] },
        { route: '/', icon: 'info', ref: 'nav_about_link' },
        { route: '/faq', icon: 'file-circle-question', ref: 'nav_faq_link' },
        { route: '/contact', icon: 'address-book', ref: 'nav_contact_link' },

    ]
}

export default HEADER_ITEMS_PUBLIC_CONFIG