import { CardType, CollectionType, CollectionWithIdType } from './collections.types'

/** CreateCollectionRequestType */
export type CreateCollectionRequestType = CollectionType

/** UpdateCollectionRequestType */
export type UpdateCollectionRequestType = CollectionWithIdType

/** UpdateCardRequestType */
export type UpdateCardRequestType = CardType & { collectionId: string }