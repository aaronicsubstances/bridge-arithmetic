# Early Algebra Curriculum Proposal

## Operational Definition of Early Algebra

Early algebra is a subset of topics in both arithmetic and algebra, which should be taught during the study of arithmetic, and definitely before the study of simplification of algebraic expressions, in order to better ensure success in the study of algebra in secondary school.

## Guidelines

- Due to lack of experimental validation by the proponents of this proposal, only existing primary school and secondary school topics are included.
- The proposal recognizes that it is school authorities who have the final decision to allow alternatives to the standard algorithms, which differ from what teachers expect of students in a given locality, and which will show up on answer sheets.
- The arithmetic portion of the early algebra proposal consists of counteracting development of misconceptions in algebra, and helping students to be able to learn on their own if necessary. The details are as follows:
  - exercises for which no solutions or only inferior solutions exist at the moment, to counteract development of misconceptions in algebra later on.
  - making students aware that numbers come in kinds or types (e.g. whole numbers, fractions, signed numbers), that numbers have parts (e.g. sign, magnitude, numerator, denominator), and that numbers can be presented in different formats (e.g. common fraction, mixed fraction, decimal expansion).
  - helping students to be responsible for memorization and proficiency in math
  - summary of arithmetic algorithms and tables which can serve as a reference for a teenager to use to solve exercises on his own, ie during a stage when he is not practising for memorization and proficiency.
  - fallback arithmetic algorithms that students can be introduced to if necessary (and if permitted by school authorities).
  - exercises which are designed in such a way that a teenager can teach himself with them, without having to expose his embarassments and failures in math to the teacher and others.
    E.g. exercises with detailed solutions, multiple choice questions, exercises with hints.

## Arithmetic Activities

The following activities are assumed to constitute arithmetic for rational numbers as taught in school or online (e.g. https://www.transum.org):

- Addition
- Subtraction
- Multiplication
- Division
- Exponentiation involving whole number exponents
- Comparison
- Conversion of fractions from and to decimal expansions
- Conversion of fractions and decimal expansions to rounded decimal expansions
- Developing proficiency in arithmetic of whole numbers
- Developing proficiency in simplification of fractions

The remainder of this section are arithmetic parts of early algebra proposal.

Exercises Exposing Misconceptions

- Subtraction
  - asking questions in which result can be negative, and accepting "undefined", "unexpected number", "negative",
    or negative sign as valid answers, to show that subtraction is not commutative even before teaching negative numbers.
- Division
  - asking questions in which there is division by zero and division which yields zero, and accepting "undefined" as possible result.
  - asking questions in which quotient can be zero, to show that division is not commutative before teaching fractions.
- Exposing students to calculations involving number 0 in operands or answers, before and after teaching fractions and negative numbers.

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

## Algebra Activities

Each algebra activity to be listed here can be characterized by

- whether or not it is a word problem
- whether or not it supplies multiple choices out of which correct answer must be chosen.
- the kind of response or result expected: a rational number, an expression or an equation.

Algebra activities which are identified as useful for early algebra education are:

- expression evaluation (aka "substitution") involving only the four basic arithmetic operators (+, -, &#x00D7;, &#x00F7;)
  - they end up demonstrating associativity of addition and multiplication
  - includes focus on drilling in convention of concatenation for multiplication
  - NB: substitution exercises in popular math text books can also get us equation solving activities using guess and check (with possible answers of objective tests as guesses)
- expression evaluation involving functions with verbose names which map to the four basic arithmetic operations, squares and cubes.
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
