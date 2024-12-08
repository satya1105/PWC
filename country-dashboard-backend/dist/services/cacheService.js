"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCache = exports.setCache = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
const cache = new node_cache_1.default({ stdTTL: 3600 }); // Cache for 1 hour
const setCache = (key, value) => {
    cache.set(key, value);
};
exports.setCache = setCache;
const getCache = (key) => {
    return cache.get(key);
};
exports.getCache = getCache;
