// 斐波那契数列
function fabonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fabonacci(n - 1) + fabonacci(n - 2);
}

onmessage = function (val) {
    switch (val.data) {
        case 'start':
            let result = fabonacci(43);
            postMessage(result);
    }
}
