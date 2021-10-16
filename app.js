var memoize = require("memoizee");

function kvadrat(x){
    return x*x;
}

const memoized = memoize(kvadrat);
console.log(memoized(5));
console.log(memoized(5)); //Ovde uzima iz memorije