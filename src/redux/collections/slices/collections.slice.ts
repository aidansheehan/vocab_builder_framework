import { createSlice, PayloadAction }                                                                   from '@reduxjs/toolkit'
import { createCollection, deleteOneCollection, getCollections, getOneCollection, updateCollection }    from '../actions/collections.actions'
import { CollectionsStateType }                                                                         from '../types/collections.types'
import {    CreateCollectionResponseType,
            DeleteOneCollectionResponseType,
            GetCollectionsResponseType,
            GetOneCollectionResponseType,
            UpdateCollectionResponseType }                                                              from '../types/response.types'

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

        /** Get one collection */
        //pending
        builder.addCase(getOneCollection.pending, (state) => {
            state.loading = true    //Set loading flag true
        })
        //fulfilled
        builder.addCase(getOneCollection.fulfilled, (state, { payload }: PayloadAction<GetOneCollectionResponseType>) => {

            //Set loading flag false
            state.loading = false

            //Destructure collection
            const { _id, title, description, cards } = payload.collection

            //Set appropriate collection ID to new data
            state.collections[_id] = { title, description, cards } 
            
        })
        //rejected
        builder.addCase(getOneCollection.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false   //Set loading flag false
            state.error = payload   //Set error state
        })

        /** Get collections */
        //pending
        builder.addCase(getCollections.pending, (state) => {
            state.loading = true    //Set loading flag true
        })
        //fulfilled
        builder.addCase(getCollections.fulfilled, (state, { payload }: PayloadAction<GetCollectionsResponseType>) => {
            
            //Set loading flag false
            state.loading = false

            //Loop through collections returned on payload
            payload.data.collections.forEach(c_ => {

                //Set collections in state with id as key and rest of data as property
                state.collections[c_._id] = {
                    title: c_.title,
                    description: c_.description,
                    cards: c_.cards
                }
            })
        })
        //rejected
        builder.addCase(getCollections.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false   //Set loading flag false
            state.error = payload   //Set error state
        })

        /** Create a new collection */
        //pending
        builder.addCase(createCollection.pending, (state) => {
            state.loading = true
        })
        //fulfilled
        builder.addCase(createCollection.fulfilled, (state, { payload }: PayloadAction<CreateCollectionResponseType>) => {

            state.loading = false   //Set loading flag false

            const { collection }    = payload.data  //Destructure payload data
            const { _id }           = collection    //Destructure collection for id

            //New collections with additional collection
            const newCollections = { ...state.collections, [_id]: collection }

            //Set collections to new collections state
            state.collections = newCollections
            
        })
        //rejected
        builder.addCase(createCollection.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading = false   //Set loading flag false
            state.error = payload   //Set error state
        })

        /** Update a collection */
        //pending
        builder.addCase(updateCollection.pending, (state) => {
            state.loading = true    //Set loading flag true
        })
        //fulfilled
        builder.addCase(updateCollection.fulfilled, (state, { payload }: PayloadAction<UpdateCollectionResponseType>) => {

            //Destructure payload data
            const { _id, title, description, cards } = payload.data

            //Create new collection object
            const newCollection = { title, description, cards }

            state.loading           = false          //Set loading flag false
            state.collections[_id]  = newCollection  //Set new collection as propery of it's id as key
        })
        //rejected
        builder.addCase(updateCollection.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading   = false     //Set loading flag false
            state.error     = payload   //Set error state
        })

        /** Delete a collection by ID */
        //pending
        builder.addCase(deleteOneCollection.pending, (state) => {
            state.loading = true    //Set loading flag true
        })
        //fulfilled
        builder.addCase(deleteOneCollection.fulfilled, (state, { payload }: PayloadAction<DeleteOneCollectionResponseType>) => {

            const { _id } = payload //Destructure payload
            state.loading = false   //set loading state false

            //Delete key-value pair in store for this collection
            delete state.collections[_id]

        })
        //rejected
        builder.addCase(deleteOneCollection.rejected, (state, { payload }: PayloadAction<any>) => {
            state.loading   = false     //Set loading flag false
            state.error     = payload   //Set error state
        })
        
    }
})

export default collectionsSlice.reducer