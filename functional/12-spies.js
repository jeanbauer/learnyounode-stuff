/* # Task

Override a specified method of an object with new functionality while still maintaining all of the old behaviour.

Create a spy that keeps track of how many times a function is called. */

const Spy = (target, method) => {
  const result = {count: 0};
  const fn = target[method];
  target[method] = () => {
  	result.count += 1;
  	return fn.apply(this, arguments);
  };
  return result;
};

module.exports = Spy;
