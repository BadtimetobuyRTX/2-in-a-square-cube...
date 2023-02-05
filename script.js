function h(x, n) {
    if(n == 1) {
        return x
    } else{
        return x * h(x, n-1);
    }
}
console.log(h(2, 1), h(2, 2), h(2, 3), h(2, 4))