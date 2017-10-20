const LRU = require("lru-cache");

module.exports = opts => {
  const cache = LRU(Object.assign({ max: 500, maxAge: 1000 * 60 * 60 }, opts));
  cache.try = (key, fn) => {
    let cached = cache.get(key);
    return cached
      ? Promise.resolve(cached)
      : fn(key).then(res => {
          cache.set(key, res);
          return res;
        });
  };
  return cache;
};
