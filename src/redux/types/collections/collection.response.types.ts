import { CollectionWithIdType } from "./collection.types"

/** GetOneCollectionResponseType */
export type GetOneCollectionResponseType = {

    /** Response status TODO */
    status: number,

        collection: CollectionWithIdType

}

/** getCollections response type */
export type GetCollectionsResponseType = {

    /** Response status TODO not sure about these */
    status: number, //"success" | "fail",

    data: {

        collections: CollectionWithIdType[] /*& {
            user_id: string //TODO not sure if required
        }*/
    }
}

/** CreateCollectionResponseType */
export type CreateCollectionResponseType = {

    /** Response status */
    status: number,

    /** Response data */
    data: {
        
        /** The new collection just entered into DB */
        collection: CollectionWithIdType
    }

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