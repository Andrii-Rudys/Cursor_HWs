const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476 };
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921 };
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114 };
//1.
function getMyTaxes(salary) {
    return salary * this.tax;
}
console.log(getMyTaxes.call(ukraine, 20000));

//2.
function getMiddleTaxes () {
    return this.middleSalary * this.tax;
}
console.log(getMiddleTaxes.call(latvia));

//3.
function getTotalTaxes () {
    return this.tax * this.middleSalary * this.vacancies;
}
console.log(getTotalTaxes.call(litva));

//4.
function getMySalary( min, max ) {
    let salary = Math.floor( min + Math.random() * ( max + 1 - min ));
    let taxes  = salary * this.tax;
    let profit = salary - taxes;
    return console.log( 'My Salary: ', { salary, taxes, profit });
}
let mySalary = getMySalary.bind( latvia, 1500, 2000);
mySalary();
setInterval( mySalary, 10000 );
