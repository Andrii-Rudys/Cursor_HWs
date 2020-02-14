const STUDENTS = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const THEMES = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const  MARKS = [4, 5, 5, 3, 4, 5];

//1.
function getByPairs (STUDENTS) {
    let studentsGirls = ["Лена", "Ира", "Светлана"];
    let studentsBoys = ["Саша", "Игорь", "Алексей"];
    let result = [];
    for (let i = 0; i < STUDENTS.length/2; i++) {
        result[i] = [studentsBoys[i], studentsGirls[i]];
    }
    return result;
}
 const PAIRS = getByPairs(STUDENTS);
console.log(PAIRS);

//2.
function chooseThems(PAIRS, THEMES) {
    let pairsWithThems = [];
    for (let i = 0; i < PAIRS.length; i++) {
        pairsWithThems[i] = [PAIRS[i].join(" і "), THEMES[i]];
    }
    return pairsWithThems;
}
const PAIRSWITHTHEMS = chooseThems(PAIRS, THEMES);
console.log(PAIRSWITHTHEMS);

//3.
function getMarks(STUDENTS, MARKS) {
    let studensMarks = [];
    for (let i = 0; i < STUDENTS.length; i++) {
        studensMarks[i] = [STUDENTS[i], MARKS[i]];
    }
    return studensMarks;
}
const STUDENTSMARKS = getMarks(STUDENTS, MARKS);
console.log(STUDENTSMARKS);

//4.
function getRandomMarks(PAIRSWITHTHEMS) {
    let pairsRandomMarks = [];
    for(let i=0; i < STUDENTS.length/2; i++) {
        pairsRandomMarks[i] = [PAIRSWITHTHEMS[i], Math.floor(((Math.random() * 5) + 1))];
    }return pairsRandomMarks;
}
const RANDOMMARKS = getRandomMarks(PAIRSWITHTHEMS);
console.log(RANDOMMARKS);

let str = `
Пари студентів: ${PAIRS};<br>
Пари студентів і теми проектів:${PAIRSWITHTHEMS};<br>
Оцінки студентів:${STUDENTSMARKS};<br>
Пари з випадковими оцінками:${RANDOMMARKS};<br>`;
console.log(str);
document.getElementById("divv").innerHTML = str;

