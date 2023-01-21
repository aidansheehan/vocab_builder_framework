import { SIZES }        from '../constants/device-breakpoint-constant'
import { Device }       from '../types/device.type'
import { Orientation }  from '../types/orientation.type'

/**
 * Calculate sizes and output the device name
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const determineDevice = (width: number, height: number): Device => {

    let d: Device   //Device

    const o: Orientation = width < height ? 'portrait' : 'landscape'    //Orientation

    //Mobile
    if (width <= SIZES[o].mobile) {
        d = 'mobile'
    }

    //Tablet
    else if (width > SIZES[o].mobile  && width < SIZES[o].tablet) {
        d = 'tablet'
    }

    //Desktop
    else {
        d = 'desktop'
    }

    return d    //Return device
    
}

export default determineDevice