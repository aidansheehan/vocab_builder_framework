/** Core FontAwesome Icons */
import { library } from '@fortawesome/fontawesome-svg-core'

import {
    faHouse,
    faFileCirclePlus,
    faRightFromBracket,
    faRightToBracket,
    faCircleQuestion,
    faInfo,
    faFileCircleQuestion,
    faAddressBook,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons'

/**
 * Function to expose core FontAwesome icons across framework
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
export default function FontAwesomeIcons(): void {

    //Expose core icons across framework
    library.add(
        faHouse,
        faFileCirclePlus,
        faRightFromBracket,
        faRightToBracket,
        faUserPlus,
        faCircleQuestion,
        faInfo,
        faFileCircleQuestion,
        faAddressBook
    )
}