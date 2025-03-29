module.exports = function fromBitmask(mask, mapping) {
    const result = [];

    for (let pos in mapping) {
        if ((mask >> pos) & 1) {
            result.push(mapping[pos]); // Directly use mapping[pos]
        }
    }

    return result;
};
