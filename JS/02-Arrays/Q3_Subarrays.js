let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  let subarray = [];
  for (let j = i; j < arr.length; j++) {
    subarray.push(arr[j]);
    console.log(subarray);
  }

  console.log();
}
