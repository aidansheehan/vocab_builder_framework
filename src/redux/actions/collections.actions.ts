import { createAsyncThunk }             from '@reduxjs/toolkit'
import PrivateHttpClient                from '../../services/http-client/private-http-client.service'
import { CreateCardRequestType,
    CreateCollectionRequestType,
    DeleteCardRequestType,
    UpdateCardRequestType,
    UpdateCollectionRequestType }       from '../types/collections/collection.request.types'

/** Get one collection TODO this will need to be implemented so one user can access another users collection (unprotected route) */
export const getOneCollection = createAsyncThunk(
    '/collections/one',
    async (_id: string, { rejectWithValue }) => {

        try {

            //Get the collection with specific id
            const response = await PrivateHttpClient.get(
                `collections/${_id}`
            )

            //Return collection
            return response.data.data

        } catch (error) {

            //Return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

/** Get all collections */
export const getCollections = createAsyncThunk(

    '/collections',

    async (_, { rejectWithValue }) => {

        try {
            
            const { data }    = await PrivateHttpClient.get('collections')    //Make get request for user's collections

            return data
            
        } catch (error) {

            if (error.response && error.response.data && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

/** Create a collection */
export const createCollection = createAsyncThunk(
    '/collections/new',
    async ( {title, description}: CreateCollectionRequestType, { rejectWithValue }) => {

        try {

            const { data } = await PrivateHttpClient.post(
                'collections',
                {title, description}
            )

            return data
        }
        
        catch (error) {

            //Return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

/** Update one collection */
export const updateCollection = createAsyncThunk(
    '/collections/update',
    async ({ title, description, collectionId }: UpdateCollectionRequestType, { rejectWithValue }) => {

        try {

            const { data } = await PrivateHttpClient.put(
                `collections/${collectionId}`,
                {title, description}
            )

            return data
        }

        catch (error) {

            //Return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

/** Delete one collection */
export const deleteOneCollection = createAsyncThunk(
    '/collections/delete',
    async (_id: string, { rejectWithValue }) => {

        try {

            //Delete the collection with specified id
            const response = await PrivateHttpClient.delete(
                `collections/${_id}`
            )

            //Return id of deleted collection for removal from redis
            return response.data
        }

        catch (error) {

            //Return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

/** Delete all collections */
//TBD

/** Create a new card */
export const createCard = createAsyncThunk(
    '/collections/cards',
    async ({ collectionId, lexi, textPrompt }: CreateCardRequestType, { rejectWithValue }) => {

        try {

            const { data } = await PrivateHttpClient.post(
                `/collections/${collectionId}/cards`,
                {lexi, textPrompt}
            )

            return data
        }

        catch (error) {

            //Return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

/** Update one card */
export const updateOneCard = createAsyncThunk(
    '/collections/cards/update',
    async ({ collectionId, lexi, textPrompt, id }: UpdateCardRequestType, { rejectWithValue }) => {

        try {

            const { data } = await PrivateHttpClient.put(
                `/collections/${collectionId}/cards/${id}`,
                {lexi, textPrompt, id}
            )

            return data
            
        }

        catch (error) {

            //Return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

/** Delete a card */
export const deleteCard = createAsyncThunk(
    '/collections/cards/delete',
    async ({ collectionId, cardId }: DeleteCardRequestType, { rejectWithValue }) => {

        try {

            const { data } = await PrivateHttpClient.delete(
                `/collections/${collectionId}/cards/${cardId}`
            )

            return data

        }

        catch (error) {

            //Return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)