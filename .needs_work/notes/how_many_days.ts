let millisecondsAgo = Date.now() - new Date('2016-08-15').getTime();
let dayInMilliseconds = 24 * 60 * 60 * 1000;
let daysPast = Math.floor(millisecondsAgo / dayInMilliseconds);
console.log(daysPast + ' days.');