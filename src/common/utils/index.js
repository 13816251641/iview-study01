
export function parseTime(time, cFormat) {
    if (arguments.length === 0) {
        return null;
    }
    if (!time){
        return null;
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
    let date;
    if (typeof time === 'object') {
        date = time;
    } else {
        // eslint-disable-next-line radix
        date = new Date(parseInt(time));
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds()
    };
    // eslint-disable-next-line camelcase
    const time_str = format.replace(/{(y|m|d|h|i|s)+}/g, (result, key) => {
        let value = formatObj[key];
        if (result.length > 0 && value < 10) {
            value = '0' + value;
        }
        return value || 0;
    });
    // eslint-disable-next-line camelcase
    return time_str;
}

export function showName(name) {
    alert('showName:'+name);
}

export let a = 'abc'

