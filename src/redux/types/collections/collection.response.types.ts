import { CollectionWithIdType } from "./collection.types"

// /** GetOneCollectionResponseType */
// export type GetOneCollectionResponseType = {

//     /** Response status TODO */
//     status: number,

//     collection: CollectionWithIdType

// }

/** getCollections response type */
export type GetCollectionsResponseType = {

    //Data array of user collections
    data: CollectionWithIdType[]

}

/** CreateCollectionResponseType */
export type CreateCollectionResponseType = {

    /** data - new collection just entered into DB */
    data: CollectionWithIdType

}

/** UpdateCollectionResponseType */
export type UpdateCollectionResponseType = {

    /** Response Status */
    status: number,

    /** Response Data */
    data: CollectionWithIdType

}

/** DeleteOneCollectionResponseType */
export type DeleteOneCollectionResponseType = {

    /** Response status */
    status: number,

    /** ID of deleted collection */
    _id: string

}