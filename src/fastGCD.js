module.exports = function fastGCD(a, b) {
    if (b === 0) return a;
    return fastGCD(b, a % b);
};
