import { Device } from "../../../../../types/device.type"

/** HeaderItemsConfigType */
export type HeaderItemsConfigType = {

    routeButtons?: HeaderRouteButtonConfig[],

    dispatchButtons?: HeaderDispatchButtonConfig[]

}

/** HeaderRouteButtonConfig */
export type HeaderRouteButtonConfig = HeaderItemConfig & {

    /** Route to navigate to on click */
    route: string

}

export type HeaderDispatchButtonConfig = HeaderItemConfig & {
    
    /** Dispatch function to execute on click */
    callback: Function

}

/** HeaderItemConfig */
export type HeaderItemConfig = {

    /** Display item config */
    icon: string,

    /** Display item translation reference */
    ref: string

    /** Devices to display item */
    devices?: Device[]
    
}