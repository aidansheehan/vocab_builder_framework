/** Generic type for making update/create single card requests TODO this should probably be in redux lol it'll need a handler and all */
export type CardRequestType = {

    /** Lexi */
    lexi: string,

    /** Description */
    description: string,

    /** Card ID */
    id?: string
    
}