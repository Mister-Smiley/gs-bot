exports.formatNumber = (number) => {
    if (isNaN(number)) return NaN;
    let input = `${number}`;
    if (number < 1e4) return input;
    let out = [];
    while (input.length > 3) {
        out.push(input.substr(input.length - 3, input.length));
        input = input.substr(0, input.length - 3);
    }
    return `${input},${out.reverse().join(',')}`;
};