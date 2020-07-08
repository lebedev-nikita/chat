function jsonInQuotesOrNull(obj) {
    return (obj) ? "'" + JSON.stringify(obj) + "'" : null;
    // let ret = obj;
    // ret = (ret) ? "'" + JSON.stringify(ret) + "'" : null;
    // return ret;
}

function strInQuotesOrNull(str) {
    return (str) ? "'" + str + "'" : null;
}

module.exports = { jsonInQuotesOrNull, strInQuotesOrNull };
