function esBisiesto(year) {
    if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

export default esBisiesto;