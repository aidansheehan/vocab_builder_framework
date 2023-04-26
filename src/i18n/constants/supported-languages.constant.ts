import SUPPORTED_LANGUAGES_TYPE from '../types/supported-languages.type'

/**
 * Defines supported language codes, display names, and will define routes to JSON resources once only required translations fetching implemented
 */
const SUPPORTED_LANGUAGES: SUPPORTED_LANGUAGES_TYPE = [
    {
        code: 'en',
        name: 'English',
        flag: '🇬🇧'
        // path: '' TODO can have path set so we know where to load JSON from
    },
    {
        code: 'vi',
        name: 'Tiếng Việt',
        flag: '🇻🇳'
    }
]

export default SUPPORTED_LANGUAGES