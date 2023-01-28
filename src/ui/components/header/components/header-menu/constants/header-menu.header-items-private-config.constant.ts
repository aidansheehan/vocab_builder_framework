import { logout }                   from '../../../../../../redux/user/slices/user.slice'
import { HeaderItemsConfigType }    from '../types/header-menu.header-items-config.type'

/**
 * Config for rendering items inside header menu (authorized users)
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const HEADER_ITEMS_PRIVATE_CONFIG: HeaderItemsConfigType = {

    routeButtons: [

        { route: '/user', icon: 'house', ref: 'nav_home_link' },
        { route: '/user/new', icon: 'file-circle-plus', ref: 'nav_new-collection_link' }
    ],

    dispatchButtons: [

        { callback: logout, icon: 'right-from-bracket', ref: 'nav_logout_link' }

    ]
}

export default HEADER_ITEMS_PRIVATE_CONFIG