"use strict";

// 1 завдання --------------------------------------------------------------------------

const timeIntervals = {
    days: 86400000,
    hours: 3600000,
    minutes: 60000,
    seconds: 1000
};

function isValidDateFormat(date) {
    return new Date(date).toString() !== "Invalid Date";
}

function isValidTimeInterval(interval) {
    return timeIntervals.hasOwnProperty(interval);
}

function durationBetweenDates(startDate = "01 Dec 1985", endDate = "01 Dec 2023", interval) {
    if (!(isValidDateFormat(startDate) && isValidDateFormat(endDate))) return "Please use popular date formats like - YYYY-MM-DD, MM/DD/YYYY etc. "
    if (!isValidTimeInterval(interval)) return "Please use one of the following time intervals - days, hours, minutes, seconds";

    let duration = new Date(endDate) - new Date(startDate);
    if (duration < 0) duration = -duration;
    return duration / timeIntervals[interval];
}

console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'));  // поверне '86400 seconds')
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days'));  // поверне '362 days'
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'test')); // поверне error
console.log(durationBetweenDates('sdfsdfsdf', '03 Aug 1985', 'seconds'));  // поверне error
console.log(durationBetweenDates('03 Aug 1985', 'gdfgdfgdfg', 'seconds'));  // поверне error


// 2 завдання --------------------------------------------------------------------------

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};

function optimizer(data) {
    const result = {};
    for (let key in data) {
        result[key.toLowerCase()] = Number(data[key]).toFixed(2);
    }
    return result;
}

console.log(optimizer(priceData))