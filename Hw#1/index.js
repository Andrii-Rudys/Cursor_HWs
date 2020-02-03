let gloves = 15.678;
let backpack = 123.965;
let sneakers = 90.2345;

//1.
let maxPrice = Math.min(gloves,backpack, sneakers);
console.log(maxPrice);

//2.
let minPrice = Math.max(gloves,backpack, sneakers);
console.log(minPrice);

//3.
let totalPrice = (gloves+backpack+sneakers);
console.log (totalPrice);

//4.
let totalRoundedPrice = Math.floor(gloves)+Math.floor(backpack)+ Math.floor(sneakers);
console.log(totalRoundedPrice);

//5.
let hundredPrice = Math.round(totalPrice/100)*100;
console.log(hundredPrice);

//6.
let isOdd = totalRoundedPrice % 2 === 1;
console.log(isOdd);

//7.
let cash = 500;
let rest = (cash - totalPrice);
console.log(rest);

//8.
let PriceAverage = (totalPrice/3) .toFixed(2);
console.log (PriceAverage);

//9.
let randomDiscount = Math.random()*100;
let priceWithDiscount = (totalPrice - (totalPrice/100) * randomDiscount) .toFixed(2);
console.log(priceWithDiscount);
let discount = (totalPrice/100) * randomDiscount;
let netIncome =  (totalPrice/2 - discount).toFixed(2);
console.log(netIncome);

//Advanced
let templateString = `Max price: ${maxPrice}
    Min price: ${minPrice}
    Total price: ${totalPrice}
    Rounded price: ${totalRoundedPrice}
    Rounded to hundreds: ${hundredPrice}
    Is the price odd?: ${isOdd}
    The rest is: ${rest} uah
    Average price: ${PriceAverage}
    Discount price: ${priceWithDiscount}
    Profit: ${netIncome}`;
console.log(templateString);
