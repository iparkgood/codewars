function humanReadable(seconds) {
  const hours = ("0" + Math.floor(seconds / 3600)).slice(-2);
  const minutes = ("0" + Math.floor((seconds - hours * 3600) / 60)).slice(-2);
  const remainingSec = ("0" + (seconds - hours * 3600 - minutes * 60)).slice(
    -2
  );

  return `${hours}:${minutes}:${remainingSec}`;
}

console.log(humanReadable(0)); //'00:00:00'
console.log(humanReadable(5)); //'00:00:05'
console.log(humanReadable(60)); //'00:01:00'
console.log(humanReadable(86399)); //'23:59:59'
console.log(humanReadable(359999)); //'99:59:59'
