//create a funxtion that takes an array as input and returns the first element as output in typescript

const arrFunction = (val : number[] ) => {
    return val[0]

}

const call = arrFunction([1,2,34])
console.log(call)


//another approach

type input = (number | string)[]
function changer(inarr : input) {
    return  inarr[0]

}
console.log(changer(["haha","ok bro", 1]))



//generic approach 

function convertor<T>(inputArray : T[]) : T | undefined {
    return inputArray[0]

}
let val = convertor(["hey", "chaity", "wassup"])
console.log(val?.toUpperCase())

type User = {
    name : string,
    age : number
}

function convertorWithType<T>( userArray : T[]) {
    return userArray[0]
}

let output = convertorWithType<User>([{
    name : "CHaitu",
    age:23
}, {
    name: "Kiran",
    age: 24
}])
console.log(output)


//swap function

function swap<H>(val1 : H, val2:H) :[H,H]  {
    //as we know the length of it will be 2 only we can declare 2H's there 
    return [val2, val1]
}

let ans = swap(true, false)
console.log(ans)



//swap diff types dumb way
function swapDiffTypes(x : number| string, y: number| string){
    return [y,x]

}

let ansSwapDiff = swapDiffTypes(1,2)
let ansSwapDiff2 = swapDiffTypes("hey", 1)
console.log(ansSwapDiff2)

// this is the smart way to swap numbers using generics in a smart way...
function swapSmartWay<N,S>(val1 : N, val2:S) {
    return [val2, val1]
}

let smarty = swapSmartWay("TEST ABBBA", false)
console.log(smarty)