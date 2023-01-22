import { createSlice, PayloadAction }                                           from '@reduxjs/toolkit'
import { createCollection, deleteCollection, getCollections, updateCollection } from '../actions/collection.actions'
import { CollectionsStateType }                                                 from '../types/collection.types'
import {    CreateCollectionResponseType,
            DeleteOneCollectionResponseType,
            GetCollectionsResponseType,
            UpdateCollectionResponseType }                                      from '../types/response.types'

/** Initial State */
const initialState: CollectionsStateType = {
    loading: false,
    error: null,
    collections: {}
}

/**
 * Collections slice 🍕
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const collectionsSlice = createSlice({
    name: 'collections',
    initialState,
    reducers: {

    },
    extraReducers(builder) {

        /** Get collections */
        //pending
        builder.addCase(getCollections.pending, (state) => {
            state.loading = true
        })
        //fulfilled
        builder.addCase(getCollections.fulfilled, (state, { payload }: PayloadAction<GetCollectionsResponseType>) => {
            state.loading = false
            payload.data.collections.forEach(c_ => {
                state.collections[c_._id] = {
                    title: c_.title,
                    description: c_.description,
                    cards: c_.cards
                }
            })
        })
        //rejected
        builder.addCase(getCollections.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        })

        /** Create a new collection */
        //pending
        builder.addCase(createCollection.pending, (state) => {
            state.loading = true
        })
        //fulfilled
        builder.addCase(createCollection.fulfilled, (state, { payload }: PayloadAction<CreateCollectionResponseType>) => {

            state.loading = false   //Set loading flag false

            const { collection } = payload.data //Destructure payload data

            const { _id } = collection  //Destructure collection for id

            const newCollections = { ...state.collections, [_id]: collection }

            state.collections = newCollections
            
        })
        //rejected
        builder.addCase(createCollection.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        })

        /** Update a collection */
        //pending
        builder.addCase(updateCollection.pending, (state) => {
            state.loading = true
        })
        //fulfilled
        builder.addCase(updateCollection.fulfilled, (state, { payload }: PayloadAction<UpdateCollectionResponseType>) => {

            //TODO error handling what if status is fail
            const { _id, title, description, cards } = payload.data

            const newCollection = { title, description, cards }

            state.loading = false
            state.collections[_id] = newCollection
        })
        //rejected
        builder.addCase(updateCollection.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false
            state.error = payload
        })

        /** Delete a collection by ID */
        //pending
        builder.addCase(deleteCollection.pending, (state) => {
            state.loading = true
        })
        //fulfilled
        builder.addCase(deleteCollection.fulfilled, (state, { payload }: PayloadAction<DeleteOneCollectionResponseType>) => {

            // TODO check success
                const { _id } = payload
                state.loading = false

                delete state.collections[_id]
            // }
        })
        
    }
})

export default collectionsSlice.reducer