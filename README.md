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
- arithmetic of small whole numbers by table lookup.
- arithmetic of whole numbers by non-positional numeral systems. Examples of such systems are the following two systems I first heard of from Prof N. J. Wildberger:
  - use of I as symbol for 1, and use of mutiple Is for every other number.
  - use of a simplified Roman numeral system, in which I stands for one, X for ten, C for hundred, and M for thousand. In canonical form, the symbols are listed in
    decreasing order of value, and each symbol occurs less than 10 times.
    - E.g. I for 1, IIII for 4, IIIIIIIII for 9, X for 10, XI for 11, XXXXIIIII for 45, XXXXX for 50, CII for 102, MXXXXIII for 1043
    - NB: use of this system may require circling times symbol of multiplication in order to differentiate multiplication operator from numeral for ten.
    - NB: use of this system will require teaching full roman numeral system later on, independently of arithmetic, ie for use as labels.
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
  - Austrian method, aka borrow and pay back - resembles the addition procedure, with ordering of operands and sum turned upside down. recasts subtraction digit by digit subtraction as, what should be added to second operand to obtain first operand. has advantage of being historically predominant in Europe prior from 16th to 20th centuries, and still predominant in Continental Europe. also has advantage of being more optimized than borrow and regroup. Although less intuitive than borrow and regroup, borrow and pay back has less messy borrowing by avoiding cascading trades. _Can replace method of borrow and regroup_.
  - Ancient Egyptian subtraction - has advantage of not depending on positional number system. It works by cancelling on both sides, and expanding higher token into tens of next smaller token if needed.
  - Method of complements - Like shopkeeper's method, method of complements omits borrowing and avoids the need for the student to know or remember that subtraction is not commutative. To make transitioning to optimized procedures easier, the following guidelines are recommended. Note that the method will work correctly without any of these steps. Also note that the complement of a number derives its number of digits from that of first operand rather than second operand.
    - prefer ten's complement method to nine's complement method. So in the end cancel the most significant digit in the addition result, which has to be 1, to obtain the final answer.
    - cancel out the common prefix of both operands. If no digits remain after this step, then it means the operands were equal and hence the final answer is zero.
    - cancel out all pairs of digits from first and second operands in the same position, if both digits have the same value. If no digits remain after this step, then it means the operands were equal and hence the final answer is zero.
    - if the first operand has only a single digit, perform subtraction directly and the result is the final answer.
    - any direct subtraction should be done in order of last to first digit of second operand.
    - populate an empty row in between the operands, consisting of 10 written out as X in the last position, and 9 in all other positions before computing ten's complement.
    - copy the first operand below the complement before performing addition, instead of performing addition directly with original copy of first operand. then make use of space below this copy for carries (this is in contrast to normal addition in which carries are written above rather than below first operand).
    - if second operand has fewer number of digits than the first operand, or if first digits of first and second operands differ, then make use of a mitigated complement in which first digit of string of nines used to compute complement, is replaced with one less than first digit of first operand. in this case cancel the first digit of the first operand, and only copy the remaining digits down for the addition step. Since there will not be a 1 in a new position outside of the positions in the first operand, the entire addition result is the final answer.
- Alternative/Precursor to long multiplication procedure of whole numbers
  - grid multiplication with full decomposition - i.e. with full decomposition of both multiplicand and multiplier. has advantage of more directly demonstrating distributive property of multiplication over addition compared to long multiplication procedure.
  - grid multiplication with partial decomposition method - i.e. in which only multiplicand is decomposed. has advantage of enabling a smoother transition to long multiplication procedure. _Can replace long multiplication procedure_.
  - Russian peasant multiplication, aka ancient Egyptian multiplication - has advantage of not depending on multiplication tables and not depending on positional number system, and rather depends only on doubling, halving, addition, and differentiating even numbers from odd numbers. It works as follows: Have table of 2 columns, and double in right column, but halve in the left column until it becomes 1 while dropping remainders. Then cross out rows with even numbers in the left column, and add up numbers in right column which have not been crossed. NB:
    - for division by 2 using positional number system, can use short division.
    - at any point that one knows what the product of a row is, one can just skip the doubling and halving and just write out the final row of 1 and the product.
- Alternative/Precursor to long division
  - short division - assumes divisor is a single digit. leverages positional numeral system.
  - Russian peasant division, aka ancient Egyptian division - has same advantages of Russian peasant multiplication. It works as follows: Have a division table, filled with products resulting from doubling divisor up to maximum product greater than or equal to the dividend. Then use repeated subtraction to identify subset of products whose sum is the dividend. NB:
    - can be seen as a kind of division by chunking which does not depend on or leverage positional number system.
    - for single digit divisors, skip peasant division in favour of a counterpart of short division for non-positional numeral systems. That counterpart is obtained by extending the short division performed during peasant multiplication, from division by 2 to division by single-digit divisors.
  - division by chunking (aka division by partial quotients method, "Big 7" method). NB:
    - Division by chunking may employ arbitrary contents or employ a specific kind of contents (e.g. first 5 multiples) for its division tables.
    - Peasant division and long division can be seen as variants of division by chunking which employ different contents of division tables (all powers of 2 which may be needed versus first 9 multiples).
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
