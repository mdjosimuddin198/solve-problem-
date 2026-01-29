const deepClone = (obj) => {
  if (obj === null || typeof obj !== "object") return obj;

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  const clone = {};
  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }

  return clone;
};

const a = { x: 1, y: { z: 2 }, arr: [1, 2, { k: 3 }] };
const b = deepClone(a);

b.y.z = 99;
b.arr[2].k = 500;

console.log("Original:", a);
console.log("Clone:", b);
