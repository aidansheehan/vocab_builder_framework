import { CardType, CollectionType, CollectionWithIdType } from './collections.types'

/** CreateCollectionRequestType */
export type CreateCollectionRequestType = CollectionType

/** UpdateCollectionRequestType */
export type UpdateCollectionRequestType = CollectionWithIdType

/** CreateCardRequestType TODO these need to be standardized */
export type CreateCardRequestType = {

    /** New Card Lexi */
    lexi: string,

    /** New card description */
    description: string,

    /** Collection to add card to */
    collectionId: string
    
}

/** UpdateCardRequestType */
export type UpdateCardRequestType = CardType & { collectionId: string }

/** DeleteCardRequestType */
export type DeleteCardRequestType = { collectionId: string, cardId: string }