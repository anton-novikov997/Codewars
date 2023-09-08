// Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!
//
// You will have to define a function, which will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either "am" or "pm") as input.
//
//     Your task is to return a four-digit string that encodes that time in 24-hour time.
//
//     Notes
// By convention, noon is 12:00 pm, and midnight is 12:00 am.
//     On 12-hours clock, there is no 0 hour, and time just after midnight is denoted as, for example, 12:15 am. On 24-hour clock, this translates to 0015.
function to24hourtime(hour, minute, period) {
    if (period === "am" && hour === 12) {
        hour = 0;
    } else if (period === "pm" && hour !== 12) {
        hour += 12;
    }
    return hour.toString().padStart(2, "0") + minute.toString().padStart(2, "0");
}

// In abstract set theory, a construction due to von Neumann represents the natural numbers by sets, as follows:
//
//     0 = [ ] is the empty set
// 1 = 0 ∪ [ 0 ] = [ 0 ] = [ [ ] ]
// 2 = 1 ∪ [ 1 ] = [ 0, 1 ] = [ [ ], [ [ ] ] ]
// n = n−1 ∪ [ n−1 ] = ...
// Write a function that receives an integer n and produces the representing set.
//
//     Examples
// rep_set(0) ➞ []
//
// rep_set(1) ➞ [[]]
//
// rep_set(2) ➞ [[], [[]]]
//
// rep_set(3) ➞ [[], [[]], [[], [[ ]]]]
// Input Constraints
// 0 <= n <= 15


function rep_set(n) {
    if (n === 0) {
        return [];
    } else {
        const prevSet = rep_set(n - 1);
        const newSet = [prevSet];
        return prevSet.concat(newSet);
    }
}

rep_set(5)


var circleArea = function (radius) {
    return radius > 0 ? +(radius*radius*Math.PI).toFixed(2) : false;
};