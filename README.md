# TypeScript Type Safety Issue: Implicit String and Number Addition

This repository demonstrates a type safety issue in TypeScript where string and number are added together without explicit type checking during compilation, leading to a runtime error.

The `bug.ts` file contains the buggy code, while `bugSolution.ts` provides a corrected version.

## Bug
The issue lies in the `add` function. Although the function is defined to accept two numbers and return a number, it doesn't explicitly prevent the addition of a string and a number.  TypeScript's type inference system, while robust, doesn't prevent such an operation from compiling, resulting in a runtime error because string and number concatenation will occur rather than numeric addition. 

## Solution
The `bugSolution.ts` demonstrates how to address this issue by enforcing stricter type checking using type guards or assertions.  A type guard explicitly checks if a variable is a specific type before proceeding with the operation. Type assertions, while more aggressive, can also be used if you are very sure about the type of your variable.