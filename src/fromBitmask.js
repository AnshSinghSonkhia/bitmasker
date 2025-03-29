module.exports = function fromBitmask(mask, mapping) {
    let result = [];
    Object.keys(mapping).forEach(key => {
        if (mask & (1 << mapping[key])) {
            result.push(key);
        }
    });
    return result;
};
