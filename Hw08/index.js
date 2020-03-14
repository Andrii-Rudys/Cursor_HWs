
//.1.
class Student {
    _marks = [5, 4, 4, 5];

    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }

//.2.
    getInfo() {
        return (`Студент - ${this.fullName}, навчається на ${this.course} курсі в ${this.university} .`);
    }

//.3.
    get getMarks() {
        return console.log(this._marks);
    }

//.4.
    set setMarks(number) {
        if (this._marks === null) {
            return null;
        } else {
            this._marks.splice(3, 0, number);
        }
    }

//.5.

    getAverageMark() {
        if (this._marks !== null) {
            return (
                this._marks.reduce((accumulator, currentEl) => {
                    return accumulator + currentEl;
                }, 0) / this._marks.length
            );
        } else {
            return null;
        }

    }
//.6.

    dismiss() {
        this._marks = null;
        return console.log("студента відраховано");
    }

//.7.
    recover() {
            this._marks = [5, 4, 4, 5];
            return console.log("студента зараховано");
        }
    }

let andrii = new Student("НУОА", "4", "Андрій Рудись");
console.log(andrii.getInfo());
console.log(andrii.getMarks);
andrii.setMarks = 5;
console.log(andrii.getMarks);
console.log(andrii.getAverageMark());
andrii.dismiss();
andrii.recover();
