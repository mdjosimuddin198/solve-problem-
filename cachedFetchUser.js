const createApiCache = (fetchFn, ttl) => {
  const cache = new Map();

  return async (...args) => {
    const key = JSON.stringify(args);
    const now = Date.now();

    if (cache.has(key)) {
      const { data, time } = cache.get(key);

      if (now - time < ttl) {
        return data; // return cached data
      }
    }

    const data = await fetchFn(...args);
    cache.set(key, { data, time: now });
    return data;
  };
};

const fetchUser = async (id) => {
  console.log("Fetching from API...");
  return { id, name: "User " + id };
};

const cachedFetchUser = createApiCache(fetchUser, 3000);

await cachedFetchUser(1); // API call
await cachedFetchUser(1); // cached
