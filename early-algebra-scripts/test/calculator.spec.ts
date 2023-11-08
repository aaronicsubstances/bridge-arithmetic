import { assert } from "chai";
import mathjs from "mathjs"
import {
    customMath,
    performArithmetic,
    formatDecimalExpansion,
    parseDecimalExpansion,
    gcd
} from "../src/calculator";
import {
    ArithmeticOp
} from "../src/types"

describe("Calculator Tests", () => {
    describe("#performArithmetic", () => {
        const testData = [
            {
                op: ArithmeticOp.ADD,
                operands: [
                    customMath.fraction(2),
                    customMath.fraction(3)
                ],
                expected: customMath.fraction(5)
            },
            {
                op: ArithmeticOp.SUB,
                operands: [
                    customMath.fraction(2),
                    customMath.fraction(3)
                ],
                expected: customMath.fraction(-1)
            },
            {
                op: ArithmeticOp.MUL,
                operands: [
                    customMath.fraction(2),
                    customMath.fraction(3)
                ],
                expected: customMath.fraction(6)
            },
            {
                op: ArithmeticOp.DIV,
                operands: [
                    customMath.fraction(2),
                    customMath.fraction(3)
                ],
                expected: customMath.fraction(2, 3)
            },
            {
                op: ArithmeticOp.DIV,
                operands: [
                    customMath.fraction(3),
                    customMath.fraction(2)
                ],
                expected: customMath.fraction("1.5")
            },
            {
                op: ArithmeticOp.DIV,
                operands: [
                    customMath.fraction(0),
                    customMath.fraction(3)
                ],
                expected: customMath.fraction(0)
            },
            {
                op: ArithmeticOp.MODULO,
                operands: [
                    customMath.fraction(0),
                    customMath.fraction(3)
                ],
                expected: customMath.fraction(0)
            },
            {
                op: ArithmeticOp.MODULO,
                operands: [
                    customMath.fraction(7),
                    customMath.fraction(3)
                ],
                expected: customMath.fraction(1)
            },
            {
                op: ArithmeticOp.MODULO,
                operands: [
                    customMath.fraction(-7),
                    customMath.fraction(-3)
                ],
                expected: customMath.fraction(1)
            },
            {
                op: ArithmeticOp.MODULO,
                operands: [
                    customMath.fraction(-7),
                    customMath.fraction(3)
                ],
                expected: customMath.fraction(2)
            },
            {
                op: ArithmeticOp.MODULO,
                operands: [
                    customMath.fraction(7),
                    customMath.fraction(-3)
                ],
                expected: customMath.fraction(2)
            },
            {
                op: ArithmeticOp.ABS,
                operands: [
                    customMath.fraction(5)
                ],
                expected: customMath.fraction(5)
            },
            {
                op: ArithmeticOp.ABS,
                operands: [
                    customMath.fraction(-3)
                ],
                expected: customMath.fraction(3)
            },
            {
                op: ArithmeticOp.SIGN,
                operands: [
                    customMath.fraction(-3)
                ],
                expected: customMath.fraction(-1)
            },
            {
                op: ArithmeticOp.SIGN,
                operands: [
                    customMath.fraction(5)
                ],
                expected: customMath.fraction(1)
            },
            {
                op: ArithmeticOp.SIGN,
                operands: [
                    customMath.fraction(0)
                ],
                expected: customMath.fraction(0)
            },
            {
                op: ArithmeticOp.SQUARED,
                operands: [
                    customMath.fraction(3),
                ],
                expected: customMath.fraction(9)
            },
            {
                op: ArithmeticOp.CUBED,
                operands: [
                    customMath.fraction(2),
                ],
                expected: customMath.fraction(8)
            },
            {
                op: ArithmeticOp.INT_DIV,
                operands: [
                    customMath.fraction(2),
                    customMath.fraction(3),
                ],
                expected: customMath.fraction(0)
            },
            {
                op: ArithmeticOp.INT_DIV,
                operands: [
                    customMath.fraction(-2),
                    customMath.fraction(3),
                ],
                expected: customMath.fraction(-1)
            },
            {
                op: ArithmeticOp.INT_DIV,
                operands: [
                    customMath.fraction(9),
                    customMath.fraction(2),
                ],
                expected: customMath.fraction(4)
            },
            {
                op: ArithmeticOp.INT_DIV,
                operands: [
                    customMath.fraction(15),
                    customMath.fraction(-3),
                ],
                expected: customMath.fraction(-5)
            },
            {
                op: ArithmeticOp.NEGATE,
                operands: [
                    customMath.fraction(5)
                ],
                expected: customMath.fraction(-5)
            },
            {
                op: ArithmeticOp.NEGATE,
                operands: [
                    customMath.fraction(-3)
                ],
                expected: customMath.fraction(3)
            },
            {
                op: ArithmeticOp.COMPARE,
                operands: [
                    customMath.fraction(1),
                    customMath.fraction(2)
                ],
                expected: customMath.fraction(-1)
            },
            {
                op: ArithmeticOp.COMPARE,
                operands: [
                    customMath.fraction(3),
                    customMath.fraction(2)
                ],
                expected: customMath.fraction(1)
            },
            {
                op: ArithmeticOp.COMPARE,
                operands: [
                    customMath.fraction(1),
                    customMath.fraction(1)
                ],
                expected: customMath.fraction(0)
            }
        ]
        testData.forEach(({op, operands, expected}, i) => {
            it(`should pass for input ${i}`, () => {
                const actual = performArithmetic(op,
                    operands);
                assert.deepEqual(actual, expected);
            })
        });
    });

    describe("#formatDecimalExpansion", () => {
        const testData = [
            {
                n: 0n,
                d: 1n,
                expected: ['0', '', '']
            },
            {
                n: 1n,
                d: 2n,
                expected: ['0', '5', '']
            },
            {
                n: 2n,
                d: 3n,
                expected: ['0', '', '6']
            },
            {
                n: 3n,
                d: 4n,
                expected: ['0', '75', '']
            },
            {
                n: 5n,
                d: 6n,
                expected: ['0', '8', '3']
            },
            {
                n: 7n,
                d: 6n,
                expected: ['1', '1', '6']
            },
            {
                n: -109n,
                d: 17n,
                w: '-6',
                expected: ['-6', '', '4117647058823529']
            }
        ]
        testData.forEach(({n, d, expected}, i) => {
            it(`should pass with input ${i}`, () => {
                const actual = formatDecimalExpansion(n, d);
                assert.deepEqual(actual, expected);
            })
        })
    })

    describe("#parseDecimalExpansion", () => {
        const testData = [
            {
                w: '',
                t: '',
                r: '',
                expected: [0n, 1n]
            },
            {
                w: undefined,
                t: undefined,
                r: undefined,
                expected: [0n, 1n]
            },
            {
                w: '0',
                t: '5',
                r: '',
                expected: [1n, 2n]
            },
            {
                w: '0',
                t: '',
                r: '6',
                expected: [2n, 3n]
            },
            {
                w: '',
                t: '75',
                r: undefined,
                expected: [3n, 4n]
            },
            {
                w: undefined,
                t: '8',
                r: '3',
                expected: [5n, 6n]
            },
            {
                w: '1',
                t: '1',
                r: '6',
                expected: [7n, 6n]
            },
            {
                w: '-6',
                t: '',
                r: '4117647058823529',
                expected: [-109n, 17n]
            }
        ]
        testData.forEach(({w, t, r, expected}, i) => {
            it(`should pass with input ${i}`, () => {
                const actual = parseDecimalExpansion(w, t, r);
                assert.deepEqual(actual, expected);
            })
        })
    })

    describe("#gcd", () => {
        const testData = [
            {
                a: 0n,
                b: 0n,
                expected: 0n
            },
            {
                a: 1n,
                b: 0n,
                expected: 1n
            },
            {
                a: 0n,
                b: 1n,
                expected: 1n
            },
            {
                a: 4n,
                b: 2n,
                expected: 2n
            },
            {
                a: 36n,
                b: 27n,
                expected: 9n
            }
        ]
        testData.forEach(({a, b, expected}, i) => {
            it(`should pass with ${i}`, () => {
                const actual = gcd(a, b)
                assert.equal(actual, expected)
            })
        })
    })
});