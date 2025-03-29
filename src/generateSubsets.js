module.exports = function generateSubsets(n) {
    let subsets = [];
    for (let i = 0; i < (1 << n); i++) {
        subsets.push(i.toString(2).padStart(n, '0'));
    }
    return subsets;
};
