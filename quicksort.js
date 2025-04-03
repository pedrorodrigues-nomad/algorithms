function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const middle = [];
  const right = [];

  for (const element of arr) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    } else {
      middle.push(element);
    }
  }

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

console.log(quickSort([10, 5, 2, 3]));
console.log(quickSort([10, 5, 2, 3, 1, 100, 20, 30, 40, 50]));
console.log(quickSort([1, 2, 3, 4, 5]));
console.log(quickSort([5, 4, 3, 2, 1]));
