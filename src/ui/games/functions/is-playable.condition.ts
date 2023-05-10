import { CollectionType } from '../../../redux/types/collections/collection.types'

/**
 * Generic function to check whether games playable
 */
const isPlayable = (collection: CollectionType): boolean => {

    //Allow gameplay if more than 1 card
    return !!(collection.cards.length > 1)

}

export default isPlayable