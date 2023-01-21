import { Device }       from '../types/device.type'
import { Orientation }  from '../types/orientation.type'

/**
 * Constant used to indicate what width devices should break
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
export const SIZES: { [ key in Orientation ]: { [key in Device]: number } } = {

    landscape: {

        desktop: 1920,
        tablet: 1200,
        mobile: 896

    },

    portrait: {

        desktop: 1920,
        tablet: 1200,
        mobile: 400
    }

}

/** TODO revisit */