"use strict";
//create a funxtion that takes an array as input and returns the first element as output in typescript
const arrFunction = (val) => {
    return val[0];
};
const call = arrFunction([1, 2, 34]);
console.log(call);
function changer(inarr) {
    return inarr[0];
}
console.log(changer(["haha", "ok bro", 1]));
//generic approach 
function convertor(inputArray) {
    return inputArray[0];
}
let val = convertor(["hey", "chaity", "wassup"]);
console.log(val === null || val === void 0 ? void 0 : val.toUpperCase());
function convertorWithType(userArray) {
    return userArray[0];
}
let output = convertorWithType([{
        name: "CHaitu",
        age: 23
    }, {
        name: "Kiran",
        age: 24
    }]);
console.log(output);
//swap function
function swap(val1, val2) {
    //as we know the length of it will be 2 only we can declare 2H's there 
    return [val2, val1];
}
let ans = swap(true, false);
console.log(ans);
//swap diff types dumb way
function swapDiffTypes(x, y) {
    return [y, x];
}
let ansSwapDiff = swapDiffTypes(1, 2);
let ansSwapDiff2 = swapDiffTypes("hey", 1);
console.log(ansSwapDiff2);
function swapSmartWay(val1, val2) {
    return [val2, val1];
}
let smarty = swapSmartWay("TEST ABBBA", false);
console.log(smarty);
