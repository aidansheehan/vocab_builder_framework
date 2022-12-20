import { messages } from '../../components/localized-app/localized-app.component'

/** Language Config Type */
type LANGUAGE_CONFIG_TYPE = {
    code: keyof typeof messages,
    name: string
}

export default LANGUAGE_CONFIG_TYPE