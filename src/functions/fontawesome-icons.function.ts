/** Core FontAwesome Icons */
import { library } from '@fortawesome/fontawesome-svg-core'

import {
    faHouse
} from '@fortawesome/free-solid-svg-icons'

/**
 * Function to expose core FontAwesome icons across framework
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
export default function FontAwesomeIcons(): void {

    //Expose core icons across framework
    library.add(
        faHouse
    )
}