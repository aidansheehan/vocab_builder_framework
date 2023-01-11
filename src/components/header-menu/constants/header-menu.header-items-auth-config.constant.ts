import { HeaderItemsConfigType } from "../types/header-menu.header-items-config.type";

/**
 * Config for rendering items inside header menu
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const HEADER_ITEMS_AUTH_CONFIG: HeaderItemsConfigType = {

    buttons: [

        { route: '/', icon: 'house', ref: 'nav_collections_link' },
        { route: '/collections/new', icon: 'file-circle-plus', ref: 'nav_new-collection_link' }
    ]
}

export default HEADER_ITEMS_AUTH_CONFIG