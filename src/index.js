module.exports = function longestConsecutiveLength(array) {
  // your solution here
  array = mergeSort(array);
  return countLongestSequence(array);

  function mergeSort(array) {
    if (array.length < 2) {
      return array;
    }

    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right) {
    var result = [];

    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }

    return result.concat(left.concat(right));
  }

  function countLongestSequence(array) {

    if (array.length < 1) {
      return 0;
    }

    var result = 1, counter = 1;
    var limit = array.length;

    for (var i = 1; i < limit; i++) {
      if (array[i] == array[i - 1] + 1) {
        counter++;
      } else if (array[i] == array[i - 1]) {
        continue;
      } else {
        if (result < counter) {
          result = counter;
        }
        counter = 1;
      }
    }
    return result;
  }
}
