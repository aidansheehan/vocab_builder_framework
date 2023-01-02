import { useEffect, useState } from "react";
import determineDevice from "../functions/device-type.function";
import { Device } from "../types/device.type";
import debounce from 'debounce'

/**
 * Custom hook for determining the type of device based on size
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @returns {'desktop' | 'tablet' | 'mobile'}
 */
const useDevice = (): Device => {

    //Retrieve device
    const device_ = determineDevice(window.innerWidth, window.innerHeight)

    //Setup device state
    const [ device, setDevice ] = useState<Device>(device_)

    //ComponentDidMount
    useEffect(() => {

        //Handle change for window
        const handleChange = () => {

            const device_ = determineDevice(window.innerWidth, window.innerHeight)
            setDevice(device_)
        }

        //Define debounce
        const debounced = debounce(handleChange, 150)

        //Add orientation handler on window resize event
        window.addEventListener('resize', debounced)

        //ComponentWillUnmount
        return () => {

            //Remove debounce
            debounced.clear()

            //Remove listener
            window.removeEventListener('resize', debounced)
        }

    }, [])

    return device   //Return device
}

export default useDevice