/** Card Type */
export type CardType = {

    /** Lexi to be memorized */
    lexi: string,

    /** TODO should rename Prompt for memorization VBF-57 */
    // prompt: string
    description: string

}

/** Collection Type */
export type CollectionType = {

    /** Title of collection  */
    title: string,

    /** Description of collection */
    description: string,

    /** Collection Cards Array */
    cards: CardType[],

    /** ID of the userTODO unsure if needed TODO will need to implement shared collections */
    // user_id: string

}

/** Collection with ID as property as handled by backend */
export type CollectionWithIdType = CollectionType & { _id: string }

/** Collections By ID for constant time collection lookup */
export interface CollectionsByID {
    [collectionID: string]: CollectionType
}

/** Collections State Type */
export interface CollectionsStateType {
    loading: boolean,
    error: any,
    collections: CollectionsByID
}