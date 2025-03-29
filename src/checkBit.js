module.exports = function checkBit(num, pos) {
    return (num & (1 << pos)) !== 0;
};
