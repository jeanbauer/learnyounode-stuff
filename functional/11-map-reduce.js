const arrayMap = (arr, fn) => arr.reduce((prev, curr) => {
    prev.push(fn.call(null, curr));
    return prev;
}, []);

module.exports = arrayMap
