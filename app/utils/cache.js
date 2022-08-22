const LRU = require("lru-cache");
const options = {
  max: 500,

  maxSize: 5000,

  ttl: 1000 * 60 * 5,
  sizeCalculation: (value, key) => {
    return 1;
  },
  // return stale items before removing from cache?
  allowStale: false,

  updateAgeOnGet: false,
  updateAgeOnHas: false,
};

export const cache = new LRU(options);
