import { SidebarItemsConfigType }   from '../types/siderbar-items-config.type'

/**
 * Config for rendering items inside sidebar
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const SIDEBAR_ITEMS_CONFIG_CONSTANT: SidebarItemsConfigType = {

    routeButtons: [

        { route: '/user', icon: 'house', reference: 'nav_home_link' },
        { route: '/user/collection/info', icon: 'plus', reference: 'nav_new-collection_link', isModal: true },
        { route: '/user/settings', icon: 'gear', reference: 'nav_settings_link' }

    ]

}

export default SIDEBAR_ITEMS_CONFIG_CONSTANT