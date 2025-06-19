function myEach(collection, callback) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    callback(values[i]);
  }
  return collection;
}

function myMap(collection, callback) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  const result = [];
  for (let i = 0; i < values.length; i++) {
    result.push(callback(values[i]));
  }
  return result;
}

function myReduce(collection, callback, acc) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  let start = 0;

  if (acc === undefined) {
    acc = values[0];
    start = 1;
  }

  for (let i = start; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
  }

  return acc;
}

function myFind(collection, predicate) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) return values[i];
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  const result = [];
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) result.push(values[i]);
  }
  return result;
}

function mySize(collection) {
  const values = Array.isArray(collection) ? collection : Object.values(collection);
  return values.length;
}

function myFirst(array, n) {
  return n === undefined ? array[0] : array.slice(0, n);
}

function myLast(array, n) {
  return n === undefined ? array[array.length - 1] : array.slice(-n);
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}
// Optional: only if your tests are failing due to not exporting
module.exports = {
  myEach,
  myMap,
  myReduce,
  myFind,
  myFilter,
  mySize,
  myFirst,
  myLast,
  myKeys,
  myValues
};
