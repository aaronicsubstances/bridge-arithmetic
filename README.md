**NB: This project has been archived, due to my discovery of historically demonstrated viable approaches to math study for school children. It is the discovery of (1) ancient Egyptian arithmetic, aka Russian peasant arithmetic (2) the medieval Quadrivium, and its teaching of Arithmetic and Euclidean/synthetic geometry as interconnected but separate disciplines; (3) Singapore math curriculum for primary school, with its Concrete-Pictorial-Abstract learning process, aka CPA approach; (4) former Russian math curriculum, based on A. P. Kiselev's books in the early 20th century for junior and senior secondary school, and its long-term teaching of Euclidean/synthetic geometry; (5) the backlash to the attempted rewriting of the foundations of modern math (such as by the Bourbaki group from the early to middle of 20th century), from counting numbers and Euclidean/synthetic geometry to infinite set theory.**

Here modern math refers to math

- after the acceptance of the Fourier series and its initial contradictions;
- after the 19th-century acceptance of non-Euclidean geometries as equally valid geometries as Euclidean geometry.
- after the creation of the category of transcendental numbers, which is such that its members are not required to be computable, or attached to synthetic geometry, or attached to previously known math functions.

Nevertheless this archive serves as reference for

- precursors to the optimized versions of the arithmetic procedures for large counting numbers and fractions.
- tables of factorisations
- notes on explaining addition, subtraction, multiplication and division of counting numbers, fractions and integers
- notes on decimal to fraction conversion
- notes on finding factors of whole numbers

# Early Algebra Highlighting Proposal

## What is Early Algebra?

Early algebra refers to arithmetic and the subset of algebra topics taught in primary and secondary schools. Strictly speaking, it excludes

- arithmetic of small whole numbers by manual counting.
- arithmetic of whole numbers represented by non-positional numeral systems. Examples of such systems are the following two systems I first heard of from Prof N. J. Wildberger:
  - use of I as symbol for 1, and use of mutiple Is for every other number.
  - use of a simplified Roman numeral system, in which I stands for one, X for ten, C for hundred, and M for thousand. In canonical form, the symbols are listed in
    decreasing order of value, and each symbol occurs less than 10 times.
    - E.g. I for 1, IIII for 4, IIIIIIIII for 9, X for 10, XI for 11, XXXXIIIII for 45, XXXXX for 50, CII for 102, MXXXXIII for 1043
    - NB: use of this system may require circling times symbol of multiplication in order to differentiate multiplication operator from numeral for ten.
    - NB: use of this system may require teaching full roman numeral system later on for completeness sake, but independently of arithmetic application, ie for use as labels.
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
- _of_ operator, for taking fractions of quantities
- Ratios
- Divisibility and Factorization
- Powers and Roots
- Comparison and Number Line

Note that negative rational numbers, decimal numbers and evaluation of arithmetic expressions are treated under algebra, following lead of Singapore math curriculum. Also multiplication which covers fraction multipliers is postponed to algebra, and _of_ operator takes its place in the meantime in arithmetic.

The arithmetic parts of early algebra proposal for adults seek to leverage reference materials (capable of being memorized in school settings), to quickly increase confidence in the study of arithmetic. For this reason the arithmetic parts is recorded in the form of tables, worked examples, formulas, pictorial demonstrations of arithmetic procedures, multi-choice questions, and exercises with detailed solutions. Some of these parts are as follows:

### Rational Number Categorizations

Early algebra proposal for adults depends on using formulas to perform arithmetic operations whenever possible. And these formulas depend on the perspective taken of the operands involved. Therefore the proposal requires making students aware that

- numbers come in kinds or types, e.g. whole numbers, non-whole numbers, integers, non-integers, positive numbers, negative numbers.
- numbers have parts, e.g. sign, magnitude, numerator, denominator.
- numbers can be presented in different formats, e.g. common fraction, mixed fraction, decimal expansion, percentages, standard form.

### Alternative Arithmetic Procedures

NB: can serve as precursors and/or crosschecking avenues to the ones approved in school, given that the school procedures are often faster.

- Alternative/Precursor to borrow and regroup procedure of whole numbers
  - Austrian method, aka borrow and pay back - resembles the addition procedure, with ordering of operands and sum turned upside down. recasts digit by digit subtraction as: what should be added to second operand to obtain first operand? has advantage of being historically predominant in Europe, UK included, from 16th century to mid-20th century, and still predominant in Continental Europe. also has advantage over borrow and regroup in avoiding cascading of trades. _Can replace method of borrow and regroup_.
  - Custom method based on transforming operands before applying a standard subtraction algorithm. Can be seen as variation of partial differences method in which negatives are not used. It works as follows: after stacking operands and right aligning them, perform digit by digit absolute difference computations. note that the computation here is being framed as absolute difference rather than subtraction, so as to postpone saying "i can't subtract". instead of one final result row, create two interim result rows. the upper one should contain zero in each position in which top digit is not greater; else it should store the result of the computation. similarly bottom interim result row should contain zero for each position in which bottom digit is not greater; else it should store the result of the computation. if bottom interim result is non zero, apply a standard subtraction algorithm to the interim result rows. The intended benefits are that
    - it is easier for students to see that subtracting a digit from a lesser one (always zero in the case of the transformed operands) cannot be done directly without borrowing.
    - it ensures that the largest number to subtract from is 10 rather than 18.
    - in the case of borrow and regroup, cascading of trades can be mitigated by simply observing that after borrowing source digit reduces by 1, intermediate digits get a 9, and target digit gets a 10; and leveraging this observation as a shortcut rule.
    - in the case of borrow and regroup, it simplfies the strategy of doing all borrowing before proceeding with rest of subtraction.
  - Ancient Egyptian subtraction - has advantage of not depending on positional number system. It works by cancelling on both sides, and expanding higher token into tens of next smaller token if needed.
- Alternative/Precursor to long multiplication procedure of whole numbers
  - grid multiplication with full decomposition - i.e. with full decomposition of both multiplicand and multiplier. has advantage of more directly demonstrating distributive property of multiplication over addition compared to long multiplication procedure.
  - grid multiplication with partial decomposition method - i.e. in which only multiplicand is decomposed. has advantage of enabling a smoother transition to long multiplication procedure. _Can replace long multiplication procedure_.
  - Russian peasant multiplication, aka ancient Egyptian multiplication - has advantage of not depending on multiplication tables and not depending on positional number system, and rather depends only on doubling, halving, addition, and differentiating even numbers from odd numbers. It works as follows: Have table of 2 columns, and double in right column, but halve in the left column until it becomes 1 while dropping remainders. Then mark out rows with odd numbers in the left column, and add up numbers in right column which have been marked. NB:
    - for division by 2 using positional number system, can use short division.
    - at any point that one knows what the product of a row is, one can just skip the doubling and halving and just write out the final row of 1 and the product.
- Alternative/Precursor to long division
  - short division - assumes divisor is a single digit. leverages positional numeral system.
  - Russian peasant division, aka ancient Egyptian division - has same advantages of Russian peasant multiplication. It works as follows: Have a division table, filled with products resulting from doubling divisor up to maximum product greater than or equal to the dividend. Then use repeated subtraction to identify subset of products whose sum is the dividend. NB:
    - can be seen as a kind of division by chunking which does not depend on or leverage positional number system.
    - for division by 1 and 2, skip peasant division in favour of the short division performed during peasant multiplication.
  - division by chunking (aka division by partial quotients method, "Big 7" method). NB:
    - Division by chunking may employ arbitrary contents or employ a specific kind of contents (e.g. first 5 multiples) for its division tables.
    - Peasant division and long division can be seen as variants of division by chunking which employ different contents of division tables (all powers of 2 which may be needed versus first 9 multiples). Long division also differs in being unforgiving if a chunk is selected for reducing the current remainder which is less than the maximum chunk possible.
  - custom conversion of fraction to decimal. It works as follows: by repeated multiplication of mixed/proper fraction by 10, until either there is no proper fraction in multiplication result (in which case decimal expansion terminates), or the proper fraction in the multiplication result is the same as one of the mixed/proper fractions being multiplied by 10 (in which case decimal expansion will repeat indefinitely).
  - NB: above two division methods of Big 7 and times 10, will work even for positive fractions and positive decimals.

## Algebra Topics

- justification for any unproven arithmetic procedures and rules, following lead of Kiselev's Arithmetic.
- the optimized versions of the arithmetic procedures for large counting numbers.
- swapping "of" operator with overloaded meaning of multiplication which covers fraction and negative multipliers. And use bare times symbol and retire use of circled times symbol for multiplication.
- the optimized versions of the arithmetic procedures for fractions.
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
