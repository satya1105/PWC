import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour

export const setCache = (key: string, value: any) => {
  cache.set(key, value);
};

export const getCache = (key: string) => {
  return cache.get(key);
};