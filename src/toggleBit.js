module.exports = function toggleBit(num, pos) {
    return num ^ (1 << pos);
};
