/** HeaderItemsConfigType */
export type HeaderItemsConfigType = {

    /** config for header buttons */
    routeButtons: HeaderRouteButtonConfig[],

    dispatchButtons: HeaderDispatchButtonConfig[]

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

    /** Devices to display item */
    //TBD

    /** Display item config */
    icon: string,

    /** Display item translation reference */
    ref: string
}