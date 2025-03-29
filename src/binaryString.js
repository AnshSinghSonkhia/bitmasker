module.exports = function binaryString(num, bits = 32) {
    return num.toString(2).padStart(bits, '0');
};
