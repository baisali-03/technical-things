const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const btnCount = document.querySelector(".increment_count");

var pressCount = 0;
var triggerCount = 0;

const myThrottle = (cb, d) => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if(now - last < d) return;
    last = now;
    return cb(...args)
  }
};

var throttled = myThrottle(() => {
 triggerCount +=1;
 btnCount.innerHTML = triggerCount;
}, 1000);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressCount;
  throttled();
});
