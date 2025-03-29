module.exports = function toBitmask(arr, mapping) {
    let bitmask = 0;
    arr.forEach(element => {
        if (mapping[element] !== undefined) {
            bitmask |= (1 << mapping[element]);
        }
    });
    return bitmask;
};
