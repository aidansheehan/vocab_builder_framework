/**
 * Function to randomly shuffle an array using Schwartzian transform
 * Based on solution detailed in 3rd answer https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @param arr {Array} The array to be shuffled
 * @returns {Array}
 */
const shuffle = (arr: any[]): any[] => {

    const result = arr.map(v_ => ({ v_, sort: Math.random() })).sort((a_, b_) => a_.sort - b_.sort).map(({ v_ }) => v_)

    return result
}

export default shuffle