import { useEffect, useState }  from 'react'
import debounce                 from 'debounce'
import determineDevice          from '../functions/determine-device.function'
import { Device }               from '../types/device.type'

/**
 * Custom hook for determining type of device based on size
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @returns {'desktop' | 'tablet' | 'mobile'}
 */
const useDevice = (): Device => {

    //Retrieve device
    const device_ = determineDevice(window.innerWidth, window.innerHeight)

    //Setup device state
    const [ device, setDevice ] = useState<Device>(device_)

    //componentDidMount
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

        //componentWillUnmount
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