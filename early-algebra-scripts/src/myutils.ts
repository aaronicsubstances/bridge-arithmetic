/**
 * This JavaScript function always returns a random number between min (included) and max (excluded).
 * (copied from https://www.w3schools.com/js/js_random.asp).
 * @param min defaults to zero
 * @param max defaults to max signed 32-bit integer
 * @returns random integer between min inclusive and max exclusive
 */
export function getRndInteger(min?: number, max?: number) {
    if (!min) {
        min = 0
    }
    const MAX_SIGNED_INT_32_VALUE = 2_147_483_647
    if (!max) {
        max = MAX_SIGNED_INT_32_VALUE
    }
    return Math.floor(Math.random() * (max - min) ) + min;
}