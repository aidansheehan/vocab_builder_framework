/** Core FontAwesome Icons */
import { library } from '@fortawesome/fontawesome-svg-core'

import {
    faHouse,
    faRightFromBracket,
    faRightToBracket,
    faCircleQuestion,
    faInfo,
    faFileCircleQuestion,
    faAddressBook,
    faUserPlus,
    faPenToSquare,
    faPlay,
    faFloppyDisk,
    faRotateLeft,
    faTrash,
    faTimes,
    faPlus,
    faGear,
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
        faPlus,
        faRightFromBracket,
        faRightToBracket,
        faUserPlus,
        faCircleQuestion,
        faInfo,
        faFileCircleQuestion,
        faAddressBook,
        faPenToSquare,
        faPlay,
        faFloppyDisk,
        faRotateLeft,
        faTrash,
        faTimes,
        faGear
    )
}