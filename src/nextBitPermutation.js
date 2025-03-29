module.exports = function nextBitPermutation(num) {
    if (num === 0) return 0;
    
    let smallest = num & -num; // Rightmost set bit
    let ripple = num + smallest; // Add smallest to get the ripple effect
    let newSmallest = ripple & -ripple; // Next rightmost set bit
    let onesToMove = (newSmallest / smallest) >> 1; // Adjust ones

    return ripple | (onesToMove - 1);
};
