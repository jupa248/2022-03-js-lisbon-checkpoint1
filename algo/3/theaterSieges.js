/*
A theater employee wants to display every seat in the main room.
In said room, seats are arranged like this:
- There are 26 columns of seats, labelled from "1" to "26"
- Every column contains 100 seats, labelled from "1" to "100"
Your final list should like this:
  1-1
  1-2
  1-3
  .
  .
  .
  26-98
  26-99
  26-100
*/
const N = 26;
let columns = Array.from({length: N}, (_, index) => index + 1);

function theaterSieges() {
  let room = []

  columns.map(function (x) {
    newRow = [];
    for (let i = 1; i <= 100 ; i++) {
      newRow.push(x + "-" + i);
     
    };
    room.push(newRow);
  });
  return room;
};



console.log(theaterSieges());

module.exports = theaterSieges;
