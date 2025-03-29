module.exports = function setBit(num, pos) {
    return num | (1 << pos);
};
