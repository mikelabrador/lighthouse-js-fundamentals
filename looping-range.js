function range (start, end, step) {
    
    var someArray = [];
    if (start == undefined || end == undefined || step == undefined) {
        return someArray;
    } else if (start > end) {
        return someArray;
    } else if (step < 0) {
        return someArray
    } else {
        for (var i = start; i <= end; i = i + step) {
            someArray.push(i);
        }
        return someArray;
    }
}

console.log(range());