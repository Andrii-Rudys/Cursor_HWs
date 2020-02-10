//1.
function getMaxDigit(number) {
    number = number.toString();
    let max = 0;
    for (let i=0; i< number.length; i++) {
        if (max < number[i]) {
            max = number[i];
        }
    }
    return max;
}

//2.
function getPow(n, exp) {
    if (exp === 0) return 1;
    let result = n;
    for (let i = 1; i < exp; i++) {
        result *= n;
    }
    return result;
}

//3.
function getCorectName(name) {
    name = name.toLowerCase();
    let nameSlice = name.slice(1, name.length);
    return name[0].toUpperCase() + nameSlice;
}

//4.
function getCleanSalary(salary) {
    let tax = (salary / 100) * 19.5;
    return salary - tax;
}

//5.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//6.
function countLetter(word, letter ) {
    let arrWord = word.toLowerCase().split(""), count = 0;
    for ( let i = 0; i < arrWord.length; i++) {
        if (arrWord[i] === letter) {
            count++;
        }
    }
    return count;
}

//10.
function isPalindrome(str) {
    let result = true;
    const halfLength = Math.floor(str.length / 2);

    for (let i = 0; i < halfLength; i++) {
        const leftChar = str[i];
        const rightChar = str[str.length - (i + 1)];

        if (leftChar !== rightChar) {
            return false;
        }
    }

    return result;
}

    let funcList = `func. 1. ${getMaxDigit(3428976)};<br>
func. 2. ${getPow(2, 8)};<br>
func. 3. ${getCorectName("ANdrushA")};<br>
func. 4. ${getCleanSalary(37456)};<br>
func. 5. ${getRandomInt(1, 34)};<br>
func. 6. ${countLetter("contibution","t")};<br>
func. 10.${isPalindrome("madam")}<br>`;

console.log(funcList);
document.getElementById("divv").innerHTML = funcList;


