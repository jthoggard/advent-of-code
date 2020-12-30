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

const PLACEHOLDER = () => "incomplete";

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
  "6-1": numUniqueAnswers,
  "6-2": numUnanimousAnswers,
  "7-1": shinyGoldParents,
  "7-2": shinyGoldChildren,
  "8-1": handheldInfiniteLoop,
  "8-2": handheldFixInfiniteLoop,
  "9-1": firstNotValid,
  "9-2": sumToInvalid,
  "10-1": joltageDiff,
  "10-2": joltageChains,
  "11-1": seatMap,
  "11-2": seatMap2,
  "12-1": shipDirections,
  "12-2": waypointDirections,
  "13-1": earliestBus,
  "13-2": busesInARow,
  "14-1": bitMask,
  "14-2": bitMask2,
  "15-1": input => numberGame(input, 2020),
  "15-2": input => numberGame(input, 30000000),
  "16-1": invalidTicketNumbers,
  "16-2": decodeTickets,
  "17-1": input => conwayCubes(input, 6),
  "17-2": input => conwayHypercubes(input, 6),
  "18-1": input => newMath(input, evaluate1),
  "18-2": input => newMath(input, evaluate2),
  "19-1": input => numValidMessages(input, isValidMessage1, [8, 11]),
  "19-2": input => numValidMessages(input, isValidMessage2, [42, 31]),
  "20-1": PLACEHOLDER,
  "20-2": PLACEHOLDER,
  "21-1": PLACEHOLDER,
  "21-2": PLACEHOLDER,
  "22-1": PLACEHOLDER,
  "22-2": PLACEHOLDER,
  "23-1": PLACEHOLDER,
  "23-2": PLACEHOLDER,
  "24-1": PLACEHOLDER,
  "24-2": PLACEHOLDER,
  "25-1": PLACEHOLDER,
  "25-2": PLACEHOLDER,
};