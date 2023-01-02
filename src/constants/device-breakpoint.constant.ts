/**
 * Const for device breakpoints
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */

import { Device } from "../types/device.type";
import { Orientation } from "../types/orientation.type";

/** Mapping of Breakpoint Sizes */
export const SIZES: { [ key in Orientation ]: { [key in Device]: number } } = {

    landscape: {

        desktop:    1920,
        tablet:     1200,
        mobile:     896
    },

    portrait: {

        desktop:    1920,
        tablet:     1200,
        mobile:     480
    }
}