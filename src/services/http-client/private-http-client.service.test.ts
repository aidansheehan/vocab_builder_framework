import PrivateHttpClient from './private-http-client.service'

describe('PrivateHttpClient', () => {

    it('sets the correct headers on requests', () => {
        //TBD
    })

    it('sets the correct baseURL', () => {
        expect(PrivateHttpClient.defaults.baseURL).toBe('testURL')
    })

    it('sets the content-type header to application/json', () => {

        //TBD
    })

    describe('Authorization', () => {
        //TBD mock auth functionality
    })
})