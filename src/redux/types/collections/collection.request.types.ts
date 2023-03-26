import { CardType } from './collection.types'

/** CreateCollectionRequestType */
export type CreateCollectionRequestType = {

    /** Title */
    title: string,

    /** Description */
    description: string

}

/** UpdateCollectionRequestType */
export type UpdateCollectionRequestType = CreateCollectionRequestType & { collectionId: string }

/** CreateCardRequestType TODO these need to be standardized */
export type CreateCardRequestType = {

    /** New Card Lexi */
    lexi: string,

    /** New card text prompt */
    textPrompt: string,

    /** Collection to add card to */
    collectionId: string
    
}

/** UpdateCardRequestType */
export type UpdateCardRequestType = CardType & { collectionId: string }

/** DeleteCardRequestType */
export type DeleteCardRequestType = { collectionId: string, cardId: string }