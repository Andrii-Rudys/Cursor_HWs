let gloves = 15.678;
let backpack = 123.965;
let sneakers = 90.2345;

//1.
let maxPrice = Math.max (gloves,backpack, sneakers);

//2.
let minPrice = Math.min(gloves,backpack, sneakers);

//3.
let totalPrice = (gloves+backpack+sneakers);

//4.
let totalRoundedPrice = Math.floor(gloves)+Math.floor(backpack)+ Math.floor(sneakers);

//5.
let hundredPrice = Math.round(totalPrice/100)*100;

//6.
let isOdd = Math.floor(totalPrice) % 2 === 1;

//7.
let cash = 500;
let rest = (cash - totalPrice);

//8.
let priceAverage = (totalPrice/3) .toFixed(2);

//9.
let randomDiscount = Math.random()*100;
let priceWithDiscount = (totalPrice - (totalPrice/100) * randomDiscount) .toFixed(2);
let discount = (totalPrice/100) * randomDiscount;
let netIncome =  (totalPrice/2 - discount).toFixed(2);

//Advanced
let templateString = `Max price: ${maxPrice}
    Min price: ${minPrice}
    Total price: ${totalPrice}
    Rounded price: ${totalRoundedPrice}
    Rounded to hundreds: ${hundredPrice}
    Is the price odd?: ${isOdd}
    The rest is: ${rest} uah
    Average price: ${priceAverage}
    Discount price: ${priceWithDiscount}
    Profit: ${netIncome}`;
console.log(templateString);
