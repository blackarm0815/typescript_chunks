var millisecondsAgo = Date.now() - new Date('2016-08-15').getTime();
var dayInMilliseconds = 24 * 60 * 60 * 1000;
var daysPast = Math.floor(millisecondsAgo / dayInMilliseconds);
console.log(daysPast + ' days.');
