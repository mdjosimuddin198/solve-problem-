// Problem: Build a Frequency Map with Sorting

// একটা function লেখো topKFrequent(arr, k)
// শর্তগুলো:

// arr একটি array of numbers

// k = কয়টা most frequent element চাই

// element গুলো frequency অনুযায়ী descending order এ return করবে

// frequency same হলে smaller number আগে আসবে

const topKFrequent = (arr, k) => {
  const freqMap = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(freqMap)
    .map(Number)
    .sort((a, b) => {
      if (freqMap[b] === freqMap[a]) {
        return a - b;
      }
      return freqMap[b] - freqMap[a];
    })
    .slice(0, k);
};

const data = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4];
const result = topKFrequent(data, 2);

console.log(result);
// Output: [3, 1]
