**NB: This project has been archived, due to my discovery of historically demonstrated viable approaches to math study for school children. It is the discovery of (1) ancient Egyptian arithmetic, aka Russian peasant arithmetic (2) the medieval Quadrivium, and its teaching of Arithmetic and Euclidean/synthetic geometry as interconnected but separate disciplines; (3) Singapore math curriculum for primary school, with its Concrete-Pictorial-Abstract learning process, aka CPA approach; (4) former Russian math curriculum, based on A. P. Kiselev's books in the early 20th century for junior and senior secondary school, and its long-term teaching of Euclidean/synthetic geometry; (5) the unnecessary rewriting of the foundations of modern math (such as by the Bourbaki group from the early to middle of 20th century), from counting numbers and Euclidean/synthetic geometry to infinite set theory.**

Here modern math refers to math 
- after the acceptance of the Fourier series and its initial contradictions;
- after the 19th-century elevation of non-Euclidean geometries to the same level of truth as Euclidean geometry in describing and measuring space;
- after the creation of the category of transcendental numbers, which is such that its members are not required to be computable, or attached to synthetic geometry, or attached to previously known math functions.

Nevertheless this archive serves as reference for
- precursors to the optimized versions of the arithmetic procedures for large counting numbers.
- tables of factorisations
- notes on explaining addition and subtraction of counting numbers, fractions and integers
- notes on explaining multiplication and division of counting numbers, fractions and integers
- notes on decimal to fraction conversion
- notes on finding factors of whole numbers

# Early Algebra Highlighting Proposal

## What is Early Algebra?

Early algebra refers to arithmetic and the subset of algebra topics taught in primary and secondary schools. Strictly speaking, it excludes
- arithmetic of small whole numbers by manual counting.
- arithmetic of small whole numbers by table lookup.
- arithmetic of whole numbers by non-positional place value systems. For place value systems to use at this stage I adopt the following two systems I first heard of from Prof N. J. Wildberger:
  - use of I as symbol for 1, and use of mutiple Is for every other number.
  - use of a simplified Roman numeral system, in which I stands for one, X for ten, C for hundred, and M for thousand. In canonical form, the symbols are listed in 
  decreasing order of value, and each symbol occurs less than 10 times.
    - E.g. I for 1, IIII for 4, IIIIIIIII for 9, X for 10, XI for 11, XXXXIIIII for 45, XXXXX for 50, CII for 102, MXXXXIII for 1043
    - NB: use of this system may require circling times symbol of multiplication in order to differentiate multiplication operator from numeral for ten.
- the topics of simplification of algebraic expressions, generation of algebraic expressions and other susbsequent topics in algebra.

For teens and adults, this proposal permits the introduction of less optimal but more intuitive arithmetic procedures to the students. It also permits the presentation of the early algebra topics in a different arrangement from that for pre-teens, in order to better suit the challenges and opportunities presented by teens and adults.

## Goals

The goal of early algebra for students is proficiency in evaluation of algebraic expressions involving rational numbers.

For students who are teens or adults, there is an additional goal which is to be able to practice and become proficient in early algebra by themselves, with almost no supervision.

## Guidelines

- The proposal is based on the belief in the sufficiency of existing primary school and secondary school topics for teaching early algebra.
- The proposal recognizes that it is school authorities who have the final decision to allow alternatives to the standard procedures, which differ from what teachers expect of students in a given locality, to show up on answer sheets.

## Arithmetic Topics

The following activities are assumed to constitute arithmetic for rational numbers as taught in school or online:

- Decimal number system and its positional nature.
- Addition
- Subtraction
- Multiplication with counting number multiplier
- Division
- Fractions
- *of* operator, for taking fractions of quantities
- Ratios
- Divisibility and Factorization
- Powers and Roots
- Comparison and Number Line

Note that negative rational numbers, decimal numbers and evaluation of arithmetic expressions are treated under algebra, following lead of Singapore math curriculum. Also multiplication which covers fraction multipliers is postponed to algebra, and *of* operator takes its place in the meantime in arithmetic.

The arithmetic parts of early algebra proposal for adults seek to leverage reference materials (capable of being memorized in school settings), to quickly increase confidence in the study of arithmetic. For this reason the arithmetic parts is recorded in the form of tables, worked examples, formulas, pictorial demonstrations of arithmetic procedures, multi-choice questions, and exercises with detailed solutions. Some of these parts are as follows:

### Rational Number Categorizations

Early algebra proposal for adults depends on using formulas to perform arithmetic operations whenever possible. And these formulas depend on the perspective taken of the operands involved. Therefore the proposal requires making students aware that

- numbers come in kinds or types, e.g. whole numbers, non-whole numbers, integers, non-integers, positive numbers, negative numbers.
- numbers have parts, e.g. sign, magnitude, numerator, denominator.
- numbers can be presented in different formats, e.g. common fraction, mixed fraction, decimal expansion, percentages, standard form.

### Alternative Arithmetic Procedures

NB: can serve as precursors and/or crosschecking avenues to the ones approved in school, given that the school procedures are often faster.

- Alternative/Precursor to standard addition procedure
  - Variant of partial sums method:  Align operands on left digit, and sum up pairs of digits in columns into first answer row without bothering about carries yet. 
    - NB: instead of one answer row, can use 3 answer rows. To each sum append a unit indicating place value, where the units are symbols from the roman numeral system: I for ones, X for tens, C for hundreds and M for thousands. For other columns like place of ten thousands leave off appending. Then starting from right to left, use second answer row to save results of adding incoming carry value to column in first answer row. Then use third answer row to save result left behind after removing outgoing carry value.
- Alternative/Precursor to standard subtraction procedure of whole numbers based on borrowing
  - Austrian method - has advantage of resembling the addition procedure, with ordering of operands and sum turned upside down.
  - Singapore Math method - uses Constant Difference strategy to make second operand a single digit followed by zeros, by adding equal amounts (also in the form of a single digit followed by zeros) to both operands. Like shopkeeper's method, it avoids the need for the student to know or remember that subtraction is not commutative, and it completely avoids the step of borrowing or carrying. Instead, both only require the student to know how to compute absolute differences of operands which are small (ie less than 20), and how to compute additions and comparisons for large numbers.
  - Ancient Egyptian subtraction - has advantage of not depending on positional number system. It works by cancelling on both sides, and expanding higher token into tens of next smaller token if needed.
  - Variation of Tens' complement method: Idea is to introduce a power of ten whose zero count is one less than the number of digits in the first operand, and then add this power in the beginning, and subtract it in the end. Begin by creating a malformed number whose most significant digit is the same as that of the first operand, whose last digit is 10 (this is what makes the number malformed), and whose other digits in between first and last positions are nines. Can append units of I, X, C and M to the digits in the last 4 positions of the malformed number. Then create another number which is a truncation of the first operand which preserves all but the most significant digit. The malformed number and the truncated number represent the result of adding the power of ten to the first operand. So after creating these two numbers, perform the first calculation by subtracting the second operand from the malformed number. Then the second calculation is to add the result from the first calculation to the truncated number. Then the final calcuation is to subtract the power of ten determined in the beginning from the result of the second calculation.
- Alternative/Precursor to long multiplication procedure of whole numbers
  - Variant of partial sums method - This variant requires one operand to be a single digit, and assumes it will be used with grid multiplication with partial decomposition mentioned below. And it works just like partial sums method of addition.
    - NB: this method is intentionally called "partial sums" rather than "partial products", to indicate its exact identification with the partial sums method of addition. And also partial products have come to mean grid multiplication in which addition of partial products is done explicitly as a separate step. But in this method, the partial products are added implicitly via the propagation of carries as done in addition algorithms.
  - grid multiplication - i.e. with full decomposition of both multiplicand and multiplier. has advantage of more directly demonstrating distributive property of multiplication over addition compared to long multiplication procedure.
  - grid multiplication with partial decomposition method - i.e. in which only multiplicand is decomposed. has advantage of enabling a smoother transition to long multiplication procedure.
  - Russian peasant multiplication, aka ancient Egyptian multiplication - has advantage of not depending on multiplication tables and not depending on positional number system, and rather depends only on doubling, halving, addition, and differentiating even numbers from odd numbers. It works as follows: Have table of 2 columns, and double in right column, but halve in the left column until it becomes 1 while dropping remainders. Then cross out rows with even numbers in the left column, and add up numbers in right column which have not been crossed.
- Alternative/Precursor to long division
  - short division
  - Russian peasant division, aka ancient Egyptian division - has same advantages of Russian peasant multiplication. Also, it shows connection between multiplication and division, by recasting division as: by how much should the divisor be multiplied to obtain the dividend? It works as follows: Have a doubling table, filled with products resulting from doubling divisor up to maximum product greater than or equal to the dividend. Then use repeated subtraction to identify subset of products whose sum is the dividend.
    - NB: can be seen as a kind of division by chunking which does not depend on or leverage positional number system.
  - division by chunking (aka division by partial quotients method, "Big 7" method)
    - NB: can be seen as a kind of Russian peasant division which leverages positional number system and multiplication tables to obtain a faster algorithm.
  - custom conversion of fraction to decimal. It works as follows: by repeated multiplication of mixed/proper fraction by 10, until either there is no proper fraction in multiplication result (in which case decimal expansion terminates), or the proper fraction in the multiplication result is the same as one of the mixed/proper fractions being multiplied by 10 (in which case decimal expansion will repeat indefinitely).
  - NB: above two division methods of Big 7 and times 10, will work even for positive fractions and positive decimals.


## Algebra Topics

- justification for any unproven arithmetic procedures and rules, following lead of Kiselev's Arithmetic.
- the optimized versions of the arithmetic procedures for large counting numbers.
- swapping "of" operator with overloaded meaning of multiplication which covers fraction and negative multipliers. And use bare times symbol and retire use of circled times symbol for multiplication.
- standard formulas for multiplication and division of fractions - i.e. if they were skipped in favour of the more intutive but less efficient alternatives earlier on.
- Divisibility Rules and Prime Factorization
- developing proficiency in arithmetic of integers and rational numbers involving negative numbers.
- Conversion of positive fractions from and to decimal expansions
- Conversion of positive fractions and decimal expansions to rounded decimal expansions
- Conversion of fractions and decimal expansions from and to percentages
- expression evaluation (aka "substitution") mainly involving only the four basic arithmetic operations
  - includes drilling in convention of concatenation for multiplication
  - can include powers, roots, trigonometry and logarithms
- equation solving involving mainly linear equations
  - introduce guess and check as a last resort strategy
  - can include quadratic equations, and simultaneous equations in two variables
  - can introduce precursor to quadratic expression factorization and quadratic equation solving, which is finding two integers which add up to a given value, and which have another given value as their product.

The climax of the algebra part of early algebra proposal is algebraic expression evaluation and equation solving.
