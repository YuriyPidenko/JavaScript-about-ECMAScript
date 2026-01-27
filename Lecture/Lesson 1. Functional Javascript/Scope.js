const clousureFuction = () => {
    const cache = {};
    return (x) => {
        if (cache[x]) return cache[x];
        const result = x * x;
        cache[x] = result;
        return result;
    }
}


const chachedPow = clousureFuction();
chachedPow(2)
chachedPow(8)
chachedPow(2)
