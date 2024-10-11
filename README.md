# Early Algebra Curriculum Proposal

## Operational Definition of Early Algebra

Early algebra is a subset of topics in both arithmetic and algebra, which should be taught during the study of arithmetic, and definitely before the study of simplification of algebraic expressions, in order to better ensure success in the study of algebra in secondary school.

## Guidelines

- Due to lack of experimental validation by the proponents of this proposal, only existing primary school and secondary school topics are included.
- The proposal recognizes that it is school authorities who have the final decision to allow alternatives to the standard algorithms, which differ from what teachers expect of students in a given locality, and which will show up on answer sheets.
- The arithmetic portion of the early algebra proposal consists of counteracting development of misconceptions in algebra, and helping students to be able to learn on their own if necessary. The details are as follows:
  - exercises for which no solutions exist at the moment, to counteract development of misconceptions in algebra later on
  - exercises for which only inferior solutions exist at the moment in the form of trial and error, to counteract any misconceptions around cross checking. This is because cross checking is an activity that becomes
    far more important once the student leaves arithmetic study and enters advanced math study, starting with algebra.
  - training students in formula or function application once a definition is given with examples. This training has two goals:
     - serves to counteract misconception in algebra (and even arithmetic involving fractions and negative numbers) that math is always intuitive
     - makes it possible to present arithmetic algorithms to students in the language of formula application.
  - helping students to be responsible for memorization and proficiency in math
  - summary of arithmetic algorithms and tables which can serve as a reference for a teenager to use to solve exercises on his own, ie during a stage when he is not practising for memorization and proficiency.
  - fallback arithmetic algorithms that students can be introduced to if necessary (and if permitted by school authorities).
  - exercises which are designed in such a way that a teenager can teach himself with them, without having to expose his embarassments and failures in math to the teacher and others.
    E.g. multiple choice questions, exercises with hints.

## Arithmetic Activities

The following activities are assumed to constitute arithmetic for rational numbers as taught in school:

- Addition
- Subtraction
- Multiplication
- Division
- Exponentiation involving counting number exponents
- Comparison
- Conversion of fractions from and to decimal expansions
- Conversion of fractions and decimal expansions to rounded decimal expansions
- Developing proficiency in arithmetic of multidigit whole numbers
- Developing proficiency in simplification of fractions using divisibility rules

The remainder of this section are arithmetic parts of early algebra proposal.

Exercises Exposing Misconceptions
- Subtraction
  - asking questions in which result can be negative, and accepting "undefined", "unexpected number", "negative",
    or negative sign as valid answers, to show that subtraction is not commutative even before teaching negative numbers.
- Division
  - asking questions in which there is division by zero and division which yields zero, and accepting "undefined" as possible result.
  - asking questions in which quotient can be zero, to show that division is not commutative even before teaching fractions.
- Exposing students to calculations involving number 0 in operands or answers, before teaching fractions and negative numbers.
- Requiring students to master calculations involving number 10 when used in calculations other than as the first operand of subtraction and division, at all levels of arithmetic study.

Fallback algorithms:
- Subtraction of whole numbers
  - subtraction by solving addition equation.
- Multiplication of whole numbers
  - multiplication by grid method (aka grid multiplication).
- Division of whole numbers by algorithms other than long division which directly solve the division algorithm equation.
  - by trial and error: keep multiplying divisor by educated guesses, until a guess is found which gives a nonnegative remainder less than the divisor.
    One benefit of being aware of this algorithm is that, it is always present as a step in the other more efficient algorithms for division.
  - division by chunking (aka division by partial quotients method).
- Conversion of nonnegative fractions from and to terminating decimal expansions by multiplication instead of long division
  - ie keep multiplying top and down by 2 or 5 if denominator is not a power of 10 and its last non-zero digit is 5 or even number respectively,
    until denominator becomes a power of 10 to lead to the desired terminating decimal expansion,
    or until last non-zero digit in denominator is neither 5 nor even number, which indicates that decimal expansion will not terminate.
- Conversion of fractions to rounded decimal expansions without long division
  - ie given a number of decimal places to round to, say 3 decimal places, multiply the fraction by a multiple of 10 which is 1 followed by more than 3 zeros (e.g. 10,000), and then convert to mixed fraction.
    Discard the fractional part, and divide the whole number part of the mixed fraction by the multiple of 10 used (10,000 in this example), and then determine the digits making up the rounded decimal expansion.

Formulas or Functions to be used for training students in function application are listed next. Note that these functions have been
selected to directly be of benefit in the study of algebra.
- Addition of rational numbers: addition(a/b, c/d) = a/b + c/d = (ad + bc)/bd
- Subtraction of rational numbers: subtraction(a/b, c/d) = a/b - c/d = (ad - bc)/bd
- Multiplication of rational numbers: multiplication(a/b, c/d) = a/b * c/d = ac/bd
- Division of rational numbers: division(a/b, c/d) = (a/b) / (c/d) = ad/bc
- Absolute value: digits(a) = |a| = { (-a) if a is negative; otherwise a }
- Absolute value: digits(a+b) = |a+b| = { |a|+|b| if a and b have the same sign; |a|-|b| if |a| is greater than |b|; otherwise |b| - |a| }
- Absolute value: digits(a-b) = |a-b| = |a + (-b)|
- Signum function: sign(a) = { '+' if a is postive; '-' if a is negative; otherwise '0' }
- Signum function: sign(a+b) = { sign(a) if a and b have the same sign; sign(a) if |a| is greater than |b|; otherwise sign(b) }
- Signum function: sign(a-b) = sign(a + (-b))
- Maximum function: maximum(a, b) = { a if a is greater than b; otherwise b }
- Minimum function: minimum(a, b) = { a if a is lesser than b; otherwise b }
- Square function: square(a) = a^2 = a * a
- Cube function: cube(a) = a^3 = a * a * a

Exercises Leveraging Technology
- Comparison
  - predicting whether result of an arithmetic operation is negative or not
  - predicting the result of comparing magnitudes of operands with magnitude of result of an arithmetic operation.

## Algebra Activities

Each algebra activity to be listed here can be characterized by

- whether or not it is a word problem
- whether or not it supplies multiple choices out of which correct answer must be chosen.
- the kind of response or result expected: a rational number, an expression or an equation.

Algebra activities which are identified as useful for early algebra education are:

- expression evaluation (aka "substitution") involving only the four basic arithmetic operators (+, -, &#x00D7;, &#x00F7;)
  - includes focus on drilling in convention of concatenation for multiplication
  - NB: substitution exercises in popular math text books can also get us equation solving activities using guess and check (with possible answers of objective tests as guesses)
- expression evaluation involving functions with verbose names which map to the four basic arithmetic operators, squares and cubes.
- expression evaluation involving powers, roots, exponents and logarithmic (common and natural log) and trigonometry (sin, cos and tan) functions
- equation solving, mainly linear equations
  - includes univariate polynomial equations, and simultaneous equations in multiple variables
  - with guess and check strategy included (using possible answers of objective tests as guesses, can have a "None of the above" choice included)
  - NB: equation solving exercises in popular math text books can also get us expression evaluation activities
- equation/expression generation
  - Can get exercises from expression evaluation exercises, by putting forward the expression evaluation steps (each involving just one operation at a time) as the question, and asking for the expression itself from multiple choices. Can remove need to employ intermediate variables by ensuring that the expression arguments and intermediate results are unique.
- equation/expression decomposition
  - Can get exercises from expression evaluation exercises, by putting forward the expression as the question, and putting forward choices in which each is a last operation equals a final answer, and then asking for the correct choice. Can make the expression complex if there's only one choice with the correct last operation. And can include multiple correct last operations and multiple correct final answers if the last operation can be in multiple positions of addition, subtraction or multiplication.
  - NB: the rationale for the existence of this exercise is that, in practice during algebraic expression simplification and equation solving, identifying the last (or "root") step rather than the first step (as suggested by BODMAS) is more important for flexibility in breaking down expressions, and even evaluating multiple parts concurrently.
- math applications to real world of student
  - aka "word problems"
  - can make use of https://www.transum.org

The early algebra activities identified address the following needs as well:

- questions requiring knowledge of associativity of addition but not subtraction - using expression evaluation.
- questions requiring knowledge of distributivity of multiplication over addition - using multiplication questions and demonstrating how any multiplication algorithm is an application of the distributivity property, because it leverages memory of tables to reduce the number of repeated additions suggested by the involvement of a counting number multiplier.

