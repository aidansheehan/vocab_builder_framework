import mountainPlaceholder from '../../../../assets/images/mountain-placeholder.png'
import logo from '../../../../assets/images/logo.svg'

/**
 * Constant mapping of image keys to images
 * TODO - this will need to be refactored to dynamically load images, may be best to store images as context
 * TODO - this logic needs to be refactored to make http requests for images rather than bundling into build - will need to handle waiting for this in preloader
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @constant
 */
const IMAGES_CONSTANT = {
    placeholder: mountainPlaceholder,
    logo: logo
}

export default IMAGES_CONSTANT