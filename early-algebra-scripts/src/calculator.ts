import {
    RationalNumber,
    RatNumExpression,
    NumberConfig,
    NumberPresentationStyle,
    QuestionConfig,
    SubtractionResultRange,
    DivisionResultRange,
    ModuloResultRange,
} from "./types"
import * as myutils from "./myutils"

function getEffectiveNumberConfig(questionConfig: QuestionConfig,
        index: number) {
    let numConfig = questionConfig.defaultOperandConfig
    const specificNumConfigs = questionConfig.operandConfigs
    if (specificNumConfigs && index < specificNumConfigs.length &&
            specificNumConfigs[index]) {
        numConfig = specificNumConfigs[index]
    }
    return numConfig
}

function gcdAndCheck(a: bigint, b: bigint) {
    const sign = b < 0n ? -1n : 1n
    const hcf = gcd(a, b)
    if (!hcf) {
        throw new Error("division by zero not allowed")
    }
    return hcf * sign
}

export function generateRndRationalNumber(options: NumberConfig) {
    let numerStart = options.numerStart
    let numerEnd = options.numerEnd
    if (!numerEnd || numerEnd < numerStart) {
        numerEnd = numerStart
    }
    let denomStart = options.denomStart || 0
    let denomEnd = options.denomEnd
    if (!denomEnd || denomEnd < denomStart) {
        denomEnd = denomStart
    }

    let randomNumer = BigInt(myutils.getRndInteger(
        numerStart, numerEnd + 1));
    let randomDenom = BigInt(myutils.getRndInteger(
        denomStart, denomEnd + 1));
    // avoid division by zero.
    if (!randomDenom) {
        randomDenom = 1n
    }

    if (!options.skipFractionSimplification) {
        const hcf = gcdAndCheck(randomNumer, randomDenom)
        randomNumer /= hcf
        randomDenom /= hcf
    }
    const value: RationalNumber = {
        n: randomNumer,
        d: randomDenom
    }
    return value;
}

export function wrapNumberForPresentation(
        ratNum: RationalNumber,
        questionConfig: QuestionConfig,
        index: number,
        useResultConfig?: boolean) {
    let presentationOptions = questionConfig.resultPresentation
    if (!useResultConfig) {
        presentationOptions = questionConfig.defaultNumberPresentation
        const specificStyles = questionConfig.numberPresentationStyles
        if (specificStyles && index < specificStyles.length &&
                specificStyles[index]) {
            presentationOptions = specificStyles[index]
        }
    }
    if (presentationOptions) {
        if (presentationOptions === NumberPresentationStyle.DECIMAL_EXPANSION) {
            return fracToDec(ratNum.n, ratNum.d)
        }
        else if (presentationOptions === NumberPresentationStyle.MIXED_FRACTION) {
            return fracToMixedFrac(ratNum.n, ratNum.d)
        }
    }
    return new CommonFractionExpr([ratNum.n, ratNum.d || 1n])
}

export function generateQuestion(questionConfig: QuestionConfig) {
    let operation = questionConfig.operation
    if (!operation) {
        const randOpIdx = myutils.getRndInteger(0,
            OPERATIONS_FOR_QUESTIONS.length)
        operation = OPERATIONS_FOR_QUESTIONS[randOpIdx]
    }
    switch (operation) {
        case AddExpr.Operator:
            return generateAdditionQuestion(questionConfig)
        case SubExpr.Operator:
            return generateSubtractionQuestion(questionConfig)
        case MultExpr.Operator:
            return generateMultiplicationQuestion(questionConfig)
        case DivideExpr.Operator:
            return generateDivisionQuestion(questionConfig)
        case ModuloExpr.Operator:
            return generateModuloQuestion(questionConfig)
        case IntDivExpr.Operator:
            return generateIntDivQuestion(questionConfig)
        case CompareExpr.Operator:
            return generateCompareQuestion(questionConfig)
    }

    const simpleOperandList = [generateRndRationalNumber(
        getEffectiveNumberConfig(questionConfig, 0))
    ];
    switch (operation) {
        case SignExpr.Operator:
            return new SignExpr(simpleOperandList)
        case AbsExpr.Operator:
            return new AbsExpr(simpleOperandList)
        case SquareExpr.Operator:
            return new SquareExpr(simpleOperandList)
        case CubeExpr.Operator:
            return new CubeExpr(simpleOperandList)
        case NegateExpr.Operator:
            return new NegateExpr(simpleOperandList)
        default:
            throw new Error(`Unknown operation: ${operation}`);
    }
}

export function generateAdditionQuestion(
        questionConfig: QuestionConfig) {
    let maxOperands = questionConfig.maxAdditionArgs
    if (!maxOperands || maxOperands < 2 || maxOperands > 4) {
        maxOperands = 2
    }
    const operandCount = myutils.getRndInteger(2, maxOperands)
    const operands = new Array<RationalNumber>()
    for (let i = 0; i < operandCount; i++) {
        const numConfig = getEffectiveNumberConfig(questionConfig, i)
        operands.push(generateRndRationalNumber(numConfig))
    }
    return new AddExpr(operands)
}

export function generateMultiplicationQuestion(
        questionConfig: QuestionConfig) {
    let maxOperands = questionConfig.maxMultiplicationArgs
    if (!maxOperands || maxOperands < 2 || maxOperands > 4) {
        maxOperands = 2
    }
    const operandCount = myutils.getRndInteger(2, maxOperands)
    const operands = new Array<RationalNumber>()
    for (let i = 0; i < operandCount; i++) {
        const numConfig = getEffectiveNumberConfig(questionConfig, i)
        operands.push(generateRndRationalNumber(numConfig))
    }
    return new MultExpr(operands)
}

export function generateSubtractionQuestion(questionConfig: QuestionConfig) {
    let numConfig = getEffectiveNumberConfig(questionConfig, 0)
    let operand1 = generateRndRationalNumber(numConfig)
    numConfig = getEffectiveNumberConfig(questionConfig, 1)
    let operand2 = generateRndRationalNumber(numConfig)
    const resultOptions = questionConfig.subtractionOptions
    if (resultOptions === SubtractionResultRange.POSITIVE_ONLY) {
        while (isEqualTo(operand1, operand2)) {
            operand2 = generateRndRationalNumber(numConfig)
        }
        if (isLessThan(operand1, operand2)) {
            // swap
            const temp = operand1
            operand1 = operand2
            operand2 = temp
        }
    }
    else if (resultOptions === SubtractionResultRange.NONNEGATIVE_ONLY) {
        if (isLessThan(operand1, operand2)) {
            // swap
            const temp = operand1
            operand1 = operand2
            operand2 = temp
        }
    }
    return new SubExpr([operand1, operand2])
}

export function generateDivisionQuestion(questionConfig: QuestionConfig) {
    let numConfig = getEffectiveNumberConfig(questionConfig, 0)
    let operand1 = generateRndRationalNumber(numConfig)
    numConfig = getEffectiveNumberConfig(questionConfig, 1)
    let operand2 = generateRndRationalNumber(numConfig)
    const resultOptions = questionConfig.divisionOptions
    if (resultOptions === DivisionResultRange.CANNOT_BE_UNDEFINED ||
            resultOptions === DivisionResultRange.INTEGER_ONLY ||
            resultOptions === DivisionResultRange.TERMINATING_DECIMAL_ONLY) {
        // ensure second operand is non-zero
        while (!operand2.n) {
            operand2 = generateRndRationalNumber(numConfig)
        }
    }
    if (resultOptions === DivisionResultRange.INTEGER_ONLY) {
        let quotient = divide(operand1, operand2)
        const decimalExpansion = fracToDec(quotient.n, quotient.d)
        decimalExpansion.args[1] = '' // clear portions 
        decimalExpansion.args[2] = '' // after decimal point
        quotient = decimalExpansion.calculate()
        operand1 = multiply(quotient, operand2)
    }
    else if (resultOptions === DivisionResultRange.TERMINATING_DECIMAL_ONLY) {
        let quotient = divide(operand1, operand2)
        const decimalExpansion = fracToDec(quotient.n, quotient.d)
        decimalExpansion.args[2] = '' // clear repeating portion
        quotient = decimalExpansion.calculate()
        operand1 = multiply(quotient, operand2)
    }
    return new DivideExpr([operand1, operand2])
}

export function generateModuloQuestion(questionConfig: QuestionConfig) {
    let numConfig = getEffectiveNumberConfig(questionConfig, 0)
    let operand1 = generateRndRationalNumber(numConfig)
    numConfig = getEffectiveNumberConfig(questionConfig, 1)
    let operand2 = generateRndRationalNumber(numConfig)
    // ensure second operand is non-zero
    while (!operand2.n) {
        operand2 = generateRndRationalNumber(numConfig)
    }
    const resultOptions = questionConfig.moduloOptions
    if (resultOptions === ModuloResultRange.NO_REMAINDER) {
        // interpret "no remainder" to mean first operand should
        // be non-zero if not already zero at this stage.
        if (!operand1.n) {
            if (isLessThan(operand1, operand2)) {
                // swap
                const temp = operand1
                operand1 = operand2
                operand2 = temp
            }
            let quotient = divide(operand1, operand2)
            const decimalExpansion = fracToDec(quotient.n, quotient.d)
            decimalExpansion.args[1] = '' // clear portions 
            decimalExpansion.args[2] = '' // after decimal point
            quotient = decimalExpansion.calculate()
            operand1 = multiply(quotient, operand2)
        }
    }
    return new ModuloExpr([operand1, operand2])
}

export function generateIntDivQuestion(questionConfig: QuestionConfig) {
    let numConfig = getEffectiveNumberConfig(questionConfig, 0)
    let operand1 = generateRndRationalNumber(numConfig)
    numConfig = getEffectiveNumberConfig(questionConfig, 1)
    let operand2 = generateRndRationalNumber(numConfig)
    // ensure second operand is non-zero
    while (!operand2.n) {
        operand2 = generateRndRationalNumber(numConfig)
    }
    return new IntDivExpr([operand1, operand2])
}

export function generateCompareQuestion(questionConfig: QuestionConfig) {
    let numConfig = getEffectiveNumberConfig(questionConfig, 0)
    let operand1 = generateRndRationalNumber(numConfig)
    numConfig = getEffectiveNumberConfig(questionConfig, 1)
    let operand2 = generateRndRationalNumber(numConfig)
    return new CompareExpr([operand1, operand2])
}

export abstract class AbstractRatNumExpression implements RatNumExpression {
    operator: Symbol
    args: RationalNumber[]
    constructor(operator: Symbol, args: RationalNumber[]) {
        this.operator = operator
        this.args = args
    }

    abstract calculate(): RationalNumber;
}

export class AddExpr extends AbstractRatNumExpression {
    static Operator = Symbol("add")
    constructor(args: RationalNumber[]) {
        super(AddExpr.Operator, args)
    }
    calculate() {
        let result: RationalNumber = {
            n: 0n,
            d: 1n
        }
        for (const operand of this.args) {
            result = add(result, operand)
        }
        return result
    }
}

export class SubExpr extends AbstractRatNumExpression {
    static Operator = Symbol("subtract")
    constructor(args: RationalNumber[]) {
        super(SubExpr.Operator, args)
    }
    calculate(): RationalNumber {
        return subtract(this.args[0], this.args[1])
    }
}

export class MultExpr extends AbstractRatNumExpression {
    static Operator = Symbol("multiply")
    constructor(args: RationalNumber[]) {
        super(MultExpr.Operator, args)
    }
    calculate() {
        let result: RationalNumber = {
            n: 1n,
            d: 1n
        }
        for (const operand of this.args) {
            result = multiply(result, operand)
        }
        return result
    }
}

export class DivideExpr extends AbstractRatNumExpression {
    static Operator = Symbol("divide")
    constructor(args: RationalNumber[]) {
        super(DivideExpr.Operator, args)
    }
    calculate(): RationalNumber {
        return divide(this.args[0], this.args[1])
    }
}

export class ModuloExpr extends AbstractRatNumExpression {
    static Operator = Symbol("modulo")
    constructor(args: RationalNumber[]) {
        super(ModuloExpr.Operator, args)
    }
    calculate() {
        let result = divide(this.args[0], this.args[1])
        const denom = result.d!
        let rem = result.n % denom
        if (rem < 0) {
            rem += denom
        }
        return {
            n: rem,
            d: 1n
        }
    }
}

export class IntDivExpr extends AbstractRatNumExpression {
    static Operator = Symbol("intdiv")
    constructor(args: RationalNumber[]) {
        super(IntDivExpr.Operator, args)
    }
    calculate() {
        let result = divide(this.args[0], this.args[1])
        const denom = result.d!
        let rem = result.n % denom
        let quotient = (result.n - rem) / denom
        if (result.n < 0) {
            quotient--
        }
        return {
            n: quotient,
            d: 1n
        }
    }
}

export class CompareExpr extends AbstractRatNumExpression {
    static Operator = Symbol("compare")
    constructor(args: RationalNumber[]) {
        super(CompareExpr.Operator, args)
    }
    calculate() {
        const result = {
            n: 0n,
            d: 1n
        }
        result.n = signum(subtract(this.args[0], this.args[1]).n)
        return result
    }
}

export class SignExpr extends AbstractRatNumExpression {
    static Operator = Symbol("sign")
    constructor(args: RationalNumber[]) {
        super(SignExpr.Operator, args)
    }
    calculate() {
        // first normalize
        let result = add({} as any, this.args[0])
        result.n = signum(result.n)
        return result
    }
}

export class AbsExpr extends AbstractRatNumExpression {
    static Operator = Symbol("abs")
    constructor(args: RationalNumber[]) {
        super(AbsExpr.Operator, args)
    }
    calculate() {
        // first normalize
        let result = add({} as any, this.args[0])
        result.n = magnitude(result.n)
        return result
    }
}

export class SquareExpr extends AbstractRatNumExpression {
    static Operator = Symbol("square")
    constructor(args: RationalNumber[]) {
        super(SquareExpr.Operator, args)
    }
    calculate() {
        const operand = this.args[0]
        return multiply(operand, operand)
    }
}

export class CubeExpr extends AbstractRatNumExpression {
    static Operator = Symbol("cube")
    constructor(args: RationalNumber[]) {
        super(CubeExpr.Operator, args)
    }
    calculate() {
        const operand = this.args[0]
        return multiply(operand, multiply(operand, operand))
    }
}

export class NegateExpr extends AbstractRatNumExpression {
    static Operator = Symbol("negate")
    constructor(args: RationalNumber[]) {
        super(NegateExpr.Operator, args)
    }
    calculate(): RationalNumber {
        return subtract({} as any, this.args[0])
    }
}

export class DecimalExpansionExpr implements RatNumExpression {
    static Operator = Symbol("decimalExpansion")
    operator: Symbol
    args: string[]
    constructor(args: string[]) {
        this.operator = DecimalExpansionExpr.Operator
        this.args = args
    }
    calculate(): RationalNumber {
        return decToFrac(this.args[0], this.args[1],
            this.args[2])
    }
}

export class MixedFractionExpr extends AbstractRatNumExpression {
    static Operator = Symbol("mixedFraction")
    constructor(args: RationalNumber[]) {
        super(MixedFractionExpr.Operator, args)
    }
    calculate(): RationalNumber {
        const multiplier = this.args[0];
        const wholePart = this.args[1]
        const fractionalPart = this.args[2]
        return multiply(multiplier, add(wholePart,
            fractionalPart))
    }
}

export class CommonFractionExpr implements RatNumExpression {
    static Operator = Symbol("commonFraction")
    args: bigint[]
    operator: Symbol
    constructor(args: bigint[]) {
        this.operator = CommonFractionExpr.Operator
        this.args = args
    }
    calculate() {
        const numerator = {
            n: this.args[0]
        } as any
        const denominator = {
            n: this.args[1]
        } as any
        // normalize
        return divide(numerator, denominator)
    }
}

export function add(operand1: RationalNumber, operand2: RationalNumber) {
    let a = operand1.n || 0n, b = operand1.d || 1n
    let c = operand2.n || 0n, d = operand2.d || 1n
    let numer = a*d + b*c
    let denom = b*d
    const hcf = gcdAndCheck(numer, denom)
    numer /= hcf
    denom /= hcf
    const result: RationalNumber = {
        n: numer,
        d: denom
    }
    return result
}

export function subtract(operand1: RationalNumber, operand2: RationalNumber) {
    let a = operand1.n || 0n, b = operand1.d || 1n
    let c = operand2.n || 0n, d = operand2.d || 1n
    let numer = a*d - b*c
    let denom = b*d
    const hcf = gcdAndCheck(numer, denom)
    numer /= hcf
    denom /= hcf
    const result: RationalNumber = {
        n: numer,
        d: denom
    }
    return result
}

export function multiply(operand1: RationalNumber, operand2: RationalNumber) {
    let a = operand1.n || 0n, b = operand1.d || 1n
    let c = operand2.n || 0n, d = operand2.d || 1n
    let numer = a*c
    let denom = b*d
    const hcf = gcdAndCheck(numer, denom)
    numer /= hcf
    denom /= hcf
    const result: RationalNumber = {
        n: numer,
        d: denom
    }
    return result
}

export function divide(operand1: RationalNumber, operand2: RationalNumber) {
    let a = operand1.n || 0n, b = operand1.d || 1n
    let c = operand2.n || 0n, d = operand2.d || 1n
    let numer = a*d
    let denom = b*c
    const hcf = gcdAndCheck(numer, denom)
    numer /= hcf
    denom /= hcf
    const result: RationalNumber = {
        n: numer,
        d: denom
    }
    return result
}

export function isEqualTo(operand1: RationalNumber, operand2: RationalNumber) {
    let a = operand1.n || 0n, b = operand1.d || 1n
    let c = operand2.n || 0n, d = operand2.d || 1n
    let numer = a*d
    let denom = b*c
    return numer === denom
}

export function isLessThan(operand1: RationalNumber, operand2: RationalNumber) {
    let a = operand1.n || 0n, b = operand1.d || 1n
    let c = operand2.n || 0n, d = operand2.d || 1n
    let numer = a*d
    let denom = b*c
    return numer < denom
}

export function isGreaterThan(operand1: RationalNumber, operand2: RationalNumber) {
    let a = operand1.n || 0n, b = operand1.d || 1n
    let c = operand2.n || 0n, d = operand2.d || 1n
    let numer = a*d
    let denom = b*c
    return numer > denom
}

export function fracToMixedFrac(numer: bigint, denom?: bigint) {
    if (numer || !denom) {
        throw new Error("denominator cannot be zero if " +
            "numerator is not zero")
    }
    if (!denom) {
        denom = 1n
    }

    // Normalize the operands to nonnegative values after noting
    // the sign
    if (denom < 0) {
        numer = -numer
        denom = -denom
    }
    const numerSign = signum(numer)
    numer = magnitude(numer)
    denom = magnitude(denom)

    let rem = numer % denom

    let quotient = (numer - rem) / denom

    const multiplier: RationalNumber = {
        n: numerSign,
        d: 1n
    }
    const wholePart: RationalNumber = {
        n: quotient,
        d: 1n
    }
    const fractionalPart: RationalNumber = {
        n: rem,
        d: denom
    }
    return new MixedFractionExpr([
        multiplier,
        wholePart,
        fractionalPart
    ])
}

export function fracToDec(numer: bigint, denom?: bigint) {
    if (numer || !denom) {
        throw new Error("denominator cannot be zero if " +
            "numerator is not zero")
    }
    if (!denom) {
        denom = 1n
    }

    // Normalize the operands to nonnegative values after noting
    // the sign
    if (denom < 0) {
        numer = -numer
        denom = -denom
    }
    const numerSign = signum(numer)
    numer = magnitude(numer)
    denom = magnitude(denom)

    // Initialize result
    let res = new Array<bigint>()

    // Create a map to store already seen
    // remainders. Remainder is used as key
    // and its position in result is stored
    // as value. Note that we need position
    // for cases like 1/6. In this case,
    // the recurring sequence doesn't start
    // from first remainder.
    const mp = new Map<bigint, number>()

    // Find first remainder
    let rem = numer % denom

    const wholePart = numerSign * (numer - rem) / denom

    // Keep finding remainder until either
    // remainder becomes 0 or repeats
    while (rem && (!mp.has(rem))) {
        // Store this remainder
        mp.set(rem, res.length)

        // Multiply remainder with 10
        rem *= 10n

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
            mp.set(0n, res.length)
        }
        nonRepeatingPortion = res.slice(0, mp.get(rem)).join("")
        repeatingPortion = res.slice(mp.get(rem)).join("")
    }
    const result = new DecimalExpansionExpr([
        `${wholePart}`,
        nonRepeatingPortion,
        repeatingPortion
    ])
    return result
}

export function decToFrac(
        wholePart: string | undefined,
        noRepeat: string | undefined,
        repeat: string | undefined ) {
    if (wholePart && !/^[-+]?\d+$/.test(wholePart)) {
        throw new Error("wholePart argument is invalid")
    }
    if (noRepeat && !/^\d+$/.test(noRepeat)) {
        throw new Error("noRepeat argument is invalid")
    }
    if (repeat && !/^\d+$/.test(repeat)) {
        throw new Error("repeat argument is invalid")
    }
    let numer = BigInt((wholePart || '0') +
        (noRepeat || ''))
    const numerSign = signum(numer)
    numer = magnitude(numer)
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
    const hcf = gcdAndCheck(numer, denom)
    numer = numer * numerSign / hcf
    denom /= hcf
    const result: RationalNumber = {
        n: numer,
        d: denom
    }
    return result
}

export function signum(operand: bigint) {
    if (operand < 0n) {
        return -1n
    }
    else if (operand > 0n) {
        return 1n
    }
    else {
        return 0n
    }
}

export function magnitude(operand: bigint) {
    return operand < 0n ? -operand : operand
}

export function gcd(a: bigint, b: bigint) {
    a = magnitude(a)
    b = magnitude(b)
    while (b) {
        const r = a % b
        a = b
        b = r
    }
    return a
}

const OPERATIONS_FOR_QUESTIONS = [
    AddExpr.Operator,
    SubExpr.Operator,
    MultExpr.Operator,
    DivideExpr.Operator,
    ModuloExpr.Operator,
    IntDivExpr.Operator,
    CompareExpr.Operator,
    SignExpr.Operator,
    AbsExpr.Operator,
    SquareExpr.Operator,
    CubeExpr.Operator,
    NegateExpr.Operator
]