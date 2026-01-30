// একটা ফাংশন লেখো debounce(fn, delay)
// function বারবার call হলেও
// delay শেষ না হওয়া পর্যন্ত execute হবে না
// last call টা execute হবে

const debounce = (fn, delay) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

// demo
const fn = debounce(() => console.log("Run"), 1000);
fn();
fn();
fn();
