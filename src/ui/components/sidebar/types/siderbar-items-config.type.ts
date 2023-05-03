import { Device } from '../../../types/device.type'

/** SidebarItemsConfigType */
export type SidebarItemsConfigType = {

    routeButtons: SidebarRouteButtonConfig[],

    dispatchButtons?: SidebarDispatchButtonConfig[]

}

/** SidebarRouteButtonConfig */
export type SidebarRouteButtonConfig = SidebarItemConfig & {

    /** Route to navigate to on click */
    route: string,

    /** Whether to open route as modal */
    isModal?: boolean

}

/** SidebarDispatchButtonConfig */
export type SidebarDispatchButtonConfig = SidebarItemConfig & {

    /** Dispatch function to execute on click */
    callback: Function

}

/** SidebarItemConfig */
export type SidebarItemConfig = {

    /** Display item config */
    icon: string,

    /** Display item translation reference */
    reference: string

    /** Devices to display item */
    devices?: Device[]
}