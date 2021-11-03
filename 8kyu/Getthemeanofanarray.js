const getAverage = (marks) =>
  Math.floor(marks.reduce((acc, m) => acc + m, 0) / marks.length);