/* JavaScript implementation of Michael Baczynski's (www.polygonal.de) ActionScript Pseudorandom Number Generatior */

var PRNG = (function () {

    var _seed = 1;

    /**
     * sets seed based btween 0 and 0X7FFFFFFE
     */
    function setSeed(seed) {
        /* todo: algorytm zamieniający stringi na inty */
        if (seed <= 0 || seed >= 0X7FFFFFFE)
            throw 'Generated seed is not valid';
        else
            _seed = seed;
    }

    /**
     * generator:
     * new-value = (old-value * 16807) mod (2^31 - 1)
     */
    function gen() {
        return _seed = (_seed * 16807) % 2147483647;
    }

    /**
     * provides the next pseudorandom number
     * as an unsigned integer (31 bits)
     */
    function nextInt() {
        return gen();
    }

    /**
     * provides the next pseudorandom number
     * as an unsigned integer (31 bits) betweeen
     * a given range.
     */
    function nextIntRange(min, max) {
        min -= .4999;
        max += .4999;
        return Math.round(min + ((max - min) * nextDouble()));
    }

    /**
     * provides the next pseudorandom number
     * as a float between nearly 0 and nearly 1.0.
     */
    function nextDouble() {
        return (gen() / 2147483647);
    }

    /**
     * provides the next pseudorandom number
     * as a float between a given range.
     */
    function nextDoubleRange(min, max) {
        return min + ((max - min) * nextDouble());
    }

    return {
        setSeed: setSeed,
        nextInt: nextInt,
        nextIntRange: nextIntRange,
        nextDouble: nextDouble,
        nextDoubleRange, nextDoubleRange
    }
    
})();

module.exports = PRNG;