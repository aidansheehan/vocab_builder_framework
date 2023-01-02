import PublicHttpClient from './public-http-client.service'

describe('PublicHttpClient', () => {

    it('sets the correct headers on requests', () => {

        //TBD
    })

    it('sets the correct baseURL', () => {
        expect(PublicHttpClient.defaults.baseURL).toBe('testURL')
    })

    it('sets the content-type header to application/json', () => {
        
        // TBD
    })
})