const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

//1.
function getSubjects(name) {
    let subjectsArr = Object.keys(name.subjects);
    for (let i = 0; i< subjectsArr.length; i++) {
        subjectsArr[i] =(subjectsArr[i][0].toUpperCase() + subjectsArr[i].slice(1).toLowerCase().replace("_", " "));
    }
    return subjectsArr;
}

//2.
function getAverageMark(student) {
    let studentsMarks = Object.values(student.subjects).flat();
    return (studentsMarks.reduce((accumulator, currentValue) => (accumulator + currentValue), 0)/studentsMarks.length).toFixed(2);
}

//3.
const getStudentInfo = (student) => {
    return {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student)
    }
};
//4.
const getStudentsNames = (students) => {
    let names=[];
    students.forEach((student=>{
        names.push(student.name);
    }));
    return names.sort();
};


//5
function getBestStudent(arrayOfStudents){
    let bestResult = 0;
    let bestStudent = null;
    arrayOfStudents.forEach(element=>{
        if (bestResult < getAverageMark(element)){
            bestResult = getAverageMark(element);
            bestStudent = element.name;
        }
    });
    return bestStudent;

}
//6.
function calculateWordLetters(word) {
    let countLetter = {};
    for(let i = 0; i<word.length ; i++) {
        countLetter[word[i]] = 0;
        for(let j = 0; j < word.length ; j++) {
            if (word[i]===word[j]){
                countLetter[word[i]] += 1;
            }
        }
    }
    return countLetter;
}


console.log(getSubjects(students[0]));
console.log(getAverageMark(students[0]));
console.log(getStudentInfo(students[0]));
console.log(getStudentsNames(students));
console.log(getBestStudent(students));
console.log(calculateWordLetters('тест'));