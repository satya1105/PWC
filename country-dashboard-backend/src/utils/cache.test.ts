import cache from '../../src/utils/cache';

describe('Cache Utility', () => {
    it('should set and get a value in cache', () => {
        cache.set('key', 'value');
        const result = cache.get('key');

        expect(result).toBe('value');
    });
});