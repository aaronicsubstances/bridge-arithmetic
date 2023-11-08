// NB: enums may not work in client-side Javascript.
export enum NumberPresentationStyle {
    DECIMAL_EXPANSION = 1,
    MIXED_FRACTION,
    COMMON_FRACTION
}

export enum SubtractionResultRange {
    UNRESTRICTED = 1,
    NONNEGATIVE_ONLY,
    POSITIVE_ONLY
}

export enum DivisionResultRange {
    UNRESTRICTED = 1,
    CANNOT_BE_UNDEFINED,
    TERMINATING_DECIMAL_ONLY,
    INTEGER_ONLY
}

export enum ModuloResultRange {
    UNRESTRICTED = 1,
    NO_REMAINDER
}

export type NumberConfig = {
    numerStart: number,
    numerEnd?: number,
    denomStart?: number
    denomEnd?: number
    skipFractionSimplification?: boolean
}

export type QuestionConfig = {
    operation?: Symbol
    defaultOperandConfig: NumberConfig
    operandConfigs?: NumberConfig[]
    numberPresentationStyles?: NumberPresentationStyle[]
    defaultNumberPresentation?: NumberPresentationStyle
    resultPresentation?: NumberPresentationStyle
    maxAdditionArgs?: number
    maxMultiplicationArgs?: number
    subtractionOptions?: SubtractionResultRange
    divisionOptions?: DivisionResultRange
    moduloOptions?: ModuloResultRange
}

export type Question = {
    question: RatNumExpression
    answer: RatNumExpression
}

export type RationalNumber = {
    n: bigint,
    d?: bigint
}

export interface RatNumExpression {
    operator: Symbol
    calculate(): RationalNumber
}