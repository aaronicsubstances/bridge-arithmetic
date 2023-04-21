# Early Algebra Curriculum Proposal

## Operational Definition of Early Algebra

Early algebra consists of topics pulled down from algebra and topics pulled up from arithmetic, which should be taught in between arithmetic and algebra in order to avoid most of the difficulties involved in the study of algebra.

## Guidelines

  - Due to lack of experimental validation, only existing primary school and secondary school topics are included.
  - The decision to introduce alternatives to the standard algorithms which will show up on answer sheets is beyond the scope of early algebra.
  - Early algebra can consist of curricular activities that are done outside of answer sheets, such as calculations done with abacus, as long as those activities are connected to the standard algorithms and can help to visualize the algorithms on answer sheets.
  - The arithmetic portion of early algebra consists of
     - demarcating arithmetic topics whose study can be postponed until early algebra study is complete.
     - curricular activities involving touch and movement, and demonstrating the standard algorithms for addition, subtraction and their repetition counterparts.

## Arithmetic Activities

The following activities are meant for rational numbers:
  - Addition
  - Subtraction
  - Multiplication
  - Division
  - Comparison
  - Conversion of fractions from and to decimal expansions
  - Developing proficiency in arithmetic of single digit whole numbers
  - Developing proficiency in simplification of fractions

If necessary, can split the activities above into two, use arithmetic to teach one part, and use custom operators and functions to teach the rest as part of algebra activities in the next section.

The activities which can still be taught with arithmetic are:
  - Addition of nonnegative rational numbers
  - Subtraction of nonnegative rational numbers (negative results may be permitted).
  - Multiplication of whole numbers
  - Division of whole numbers by trial and error (results other than whole numbers may be permitted)
     - Long division can be postponed, and/or can be replaced with division by chunking.
  - Comparison of nonnegative rational numbers
  - Conversion of nonnegative fractions from and to terminating decimal expansions
     - instead of long division, multiply top and down until denominator becomes a power of 10
  - Developing proficiency in arithmetic of single digit whole numbers
  - Developing proficiency in simplification of nonnegative fractions

The custom operators correspond to the same ones used in arithmetic:
<pre>
+, -, &#x00D7;, &#x00F7;
^ (for exponentiation but still with exponent raised)
> (ie greater-than sign)
< (ie less-than sign) 
</pre>
To differentiate these from the operators of the first half of arithmetic described above, all but the exponentiation operator are encircled.

## Algebra Activities

Each algebra activity to be listed here can be characterized by
  - whether or not it is a word problem
  - whether or not it supplies multiple choices out of which correct answer must be chosen.
  - the kind of response or result expected: a rational number, an expression or an equation.

Algebra activities which are identified as useful for early algebra education are (some overlap others):

  - expression evaluation
  - expression evaluation involving custom binary operators
  - expression evaluation involving custom functions
  - equation solving with guess and check
  - equation solving with balance model
  - equation generation
  - expression generation
  - expression decomposition - identify last operation and its equivalent custom function, and generate an equivalent expression apply the function and having the maximum possible number of arguments.
  - questions requiring knowledge of commuativity of addition and subtraction - using ordinary subtraction questions and accepting negative sign alone as valid answers.
  - questions requiring knowledge of associativity of addition and subtraction - using expression evaluation.
  - questions requiring knowledge of distributivity of multiplication over addition - using equation solving with balance model.
  - math applications to real world of student.

The custom functions (can present them as "formulas") to be developed are mostly those that are used in algebraic expressions:
  - exp, with exponent being a counting number more than 1.
  - square
  - cube
  - nth-root, with n being a counting number more than 1.
  - square root
  - cube root
  - real/math number comparison
  - real/math number addition
  - real/math number subtraction
  - real/math number multiplication
  - real/math number division
  - negation or negate
  - reciprocal
  - modulo or remainder
  - absolute value or magnitude
  - absolute difference
  - signum/sign - may not need an explicit definition
  - lcm - using method of creating sets of multiples rather than prime factorization.
  - resize - similar to "of" operator, as used in "3 of 4" or "half of 4".
  - frac

Some of the functions are defined as follows:

*real number comparision*: applies to two rational numbers. If two operands being compared are not equal, then
  - if both operands are nonnegative, then the operand with the larger magnitude is the larger one.
  - else if the operands have different signs, then the nonnegative operand is the larger one.
  - else if both operands are negative, then the operand with the smaller magnitude is the larger one.

*real number addition*: applies to two rational numbers.
  - Magnitude of answer is the sum or absolute difference of the magnitudes of the two operands if the operands have the same or different signs respectively.
  - Sign of answer is the sign of the number with the larger magnitude.

*real number subtraction*: applies to two rational numbers.
  - Answer is the same as *real number addition* of the first operand with the *negation* function applied to the second operand.

*real number multiplication*: applies to two or more rational numbers.
  - Magnitude of answer is the same as the *resize* function applied to the magnitudes of the operands.
  - Sign of answer is positive or negative if the number of operands with negative signs is even or odd respectively.

*real number division*: applies to two rational numbers.
  - Magnitude of answer is the same as the *frac* function applied to the magnitudes of the operands.
  - Sign of answer is positive or negative if operands have the same or different signs respectively.

*resize*: applies to two or more nonnegative rational numbers.
  - If operands are all whole numbers, then answer is same as *multiplication* of the operands.
  - Else answer is the result of applying the *frac* function.
     - The first operand is the result of applying the *resize* function recursively to the numerators of the original operands.
     - The second operand is the result of applying the *resize* function recursively to the denominators of the orignal operands.

*frac*: applies to two nonnegative rational numbers.
  - Answer is the fraction whose numerator is the first operand, and whose denominator is the second operand.
  - Usually answer needs to be simplified by cancellng out or multiplying numerator and denominator with the same number, and repeating as many times as necessary with the same number or a different one.
