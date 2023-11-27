function getInteger(a,n) {
    let r = ((a - Math.floor(a)) * Math.pow(10, n)); 
    return Math.trunc(r)
    }