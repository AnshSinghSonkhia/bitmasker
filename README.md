# bitmasker

bitmasker is a high-performance JavaScript utility library that simplifies bitmasking operations for combinatorial problems, permissions handling, and mathematical optimizations. It provides functions for setting, toggling, and querying bits, generating subsets and combinations, performing bitwise set operations, and optimizing common bitwise computations. Whether you're working with dynamic programming, combinatorics, or low-level optimizations, bitmasker makes it easier and faster to handle bit-level manipulations in JavaScript.

[![npm](https://img.shields.io/npm/v/bitmasker.svg)](https://www.npmjs.com/package/bitmasker)  [![License](https://img.shields.io/npm/l/bitmasker.svg)](LICENSE) 

# 📦 Installation

Install via npm

```sh
npm i bitmasker
```

Install via yarn

```sh
yarn add bitmasker
```

# Usage

```js
const bm = require('bitmasker');

// Bit Manipulation Basics
console.log(bm.setBit(5, 1));        // 7 (0b101 → 0b111)
console.log(bm.clearBit(7, 1));      // 5 (0b111 → 0b101)
console.log(bm.toggleBit(5, 2));     // 1 (0b101 → 0b001)
console.log(bm.checkBit(5, 2));      // true (Bit at position 2 is set)

// Counting & Identifying Bits
console.log(bm.countSetBits(13));    // 3 (0b1101 → 3 ones)
console.log(bm.highestSetBit(18));   // 4 (0b10010 → highest set bit at pos 4)
console.log(bm.lowestSetBit(18));    // 1 (0b10010 → lowest set bit at pos 1)

// Power of Two Check
console.log(bm.isPowerOfTwo(16));    // true (16 is a power of 2)
console.log(bm.isPowerOfTwo(18));    // false (18 is not a power of 2)

console.log(bm.logBase2(16)); // 4  (2^4 = 16)
console.log(bm.hammingWeight(5)); // 2  (0b101 has 2 ones)
console.log(bm.popCountParallel(15)); // 4  (0b1111 has 4 ones)

// Subset & Combination Generation
console.log(bm.generateSubsets(3));  // [[], [0], [1], [2], [0,1], [0,2], [1,2], [0,1,2]]
console.log(bm.generateCombinations(4, 2)); // [[0,1], [0,2], [0,3], [1,2], [1,3], [2,3]]

// Bitmask Operations
const mapping = { a: 0, b: 1, c: 2 };

console.log(bm.toBitmask(['a', 'c'], mapping)); // 5  (0b101)
console.log(bm.fromBitmask(5, { 0: 'a', 1: 'b', 2: 'c' })); // ['a', 'c']

// Bit Manipulation
console.log(bm.binaryString(5)); // "00000000000000000000000000000101"
console.log(bm.nextBitPermutation(6)); // 9  (0b0110 -> 0b1001)
console.log(bm.grayCode(2)); // [0, 1, 3, 2]

// Bitwise Set Operations
console.log(bm.bitwiseUnion(5, 3)); // 7  (0b101 | 0b011)
console.log(bm.bitwiseIntersection(5, 3)); // 1  (0b101 & 0b011)
console.log(bm.bitwiseDifference(5, 3)); // 6  (0b101 ^ 0b011)
console.log(bm.bitwiseSubset(3, 7)); // true  (0b011 is a subset of 0b111)

// Math Using Bitwise
console.log(bm.fastModularExponentiation(2, 10, 1000)); // 24 (2^10 % 1000)
console.log(bm.fastGCD(48, 18)); // 6  (GCD of 48 and 18)

// Next Bit Permutation (Lexicographical Order)
console.log(bm.nextBitPermutation(8));  // 16 (0b1000 → 0b10000)
console.log(bm.nextBitPermutation(10)); // 12 (0b1010 → 0b1100)
```

# 📖 API Reference - Bitmasker
| Function                        | Description                                                                 | Example                                                                 |
|---------------------------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------|
| `setBit(num, pos)`              | Sets the bit at `pos`.                                                     | `setBit(5, 1)` → `7` (0b101 → 0b111)                                   |
| `clearBit(num, pos)`            | Clears (sets to 0) the bit at `pos`.                                       | `clearBit(7, 1)` → `5` (0b111 → 0b101)                                 |
| `toggleBit(num, pos)`           | Flips (toggles) the bit at `pos`.                                          | `toggleBit(5, 0)` → `4` (0b101 → 0b100)                                |
| `checkBit(num, pos)`            | Returns `true` if the bit at `pos` is set.                                 | `checkBit(5, 2)` → `true` (0b101)                                      |
| `countSetBits(num)`             | Counts the number of `1`s in the binary representation.                    | `countSetBits(15)` → `4` (0b1111)                                      |
| `highestSetBit(num)`            | Returns the position of the highest set bit.                              | `highestSetBit(18)` → `4` (0b10010)                                    |
| `lowestSetBit(num)`             | Returns the position of the lowest set bit.                               | `lowestSetBit(18)` → `1` (0b10010)                                     |
| `isPowerOfTwo(num)`             | Checks if `num` is a power of two.                                         | `isPowerOfTwo(16)` → `true`                                            |
| `logBase2(num)`                 | Computes the integer log base 2 of `num`.                                 | `logBase2(16)` → `4`                                                   |
| `hammingWeight(num)`            | Counts the differing bits from `0`.                                       | `hammingWeight(5)` → `2` (0b101)                                       |
| `popCountParallel(num)`         | Optimized count of set bits using parallel bitwise operations.             | `popCountParallel(15)` → `4`                                           |
| `generateSubsets(n)`            | Generates all subsets of size `n`.                                        | `generateSubsets(3)` → `[[], [0], [1], [0,1], [2], [0,2], [1,2], [0,1,2]]` |
| `generateCombinations(n, k)`    | Generates all `k`-size subsets using bitmasking.                          | `generateCombinations(4, 2)` → `[[0,1], [0,2], [0,3], [1,2], [1,3], [2,3]]` |
| `toBitmask(arr, mapping)`       | Converts an array into a bitmask using a mapping.                         | `toBitmask(['a', 'c'], { a: 0, b: 1, c: 2 })` → `5` (0b101)            |
| `fromBitmask(mask, mapping)`    | Converts a bitmask back to an array using a mapping.                      | `fromBitmask(5, { 0: 'a', 1: 'b', 2: 'c' })` → `['a', 'c']`            |
| `binaryString(num, bits=32)`    | Returns a binary string representation.                                   | `binaryString(5)` → `"00000000000000000000000000000101"`               |
| `nextBitPermutation(num)`       | Returns the next lexicographical permutation of the bitmask.              | `nextBitPermutation(6)` → `9` (0b0110 → 0b1001)                        |
| `grayCode(n)`                   | Generates the Gray code sequence for `n` bits.                            | `grayCode(2)` → `[0, 1, 3, 2]`                                         |
| `bitwiseUnion(mask1, mask2)`    | Returns the union (OR) of two bitmasks.                                   | `bitwiseUnion(5, 3)` → `7` (0b101 | 0b011)                             |
| `bitwiseIntersection(mask1, mask2)` | Returns the intersection (AND) of two bitmasks.                        | `bitwiseIntersection(5, 3)` → `1` (0b101 & 0b011)                      |
| `bitwiseDifference(mask1, mask2)` | Returns the difference (XOR) of two bitmasks.                           | `bitwiseDifference(5, 3)` → `6` (0b101 ^ 0b011)                        |
| `bitwiseSubset(mask1, mask2)`   | Returns `true` if `mask1` is a subset of `mask2`.                         | `bitwiseSubset(3, 7)` → `true`                                         |
| `fastModularExponentiation(base, exp, mod)` | Computes `(base^exp) % mod` using bitwise operations.         | `fastModularExponentiation(2, 10, 1000)` → `24`                        |
| `fastGCD(a, b)`                 | Computes GCD using bitwise shifts.                                        | `fastGCD(48, 18)` → `6`                                                |
