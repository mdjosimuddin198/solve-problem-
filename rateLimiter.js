//  Problem Recap
// একটা function বানাতে হবে rateLimit(fn, limit, time)
// নির্দিষ্ট time (ms) এর মধ্যে
// limit বারের বেশি call হলে function execute হবে না
// real API protection / abuse prevention logic

const rateLimit = (fn, limit, time) => {
  let calls = [];

  return (...args) => {
    const now = Date.now();

    // time window এর বাইরে থাকা call remove
    calls = calls.filter((timestamp) => now - timestamp < time);

    if (calls.length >= limit) {
      console.log("Rate limit exceeded");
      return;
    }

    calls.push(now);
    fn(...args);
  };
};

const logMessage = (msg) => {
  console.log("Executed:", msg);
};

const limitedFn = rateLimit(logMessage, 2, 3000);

// allowed
limitedFn("Hello 1");
limitedFn("Hello 2");

// blocked
limitedFn("Hello 3");

// 3 second পরে আবার allowed হবে
setTimeout(() => {
  limitedFn("Hello after reset");
}, 3100);
