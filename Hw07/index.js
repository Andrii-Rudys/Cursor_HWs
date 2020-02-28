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
function getMySalary(country) {
    let maxSalary = 2000;
    let minSalary = 1500;
    let obj ={};
    obj.salary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    obj.taxes = parseFloat((country.tax * obj.salary).toFixed());
    obj.profit = parseFloat((obj.salary - obj.taxes).toFixed());
    return obj
}
setInterval(() => console.log(getMySalary(litva)), 10000);

