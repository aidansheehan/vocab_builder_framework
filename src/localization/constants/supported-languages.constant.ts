import SUPPORTED_LANGUAGES_TYPE from '../types/supported-languages.type'

const SUPPORTED_LANGUAGES: SUPPORTED_LANGUAGES_TYPE = [
    {
        code: 'en',
        name: 'English',
        // path: '' TODO can have path set so we know where to load JSON from
    },
    {
        code: 'vi',
        name: 'Tiếng Việt',
    },
    {
        code: 'hi',
        name: 'हिंदी'
    }
]

export default SUPPORTED_LANGUAGES