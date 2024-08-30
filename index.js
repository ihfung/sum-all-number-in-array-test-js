const sumItems = (array) => {
  // Initialize sum
  let sum = 0;

  // Loop through each item in the array
  for (const item of array) {
    // If the item is an array, call the function recursively
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else {
      // If the item is a number, add it to the sum
      sum += item;
    }
  }

  // Return the total sum
  return sum;
};

module.exports = sumItems;