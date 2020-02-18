//1.
const GET_RANDOM_ARRAY = (length,min,max) => {
    let res = [];
    for(let i =0;i<length;i++){
        res.push(Math.trunc(min + Math.random() * (max + 1 - min)));
    }
    return res;
};
console.log(GET_RANDOM_ARRAY(15,0,1000));

//3.
 const GET_AVERAGE = (...numbers) => {
     let integers = numbers.filter(num => Number.isInteger(num));
     return integers.reduce((a, b) => a + b) / integers.length;
 };
     console.log(GET_AVERAGE(6, 2, 55, 11, 78, 2, 55, 77, ));


  //5.
const FILTER_EVEN_NUMBERS = (...numbers) => {
    return numbers.filter(number => number % 2 !== 0)
};
console.log(FILTER_EVEN_NUMBERS(6,13,14,56,77,80));


//6.
const COUNT_POSITIVE_NUMBER = (...numbers) => {
    return  numbers.filter(number => number > 0).length;
};
    console.log(COUNT_POSITIVE_NUMBER(1, -2, 3, -4, -5, 6));

  //7.
const GET_DEVIDED_BY_FIVE = (...numbers) => {
    return numbers.filter(number => number%5 === 0)
};
    console.log(GET_DEVIDED_BY_FIVE(6, 2, 55, 11, 80, 2, 50, 35,));


  //8.
const REPLACE_BAD_WORD = (string) => {
    const words = string.split(' ');
    let res = words.map((word)=>{
        if (word.includes('fuck')){
            return word.replace('fuck', '****')
        }
        if (word.includes('bullshit')){
            return word.replace('bullshit', '********')
        }
        return word;
    });
    return res.join('  ');
};
console.log(REPLACE_BAD_WORD("Are you fucking kiding me"));

