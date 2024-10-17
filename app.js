console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if(count < 0) {
        count = count * -1;
    }
    for (let i = 0; i <= count; i++) {
        if(i % 2 > 0){
            console.log(i);
        }
    }
}
printOdds(-30);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName = "no Name", age = 15){
    let aboveSixteen = "Congrats " + userName + ", you can drive!";
    let belowSixteen = "Sorry " + userName + ", but you need to wait until you're 16.";
    let res;
    if (age >= 16){
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

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
