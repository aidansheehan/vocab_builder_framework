import { messages } from '../../ui/context/providers/i18n/i18n.provider'

/** Language Config Type */
type LANGUAGE_CONFIG_TYPE = {
    code: keyof typeof messages,
    name: string
}

export default LANGUAGE_CONFIG_TYPE