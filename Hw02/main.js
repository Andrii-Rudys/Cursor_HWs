let n = + prompt("press your first number.");
while (!(n && !NaN && Number.isInteger(n))){
    n = +(prompt("press your first number"));
}
console.log("First number:" + n);

let m = null;
do {
    m = +prompt("press your second number.");
} while ( !(m && !NaN && Number.isInteger(m) && m > n));
console.log("Second number:" + m);

let sum = 0;
let skipEvenNumb = confirm("skip even numbers");
console.log("Skip even numbers:" + skipEvenNumb);

for (let i = n; i <= m; i++) {
    if (skipEvenNumb) {
        if ((i % 2) !==  0) {
            sum += i;
        }
    } else {
        sum += i;
    }
}
console.log("Sum:"+ sum);
alert("Sum:" + sum);
