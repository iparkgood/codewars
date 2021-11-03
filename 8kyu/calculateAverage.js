const find_average = (array) =>
  array.length ? array.reduce((acc, a) => acc + a) / array.length : 0;
