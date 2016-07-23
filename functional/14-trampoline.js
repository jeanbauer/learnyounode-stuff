const repeat = (operation, num) => {
  if (num <= 0) return;
  return () => {
    operation();
    return repeat(operation, --num);
  }
}

function trampoline(fn) {
  while (fn && typeof fn === 'function') fn = fn();
  return fn;
}

module.exports = (operation, num) => trampoline(() => repeat(operation, num));
