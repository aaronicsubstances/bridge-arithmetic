import Fraction from "fraction.js"

export function areRatNumsEqual(num1: Fraction, num2: Fraction) {
    return num1.equals(num2)
}

export function formatRatNumToLatex(num: Fraction, format?: string) {
    if (format) {
        if (format.startsWith("dec")) {
            let formatted = num.toString()
            const repeatBeginIdx = formatted.indexOf("(")
            if (repeatBeginIdx !== -1) {
                formatted = formatted.substring(0, repeatBeginIdx) +
                    "\\overline{" +
                    formatted.substring(repeatBeginIdx + 1, formatted.length - 1) +
                    "}"
            }
            return formatted
        }
        if (format.startsWith("mix")) {
            return num.toLatex(true)
        }
    }
    return num.toLatex()
}

export function parseRatNum(s: string) {
    let result = parseRatNumAsDecimal(s)
    if (!result) {
        result = parseRatNumAsFraction(s)
    }
    return result
}

const INT_PARSE_PATTERN = new RegExp(/^([+-]?\d+)\.*$/)
const COMMON_FRACTION_PARSE_PATTERN = new RegExp(/^([+-]?\d+)\/([+-]?\d+)$/)
const MIXED_FRACTION_PARSE_PATTERN = new RegExp(/^([+-]?\d+)\s+(\d+)\/(\d+)$/)
export function parseRatNumAsFraction(s: string) {
    s = s.trim()
    let num: Fraction
    let format: string
    let match
    if (match = INT_PARSE_PATTERN.exec(s)) {
        num = new Fraction(match[1])
        format = "int"
    }
    else if (match = COMMON_FRACTION_PARSE_PATTERN.exec(s)) {
        // this caters for negative denominators, which
        // will otherwise cause fraction.js to complain
        const n = new Fraction(match[1])
        const d = new Fraction(match[2])
        num = n.div(d)
        format = "cfr"
    }
    else if (match = MIXED_FRACTION_PARSE_PATTERN.exec(s)) {
        num = new Fraction(s)
        format = "mix"
    }
    else {
        return
    }
    format = num.floor().equals(num.ceil()) ? "int" : format
    return {
        format,
        num
    }
}

const TERMINATING_DECIMAL_PARSE_PATTERN = new RegExp(/^[+-]?\d*\.\d+$/)
const REPEATING_DECIMAL_PARSE_PATTERN_1 = new RegExp(/^([+-]?\d*)\.(\d*)\((\d+)\)$/)
const REPEATING_DECIMAL_PARSE_PATTERN_2 = new RegExp(/^([+-]?\d*)\.(\d+)(\.*)$/)
export function parseRatNumAsDecimal(s: string) {
    s = s.trim()
    let num: Fraction
    let match
    if (match = INT_PARSE_PATTERN.exec(s)) {
        num = new Fraction(match[1])
    }
    else if (match = TERMINATING_DECIMAL_PARSE_PATTERN.exec(s)) {
        num = new Fraction(s)
    }
    else if (match = REPEATING_DECIMAL_PARSE_PATTERN_1.exec(s)) {
        const wholePart = match[1]
        const noRepeat = match[2]
        const repeatPart = match[3]
        // unable to leverage new Fraction(s)
        // because it uses number internally instead of
        // BigInt and fails to convert the decimal expansion
        // for numbers like 1/19 correctly.
        //num = new Fraction(s)
        num = decToFrac(wholePart, noRepeat, repeatPart)
    }
    else if (match = REPEATING_DECIMAL_PARSE_PATTERN_2.exec(s)) {
        // this format exists to provide something more intuitive
        // for end users.
        const wholePart = match[1]
        let fractionalPart = match[2]
        let recurringIndicator = match[3]
        if (recurringIndicator.length > 1) {
            // set default value for just last digit repeating.
            recurringIndicator = fractionalPart[fractionalPart.length - 1]

            // look for value for recurring part longer
            // than single digit
            let maxLenToRepeat = Math.floor(fractionalPart.length / 2)
            for (let i = maxLenToRepeat; i > 1; i--) {
                const suffix = fractionalPart.substring(
                    fractionalPart.length - i)
                if (fractionalPart.endsWith(suffix + suffix)) {
                    recurringIndicator = suffix
                    fractionalPart = fractionalPart.substring(0,
                        fractionalPart.length - (i * 2))
                    break
                }
            }
        }
        else {
            recurringIndicator = ""
        }
        num = decToFrac(wholePart, fractionalPart, recurringIndicator)
    }
    else {
        return
    }
    const format = num.floor().equals(num.ceil()) ? "int" : "dec"
    return {
        format,
        num
    }
}

export function decToFrac(
        wholePart: string | undefined,
        noRepeat: string | undefined,
        repeat: string | undefined ) {
    if (wholePart && !/^[+-]?\d*$/.test(wholePart)) {
        throw new Error("wholePart argument is invalid")
    }
    if (noRepeat && !/^\d+$/.test(noRepeat)) {
        throw new Error("noRepeat argument is invalid")
    }
    if (repeat && !/^\d+$/.test(repeat)) {
        throw new Error("repeat argument is invalid")
    }
    if (!wholePart) {
        wholePart = "0"
    }
    else if (wholePart === "-") {
        wholePart = "-0"
    }
    else if (wholePart === "+") {
        wholePart = "0"
    }
    if (!noRepeat) {
        noRepeat = ""
    }
    const numerSign = wholePart.startsWith("-") ? -1n : 1n
    let numer = BigInt(wholePart + noRepeat)
    numer = numer < 0n ? -numer : numer
    let denom = 1n
    if (repeat) {
        // parse as int
        const repeatPartNum = BigInt(repeat)
        denom = 10n**BigInt(repeat.length) - 1n
        numer = numer * denom + repeatPartNum
    }
    if (noRepeat) {
        denom *= 10n**BigInt(noRepeat.length)
    }
    const hcf = gcd(numer, denom)
    numer = numer * numerSign / hcf
    denom /= hcf
    // hopefully numerator and denominator now
    // fits into number range.
    const result = new Fraction([
        Number(numer),
        Number(denom)
    ])
    return result
}

export function fracToDec(numer: number, denom?: number) {
    if (!denom) {
        denom = 1
    }

    // Normalize the operands to nonnegative values after noting
    // the sign
    if (denom < 0) {
        numer = -numer
        denom = -denom
    }
    const numerSign = (numer < 0 && denom > 0 ||
        numer > 0 && denom < 0) ? -1 : 1
    numer = Math.abs(numer)
    denom = Math.abs(denom)

    // Initialize result
    let res = new Array<number>()

    // Create a map to store already seen
    // remainders. Remainder is used as key
    // and its position in result is stored
    // as value. Note that we need position
    // for cases like 1/6. In this case,
    // the recurring sequence doesn't start
    // from first remainder.
    const mp = new Map<number, number>()

    // Find first remainder
    let rem = numer % denom

    const wholePart = (numer - rem) / denom

    // Keep finding remainder until either
    // remainder becomes 0 or repeats
    while (rem && (!mp.has(rem))) {
        // Store this remainder
        mp.set(rem, res.length)

        // Multiply remainder with 10
        rem *= 10

        // Append integer division of rem by denr to result
        const newRem = rem % denom
        const resPart = (rem - newRem) / denom
        res.push(resPart)

        // Update remainder
        rem = newRem
    }

    let nonRepeatingPortion = ''
    let repeatingPortion = ''
    if (res.length) {
        if (!rem) {
            mp.set(0, res.length)
        }
        nonRepeatingPortion = res.slice(0, mp.get(rem)).join("")
        repeatingPortion = res.slice(mp.get(rem)).join("")
    }
    const result = [
        `${numerSign < 0 ? '-' : ''}${wholePart}`,
        nonRepeatingPortion,
        repeatingPortion
    ]
    return result
}

export function gcd(a: bigint, b: bigint) {
    a = a < 0n ? -a : a
    b = b < 0n ? -b : b
    while (b) {
        const r = a % b
        a = b
        b = r
    }
    return a
}

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

/**
 * Modifies array by shifting its elements around randomly
 * (copied from https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/)
 * @param a array to shuffle in place
 */
export function shuffle(a: any[]) { 
    a.sort(() => Math.random() - 0.5); 
}

export function getRndSubset(a: any[], subsetCount: number) {
    if (!a.length) {
        throw new Error("received empty array")
    }

    // randomize copy of array
    const cloneOfA = a.slice()
    shuffle(cloneOfA)

    let result = cloneOfA
    if (subsetCount > a.length) {
        // not enough questions to fulfil desired number,
        // so questions have to be repeated.
        while (result.length < subsetCount) {
            const rem = subsetCount - result.length
            let itemsToCopyOver = (rem >= a.length) ? cloneOfA : 
                cloneOfA.slice(0, rem)
            result.push(...itemsToCopyOver)
        }
    }
    else if (subsetCount < a.length) {
        result = cloneOfA.slice(0, subsetCount)
    }
    return result
}