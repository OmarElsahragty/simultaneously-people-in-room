// * Given an array of time intervals for people entering and leaving a room consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei). What is the maximum number of people in the room simultaneously?

function simultaneouslyPeopleInRoom(arr) {
  let max = 0;
  let remainingPersons = [];

  for (let i = 0; i < arr.length; i++) {
    const entranceTime = arr[i][0];
    const leavingTime = arr[i][1];

    remainingPersons.push(leavingTime);

    remainingPersons = remainingPersons.reduce((persons, exitTime) => {
      if (exitTime > entranceTime) persons.push(exitTime);
      return persons;
    }, []);

    if (remainingPersons.length > max) max = remainingPersons.length;
  }

  return max;
}

const arr1 = [
  [2, 10],
  [3, 4],
  [6, 9],
];
const arr2 = [
  [1, 3],
  [2, 4],
  [2, 5],
  [3, 4],
  [3, 6],
  [4, 5],
  [5, 6],
];
const arr3 = [
  [1, 8],
  [2, 7],
  [3, 5],
  [5, 7],
  [6, 7],
  [6, 8],
  [7, 8],
];

console.log("first", simultaneouslyPeopleInRoom(arr1)); // ? Output: 2
console.log("second", simultaneouslyPeopleInRoom(arr2)); // ? Output: 4
console.log("third", simultaneouslyPeopleInRoom(arr3)); // ? Output: 5
