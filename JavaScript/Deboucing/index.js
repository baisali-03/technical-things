let counter = 0;
function hello() {
  console.log("Event Call : " + counter++);
}
function Debounce(func, d) {
  let timer;
  return function (...args) {
    if (timer) {
      return clearTimeout(timer);
    }
    setTimeout(() => {
      func();
    }, d);
  };
}
const DFunc = Debounce(hello, 1000);
