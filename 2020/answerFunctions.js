const INPUTS = [
  null,
  DAY1,
  DAY2,
  DAY3,
  DAY4,
  DAY5,
  DAY6,
  DAY7,
  DAY8,
  DAY9,
  DAY10,
  DAY11,
  DAY12,
  DAY13,
  DAY14,
  DAY15,
  DAY16,
  DAY17,
  DAY18,
  DAY19,
  DAY20,
  DAY21,
  DAY22,
  DAY23,
  DAY24,
  DAY25,
];

// Which function to run to display the answer to a given puzzle
// Key: {day}-{puzzle}
// The function is passed one parameter, INPUT[day]
// If the answer function requires other parameters, write an anonymous function that takes input
// i.e. (input) => fn(input, extraParam)
const ANSWERS = {
  "1-1": input => day1Solution2(input, 2),
  "1-2": input => day1Solution2(input, 3),
  "2-1": input => numValidPasswords(input, parsePassword1, isValidPassword1),
  "2-2": input => numValidPasswords(input, parsePassword2, isValidPassword2),
  "3-1": numTreesDiagonal,
  "3-2": day3Puzzle2,
  "4-1": input => numValidPassports(input, isValidPassport1),
  "4-2": input => numValidPassports(input, isValidPassport2),
  "5-1": highestSeatID,
  "5-2": missingSeatID,
  "6-1": () => console.log("Day 6 - Puzzle 1"),
  "6-2": () => console.log("Day 6 - Puzzle 2"),
  "7-1": () => console.log("Day 7 - Puzzle 2"),
  "7-2": () => console.log("Day 7 - Puzzle 2"),
  "8-1": () => console.log("Day 8 - Puzzle 1"),
  "8-2": () => console.log("Day 8 - Puzzle 2"),
  "9-1": () => console.log("Day 9 - Puzzle 2"),
  "9-2": () => console.log("Day 9 - Puzzle 2"),
  "10-1": () => console.log("Day 10 - Puzzle 1"),
  "10-2": () => console.log("Day 10 - Puzzle 2"),
  "11-1": () => console.log("Day 11 - Puzzle 1"),
  "11-2": () => console.log("Day 11 - Puzzle 2"),
  "12-1": () => console.log("Day 12 - Puzzle 1"),
  "12-2": () => console.log("Day 12 - Puzzle 2"),
  "13-1": () => console.log("Day 13 - Puzzle 1"),
  "13-2": () => console.log("Day 13 - Puzzle 2"),
  "14-1": () => console.log("Day 14 - Puzzle 1"),
  "14-2": () => console.log("Day 14 - Puzzle 2"),
  "15-1": () => console.log("Day 15 - Puzzle 1"),
  "15-2": () => console.log("Day 15 - Puzzle 2"),
  "16-1": () => console.log("Day 16 - Puzzle 1"),
  "16-2": () => console.log("Day 16 - Puzzle 2"),
  "17-1": () => console.log("Day 17 - Puzzle 1"),
  "17-2": () => console.log("Day 17 - Puzzle 2"),
  "18-1": () => console.log("Day 18 - Puzzle 1"),
  "18-2": () => console.log("Day 18 - Puzzle 2"),
  "19-1": () => console.log("Day 19 - Puzzle 1"),
  "19-2": () => console.log("Day 19 - Puzzle 2"),
  "20-1": () => console.log("Day 20 - Puzzle 1"),
  "20-2": () => console.log("Day 20 - Puzzle 2"),
  "21-1": () => console.log("Day 21 - Puzzle 1"),
  "21-2": () => console.log("Day 21 - Puzzle 2"),
  "22-1": () => console.log("Day 22 - Puzzle 1"),
  "22-2": () => console.log("Day 22 - Puzzle 2"),
  "23-1": () => console.log("Day 23 - Puzzle 1"),
  "23-2": () => console.log("Day 23 - Puzzle 2"),
  "24-1": () => console.log("Day 24 - Puzzle 1"),
  "24-2": () => console.log("Day 24 - Puzzle 2"),
  "25-1": () => console.log("Day 25 - Puzzle 1"),
  "25-2": () => console.log("Day 25 - Puzzle 2"),
};