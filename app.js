console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count < 0) {
        count = count * -1;
    }
    for (let i = 0; i <= count; i++) {
        if (i % 2 > 0) {
            console.log(i);
        }
    }
}
printOdds(-30);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName = "no Name", age = 15) {
    let aboveSixteen = "Congrats " + userName + ", you can drive!";
    let belowSixteen = "Sorry " + userName + ", but you need to wait until you're 16.";
    let res;
    if (age >= 16) {
        res = aboveSixteen;
    } else {
        res = belowSixteen;
    }
    console.log(res);
}
checkAge("John", 16);
checkAge("Sally", 10);
checkAge("Fred", 32);
checkAge("Joe");

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function findQuadrant(x, y) {
    let res = "(" + x + "," + y + ") ";

    if (x == 0 && y == 0) res += " is at the intersection of the x and y axes"
    else if (x == 0) res += " is on the y axis"
    else if (y == 0) res += " is on the x axis"
    else if (x > 0 && y > 0) res += " is in Quadrant 1"
    else if (x > 0 && y < 0) res += " is in Quadrant 2"
    else if (x < 0 && y < 0) res += " is in Quadrant 3"
    else if (x < 0 && y > 0) res += " is in Quadrant 4"

    console.log(res);
}
findQuadrant(27, 0);
findQuadrant(0, 32);
findQuadrant(0, 0);
findQuadrant(-4, -65);
findQuadrant(-74, 30);
findQuadrant(27, 99);
findQuadrant(45, -2);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function checkTriangle(side1, side2, side3) {
    if (side1 + side2 < side3) {
        console.log("Invalid triangle.  The sum of side1 and side2 are less than side3. --> " + side1 + ", " + side2 + ", " + side3);
    } else if (side1 == side2 && side2 == side3) {
        console.log("Equilateral triangle. --> " + side1 + ", " + side2 + ", " + side3);
    } else if (side1 == side2) {
        console.log("Isosceles triangle. --> " + side1 + ", " + side2 + ", " + side3);
    } else {
        console.log("Scalene triangle. --> " + side1 + ", " + side2 + ", " + side3);
    }
}
checkTriangle(1, 2, 5);
checkTriangle(7, 7, 5);
checkTriangle(5, 5, 5);
checkTriangle(8, 2, 5);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function planDataStatus(planLimit, day, usage) {
    let daysRemaining = 30 - day;
    let dataRemaining = planLimit - usage;
    let AvgCurrUsage = usage / day;
    let avgMonthlyAllotment = planLimit / 30;
    console.log(day + " days used, " + daysRemaining + " days remaining");
    console.log("Average daily use: " + AvgCurrUsage + " GB/day");
    if (avgMonthlyAllotment < AvgCurrUsage) {
        console.log("You are EXCEEDING your average daily use (" + avgMonthlyAllotment + " GB/day allotted),");
        console.log("Continuing this high usage, you'll exceed your data plan by " + ((AvgCurrUsage * 30) - planLimit) + " GB.");
        console.log("To stay below your data plan, use no more than " + (dataRemaining / daysRemaining) + " GB/day.");
    } else {
        console.log("No issues.  Your average daily use is less than the monthly daily average (" + avgMonthlyAllotment + " GB/day)");
    }
    console.log("******************");
}
planDataStatus(200, 3, 24);
planDataStatus(100, 5, 15);