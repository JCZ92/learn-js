function foo(sum, x, y) {
 return sum(x,y);
}

function sum(a,b) {
    if (b === undefined) return a;
 return a + b;
}

console.log(foo(sum,2));
