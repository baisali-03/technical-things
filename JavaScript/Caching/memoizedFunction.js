function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsy = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {}

  return num1 * num2;
};

const clumsyOutput = myMemoize(clumsy);

console.log("First Call");
console.log(clumsy(9467, 7649));
console.log("First Call");
console.log("Second Call");
console.log(clumsy(9467, 7649));
console.log("Second Call");
