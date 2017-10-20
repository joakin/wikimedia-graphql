const fetch = require("make-fetch-happen").defaults({
  cacheManager: "./http-cache"
});

module.exports = function(...args) {
  return fetch(...args).then(res => {
    console.log(`[${res.status}] ${args[0]}`);
    return res;
  });
};
