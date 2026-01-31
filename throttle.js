const throttle = (fn, delay) => {
  let lastCall = 0;

  return (...args) => {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
};

// demo
const fn = throttle(() => console.log("Run"), 1000);
fn();
fn();
fn();
