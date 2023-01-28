import { createAsyncThunk }             from '@reduxjs/toolkit'
import PrivateHttpClient                from '../../../services/http-client/private-http-client.service'
import { CollectionWithIdType }         from '../types/collections.types'
import { CreateCollectionRequestType }  from '../types/request.types'

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
            
            const data = await PrivateHttpClient.get('collections')

            console.log('COLLECTIONS: ', data.data);

            return data.data
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
    async ( {title, description, cards}: CreateCollectionRequestType, { rejectWithValue }) => {

        try {

            const { data } = await PrivateHttpClient.post(
                'collections',
                {title, description, cards}
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
    async ({ title, description, cards, _id }: CollectionWithIdType, { rejectWithValue }) => {

        try {

            const { data } = await PrivateHttpClient.put(
                `collections/${_id}`,
                {title, description, cards}
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