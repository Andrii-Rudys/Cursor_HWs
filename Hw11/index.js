function getDate() {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(String.fromCharCode(Date.now().toString()))
        }, 50);
    })
}

async function getRandomChinese(length) {
    let result = '';
    for (let i=0; i<length; i++) {
        result += await getDate(i);
    }
    return result;
};

(async () => {
    console.log(await getRandomChinese(4))
})();

