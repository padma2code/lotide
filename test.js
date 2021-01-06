
function arrayMaxMin(array, selector) {

  var val = array[0];   // variable to hold the current max/min value.

  for (var i = 1; i < array.length; i++) {
    if (selector == "Min") {
      if (array[i] < val) {
        val = array[i];
      }
    } else if (selector == "Max") {
      if (array[i] > val) {
        val = array[i];
      }
    }

  }
  return val;
}

const temperatures = [45, 10, -20, 0, 3, -20];
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${arrayMaxMin(temperatures,"Min")}C`);

const flightPrices = [1260, 490, 599, 1400, 820];
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs \$${arrayMaxMin(flightPrices,"Min")}`);

const golfScores = [-1, 3, 0, -4, 1, 4, -2];
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${arrayMaxMin(golfScores,"Min")}`);

const pageNumbers = [232];
console.log(`The shortest book out of a list of single book with 232 pages has ${arrayMaxMin(pageNumbers,"Min")} pages`)

