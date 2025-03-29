module.exports = function bitwiseSubset(mask1, mask2) {
    return (mask1 & mask2) === mask1;
};
