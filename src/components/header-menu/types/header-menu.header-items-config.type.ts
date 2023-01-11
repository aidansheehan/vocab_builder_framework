/** HeaderItemsConfigType */
export type HeaderItemsConfigType = {

    /** config for header buttons */
    buttons: HeaderButtonConfig[]
}

/** HeaderButtonConfig */
export type HeaderButtonConfig = HeaderItemConfig & {

    /** Name of modal to open  */
    //TBD

    /** Name of route to navigate to */
    route: string   //TODO type routes

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