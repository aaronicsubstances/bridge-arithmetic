import { assert, expect } from "chai";
import Fraction from "fraction.js"
import {
    gcd,
    decToFrac,
    formatRatNumToLatex,
    areRatNumsEqual,
    parseRatNumAsFraction,
    parseRatNumAsDecimal,
    parseRatNum,
    fracToDec,
    getRndInteger,
    shuffle,
    getRndSubset
} from "../src/myutils"

describe("myutils", function() {
    describe("#areRatNumsEqual", function() {
        it("should return true for 1/2 and 1/2", function() {
            assert.isTrue(areRatNumsEqual(new Fraction("1/2"),
                new Fraction("1/2")))
        })
        it("should return true for 1/2 and 2/4", function() {
            assert.isTrue(areRatNumsEqual(new Fraction("1/2"),
                new Fraction("2/4")))
        })
        it("should return false for 1/2 and 2/5", function() {
            assert.isFalse(areRatNumsEqual(new Fraction("1/2"),
                new Fraction("2/5")))
        })
    })

    describe("#formatRatNumToLatex", () => {
        const testData = [
            {
                n: 0,
                d: 1,
                fmt: undefined,
                expected: '0'
            },
            {
                n: 0,
                d: 1,
                fmt: "dec",
                expected: '0'
            },
            {
                n: -3,
                d: 1,
                fmt: "dec",
                expected: '-3'
            },
            {
                n: -3,
                d: 1,
                fmt: "int",
                expected: '-3'
            },
            {
                n: -1,
                d: 19,
                fmt: "dec",
                expected: '-0.\\overline{052631578947368421}'
            },
            {
                n: -1,
                d: 19,
                fmt: "mix",
                expected: '-\\frac{1}{19}'
            },
            {
                n: -1,
                d: 19,
                fmt: "cfr",
                expected: '-\\frac{1}{19}'
            },
            {
                n: 1,
                d: 2,
                fmt: "dec",
                expected: '0.5'
            },
            {
                n: 1,
                d: 2,
                fmt: "cfr",
                expected: '\\frac{1}{2}'
            },
            {
                n: 2,
                d: 3,
                fmt: "dec",
                expected: '0.\\overline{6}'
            },
            {
                n: 3,
                d: 4,
                fmt: "dec",
                expected: '0.75'
            },
            {
                n: 5,
                d: 6,
                fmt: "dec",
                expected: '0.8\\overline{3}'
            },
            {
                n: 7,
                d: 6,
                fmt: "dec",
                expected: '1.1\\overline{6}'
            },
            {
                n: 7,
                d: 6,
                fmt: "mix",
                expected: '1\\frac{1}{6}'
            },
            {
                n: 7,
                d: 6,
                fmt: "cfr",
                expected: '\\frac{7}{6}'
            },
            {
                n: -109,
                d: 17,
                fmt: 'dec',
                expected: '-6.\\overline{4117647058823529}'
            },
            {
                n: -109,
                d: 17,
                fmt: 'cfr',
                expected: '-\\frac{109}{17}'
            },
            {
                n: -109,
                d: 17,
                fmt: 'mix',
                expected: '-6\\frac{7}{17}'
            }
        ]
        testData.forEach(({n, d, fmt, expected}, i) => {
            it(`should pass with input ${i}`, () => {
                const num = new Fraction(n, d)
                const actual = formatRatNumToLatex(num, fmt);
                assert.equal(actual, expected);
            })
        })
    })

    describe("#parseRatNumAsFraction", function() {
        const testData = [
            {
                s: "",
                expected: undefined
            },
            {
                s: "0",
                expected: {
                    format: "int",
                    num: new Fraction(0)
                }
            },
            {
                s: "-0/25",
                expected: {
                    format: "int",
                    num: new Fraction(0)
                }
            },
            {
                s: " 2 0/1 ",
                expected: {
                    format: "int",
                    num: new Fraction(2)
                }
            },
            {
                s: "\t2 1/2 ",
                expected: {
                    format: "mix",
                    num: new Fraction(5, 2)
                }
            },
            {
                s: "-8/7",
                expected: {
                    format: "cfr",
                    num: new Fraction(-8, 7)
                }
            },
            {
                s: "-1 1/7",
                expected: {
                    format: "mix",
                    num: new Fraction(-8, 7)
                }
            },
            {
                s: "1 1/7 2",
                expected: undefined
            },
            {
                s: "1 -1/72",
                expected: undefined
            },
            {
                s: "1 1/-72",
                expected: undefined
            },
            {
                s: "+",
                expected: undefined
            },
            {
                s: "-",
                expected: undefined
            },
            {
                s: "1/-7",
                expected: {
                    format: "cfr",
                    num: new Fraction(-1, 7)
                }
            },
            {
                s: "-1/-7",
                expected: {
                    format: "cfr",
                    num: new Fraction(1, 7)
                }
            },
            {
                s: "-1/-7",
                expected: {
                    format: "cfr",
                    num: new Fraction(1, 7)
                }
            }
        ]
        testData.forEach(({s, expected}, i) => {
            it(`should pass with input ${i}`, () => {
                const actual = parseRatNumAsFraction(s);
                assert.deepEqual(actual, expected);
            })
        })
    })

    describe("#parseRatNum", function() {
        it("should pass for 0.5", () => {
            const expected = {
                format: "dec",
                num: new Fraction(1, 2)
            }
            const actual = parseRatNum("0.5")
            assert.deepEqual(actual, expected)
        })
        it("should pass for -0.(5)", () => {
            const expected = {
                format: "dec",
                num: new Fraction(5, 9)
            }
            const actual = parseRatNum(" 0.(5) ")
            assert.deepEqual(actual, expected)
        })
        it("should pass for +0.0101..", () => {
            const expected = {
                format: "dec",
                num: new Fraction(1, 99)
            }
            const actual = parseRatNum(" +0.0101.. ")
            assert.deepEqual(actual, expected)
        })
        it("should pass for 5", () => {
            const expected = {
                format: "int",
                num: new Fraction(5)
            }
            const actual = parseRatNum("5")
            assert.deepEqual(actual, expected)
        })
        it("should pass for 5 1/2", () => {
            const expected = {
                format: "mix",
                num: new Fraction(11, 2)
            }
            const actual = parseRatNum("5 1/2")
            assert.deepEqual(actual, expected)
        })
        it("should pass for -11/2", () => {
            const expected = {
                format: "cfr",
                num: new Fraction(-11, 2)
            }
            const actual = parseRatNum(" -11/2 ")
            assert.deepEqual(actual, expected)
        })
        it("should fail for -.", () => {
            const expected = undefined
            const actual = parseRatNum("-.")
            assert.equal(actual, expected)
        })
        it("should fail for 1 -1/2", () => {
            const expected = undefined
            const actual = parseRatNum("1 -1/2")
            assert.equal(actual, expected)
        })
    })

    describe("#parseRatNumAsDecimal", function() {
        const testData = [
            {
                s: "",
                expected: undefined
            },
            {
                s: "0",
                expected: {
                    format: "int",
                    num: new Fraction(0)
                }
            },
            {
                s: "-025..",
                expected: {
                    format: "int",
                    num: new Fraction(-25)
                }
            },
            {
                s: " 2.00 ",
                expected: {
                    format: "int",
                    num: new Fraction(2)
                }
            },
            {
                s: " 12. ",
                expected: {
                    format: "int",
                    num: new Fraction(12)
                }
            },
            {
                s: "\t2.5 ",
                expected: {
                    format: "dec",
                    num: new Fraction(5, 2)
                }
            },
            {
                s: "\t2.5(0)",
                expected: {
                    format: "dec",
                    num: new Fraction(5, 2)
                }
            },
            {
                s: "2.50000...\t",
                expected: {
                    format: "dec",
                    num: new Fraction(5, 2)
                }
            },
            {
                s: "-1.(142857)",
                expected: {
                    format: "dec",
                    num: new Fraction(-8, 7)
                }
            },
            {
                s: "-1.142857(142857)",
                expected: {
                    format: "dec",
                    num: new Fraction(-8, 7)
                }
            },
            {
                s: "-1.142857142857...",
                expected: {
                    format: "dec",
                    num: new Fraction(-8, 7)
                }
            },
            {
                s: "1 1/7 2",
                expected: undefined
            },
            {
                s: "1-1.72",
                expected: undefined
            },
            {
                s: "1.1(72",
                expected: undefined
            },
            {
                s: ".",
                expected: undefined
            },
            {
                s: "+.",
                expected: undefined
            },
            {
                s: "-.",
                expected: undefined
            },
            {
                s: "+",
                expected: undefined
            },
            {
                s: "-",
                expected: undefined
            },
            {
                s: ".3",
                expected: {
                    format: "dec",
                    num: new Fraction(3, 10)
                }
            },
            {
                s: "0.3...",
                expected: {
                    format: "dec",
                    num: new Fraction(1, 3)
                }
            },
            {
                s: "0.(3)",
                expected: {
                    format: "dec",
                    num: new Fraction(1, 3)
                }
            },
            {
                s: "-1.16..",
                expected: {
                    format: "dec",
                    num: new Fraction(-7, 6)
                }
            },
            {
                s: "40.348989...",
                expected: {
                    format: "dec",
                    num: new Fraction(79891, 1980)
                }
            },
            {
                s: "40.3489(89)",
                expected: {
                    format: "dec",
                    num: new Fraction(79891, 1980)
                }
            },
            {
                s: ".0909...",
                expected: {
                    format: "dec",
                    num: new Fraction(1, 11)
                }
            },
            {
                s: '-2.052631578947368421052631578947368421..',
                expected: {
                    format: "dec",
                    num: new Fraction(-39, 19)
                }
            },
            {
                s: '-2.(052631578947368421)',
                expected: {
                    format: "dec",
                    num: new Fraction(-39, 19)
                }
            }
        ]
        testData.forEach(({s, expected}, i) => {
            it(`should pass with input ${i}`, () => {
                const actual = parseRatNumAsDecimal(s);
                assert.deepEqual(actual, expected);
            })
        })
    })

    describe("#decToFrac", () => {
        const testData = [
            {
                w: '',
                t: '',
                r: '',
                expected: [0, 1]
            },
            {
                w: '+',
                t: '',
                r: '',
                expected: [0, 1]
            },
            {
                w: '-',
                t: '',
                r: '',
                expected: [0, 1]
            },
            {
                w: '-',
                t: '2',
                r: '',
                expected: [-1, 5]
            },
            {
                w: undefined,
                t: undefined,
                r: undefined,
                expected: [0, 1]
            },
            {
                w: '0',
                t: '5',
                r: '',
                expected: [1, 2]
            },
            {
                w: '+',
                t: '',
                r: '6',
                expected: [2, 3]
            },
            {
                w: '',
                t: '75',
                r: undefined,
                expected: [3, 4]
            },
            {
                w: '-',
                t: '1',
                r: '2',
                expected: [-11, 90]
            },
            {
                w: undefined,
                t: '8',
                r: '3',
                expected: [5, 6]
            },
            {
                w: '1',
                t: '1',
                r: '6',
                expected: [7, 6]
            },
            {
                w: '-6',
                t: '',
                r: '4117647058823529',
                expected: [-109, 17]
            },
            {
                w: '-1',
                t: '',
                r: "052631578947368421",
                expected: [-20, 19]
            }
        ]
        testData.forEach(({w, t, r, expected}, i) => {
            it(`should pass with input ${i}`, () => {
                const actual = decToFrac(w, t, r);
                assert.deepEqual(actual, new Fraction(expected[0],
                    expected[1]));
            })
        })
    })

    describe("#fracToDec", () => {
        const testData = [
            {
                n: 0,
                d: 1,
                expected: [
                    '0',
                    '',
                    ''
                ]
            },
            {
                n: 0,
                d: undefined,
                expected: [
                    '0',
                    '',
                    ''
                ]
            },
            {
                n: 1,
                d: -5,
                expected: [
                    '-0',
                    '2',
                    ''
                ]
            },
            {
                n: 1,
                d: 2,
                expected: [
                    '0',
                    '5',
                    ''
                ]
            },
            {
                n: 2,
                d: 3,
                expected: [
                    '0',
                    '',
                    '6'
                ]
            },
            {
                n: 3,
                d: 4,
                expected: [
                    '0',
                    '75',
                    ''
                ]
            },
            {
                n: -11,
                d: 90,
                expected: [
                    '-0',
                    '1',
                    '2'
                ]
            },
            {
                n: 5,
                d: 6,
                expected: [
                    '0',
                    '8',
                    '3'
                ]
            },
            {
                n: 7,
                d: 6,
                expected: [
                    '1',
                    '1',
                    '6'
                ]
            },
            {
                n: -8,
                d: -5,
                expected: [
                    '1',
                    '6',
                    ''
                ]
            },
            {
                n: -109,
                d: 17,
                expected: [
                    '-6',
                    '',
                    '4117647058823529'
                ]
            },
            {
                n: -20,
                d: 19,
                expected: [
                    '-1',
                    '',
                    "052631578947368421"
                ]
            }
        ]
        testData.forEach(({ n, d, expected}, i) => {
            it(`should pass with input ${i}`, () => {
                const actual = fracToDec(n, d);
                assert.deepEqual(actual, expected);
            })
        })
    })

    describe("#gcd", function() {
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
                a: 8n,
                b: 12n,
                expected: 4n
            },
            {
                a: -28n,
                b: 42n,
                expected: 14n
            },
            {
                a: -27n,
                b: -36n,
                expected: 9n
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

    describe("#getRndInteger", () => {
        it("should pass", function() {
            const expected = [0, 1, 2]
            const actual = getRndInteger(0, 3)
            expect(actual).to.be.oneOf(expected)
        })
    })

    describe("#shuffle", () => {
        it("should pass", function() {
            const input = [0, 1, 2]
            const expected = [
                [0, 1, 2], [1, 0, 2],
                [0, 2, 1], [2, 0, 1],
                [1, 2, 0], [2, 1, 0]
            ]
            shuffle(input)
            expect(input).to.deep.be.oneOf(expected)
        })
    })

    describe("#getRndSubset", () => {
        it("should pass when subset count equals array length (1)", () => {
            const a = [0, 1, 2]
            const subsetCount = 3
            const expected = [
                [0, 1, 2], [1, 0, 2],
                [0, 2, 1], [2, 0, 1],
                [1, 2, 0], [2, 1, 0]
            ]
            const actual = getRndSubset(a, subsetCount)
            expect(actual).to.deep.be.oneOf(expected)
        })
        it("should pass when subset count equals array length (2)", () => {
            const a = [1]
            const subsetCount = 1
            const expected = [1]
            const actual = getRndSubset(a, subsetCount)
            assert.deepEqual(actual, expected)
        })
        it("should pass when subset count is less than array length (1)", () => {
            const a = [0, 1, 2]
            const subsetCount = 2
            const expected = [
                [0, 1], [1, 0],
                [0, 2], [2, 0],
                [1, 2], [2, 1]
            ]
            const actual = getRndSubset(a, subsetCount)
            expect(actual).to.deep.be.oneOf(expected)
        })
        it("should pass when subset count is less than array length (2)", () => {
            const a = [0, 1, 2]
            const subsetCount = 1
            const expected = [
                [0], [1], [2]
            ]
            const actual = getRndSubset(a, subsetCount)
            expect(actual).to.deep.be.oneOf(expected)
        })
        it("should pass when subset count is greater than array length (1)", () => {
            const a = [0, 1]
            const subsetCount = 3
            const expected = [
                [0, 1, 0], [1, 0, 1]
            ]
            const actual = getRndSubset(a, subsetCount)
            expect(actual).to.deep.be.oneOf(expected)
        })
        it("should pass when subset count is greater than array length (2)", () => {
            const a = [10]
            const subsetCount = 4
            const expected = [10, 10, 10, 10]
            const actual = getRndSubset(a, subsetCount)
            assert.deepEqual(actual, expected)
        })
    })
})