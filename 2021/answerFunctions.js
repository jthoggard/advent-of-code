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

const placeholder = () => 'incomplete';

// Which function to run to display the answer to a given puzzle
// Key: {day}-{puzzle}
// The function is passed one parameter, INPUT[day]
// If the answer function requires other parameters, write an anonymous function that takes input
// i.e. (input) => fn(input, extraParam)
const ANSWERS = {
  '1-1': day1Puzzle1,
  '1-2': day1Puzzle2,
  '2-1': day2puzzle1,
  '2-2': day2puzzle2,
  '3-1': day3puzzle1,
  '3-2': day3puzzle2,
  '4-1': firstBingoWinner,
  '4-2': lastBingoWinner,
  '5-1': overlappingVents90,
  '5-2': overlappingVentsAll,
  '6-1': (input) => lanternfishBreeding2(input, 80),
  '6-2': (input) => lanternfishBreeding2(input, 256),
  '7-1': alignCrabs1,
  '7-2': alignCrabs2,
  '8-1': uniqueSegmentDigits,
  '8-2': sumDecodedSegments,
  '9-1': lavaLowPoints,
  '9-2': lavaBasins,
  '10-1': countCorrupted,
  '10-2': fixIncomplete,
  '11-1': countFlashes,
  '11-2': flashConvergence,
  '12-1': countCavePaths,
  '12-2': countCavePaths2,
  '13-1': singleFold,
  '13-2': foldForCode,
  '14-1': polymerPairInsertion,
  '14-2': placeholder,
  '15-1': placeholder,
  '15-2': placeholder,
  '16-1': processPacketVersions,
  '16-2': processPackets,
  '17-1': trickShot,
  '17-2': initialVelocities,
  '18-1': snailAddition,
  '18-2': findLargestSnailSum,
  '19-1': placeholder,
  '19-2': placeholder,
  '20-1': imageEnhancement,
  '20-2': (input) => imageEnhancement(input, 50),
  '21-1': deterministicDice,
  '21-2': placeholder,
  '22-1': rebootReactor,
  '22-2': placeholder,
  '23-1': placeholder,
  '23-2': placeholder,
  '24-1': placeholder,
  '24-2': placeholder,
  '25-1': seaCucumberMoves,
  '25-2': placeholder,
};
