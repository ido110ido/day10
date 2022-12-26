//Ex1
//1
function oneToTen(){
    for(let i = 1;i<=10;i++){
        console.log(i);
    }
}
oneToTen()
//2
function oneToTenEven(){
    for(let i = 1;i<=10;i++){
        if(i%2 ===0){
            console.log(i);
        }
    }
}
oneToTenEven()
//3
function oneToNumEven(num){
    for(let i = 1;i<=num;i++){
        if(i%2 ===0){
            console.log(i);
        }
    }
}
oneToNumEven(20)
//4
function printNums(){
    for(let i = 1;i<=20;i++){
        if(i !== 13){
            console.log(i);
        }
    }
}
printNums()
//5
function printDescending(){
    for(let i = 10;i > 0;i--){
        console.log(i);
    }
}
printDescending()
//6
function printOddNumsTill7(){
    for(let i = 1;i <= 10;i++){
        if(i%2 === 1){
            console.log(i);
            if(i === 7){
                break;
            }
        }
    }
}
printOddNumsTill7()
//7
const array = [1,2,3,4,5,6,7,8,9,19,12,3,4,5,6,87,21,1,2]
function printArray(arr = []){
    for(let i = 0;i < arr.length;i++){
        console.log(arr[i]);
    }
}
printArray(array)
//8
const array1 = [1,2,3,4,5]
 function printEvenNumbers(array){
    for(let i = 0;i < array.length;i++){
        if(array[i]%2 === 0){
            console.log(array[i]);
        }
    }
}
printEvenNumbers(array1)
//9
 function printSum(array){
    let sum = 0;
    for(let i = 0;i < array.length;i++){
        sum +=array[i]
    }
    return sum
}
console.log(printSum(array1));

//10
function numOfLetter(word){
    return word.length
}
console.log(numOfLetter('aaa'));
//11
let bigArray =  [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
let evenArr = []
let oddArr = []
for(let i = 0;i < bigArray.length;i++){
    if(bigArray[i]%2 === 0){
        evenArr.push(bigArray[i])
    }
    else if(bigArray[i]%2 === 0){
        oddArr.push(bigArray[i])
    }
}
console.log(evenArr);
//12
function isYInString(w){
    for(let i = 0; i < w.length;i++){
        console.log(w[i]);
        if(w[i] === 'y' || w[i] === 'Y'){
            return true
        }
    }
    return false;
}
console.log(isYInString('sdflsday'));
//13
function bigestNum(arr){
    let bigest = 0;
    for(let i = 0;i < arr.length; i++){
        if(bigest < arr[i]){
            bigest = arr[i]
        }
    }   
    return bigest
}
console.log(bigestNum([1,2,3,4,5,4,3,21,7]));

//EX2
//1
function Ex2_1(){
    let num = 1;
    while(num <=10){
        console.log(num);
        num ++
    }
}
Ex2_1()
//2
function Ex2_2(){
    let num = 1;
    while(num <=10){
        if(num%2 === 0){
            console.log(num);
        }
        num ++
    }
}
Ex2_2()
//3
function Ex2_3(){
    let num = 1;
    while(num <=10){
        if(num%2 === 1){
            console.log(num);
        }
        num ++
    }
}
Ex2_3()
//4
function Ex2_4(){
    let num = 10;
    while(num >0){
        console.log(num);
        num --
    }
}
Ex2_4()
//5
function Ex2_5(){
    let num = prompt('enter number:');
    let i = 1
    while(i <= num){
        console.log(i);
        i ++
    }
}
//Ex2_5()
//6
function Ex2_6(){
    let num = prompt('enter number:')*1;
    let sum = 0
    while(0 < num){
        sum += num
        num--
    }
    console.log(sum);
}
//Ex2_6()
//7
function Ex2_7(){
    let num = prompt('enter number:');
    let sum = 1
    while(0 < num){
        sum *= num
        num--
    }
    console.log(sum);
}
//Ex2_7()
//8
function Ex2_8(){
    let num = prompt('enter fuel leve:');
    while(num < 5000 || num > 30000){
        if(num < 5000){
            num = prompt('enter fuel leve:(need to be more then 5,000)');
        }
        else{
            num = prompt('enter fuel leve:(need to be less then 30,000)');

        }
    }
    console.log('great, your fuel level is :' + num);
}
//Ex2_8()
//Ex3
//1
function Ex3_1_1(){
    for(let i = 1; i<= 6; i++){
        console.log('*'.repeat(i));
    }
}
Ex3_1_1()
function Ex3_1_2(){
    let p = '';
    for(let i = 1; i<= 6; i++){
        p = ''
        for(let x = 1; x <= i ; x++){
            p += "* "
        }
        console.log(p);
    }
}
Ex3_1_2()
//2
function Ex3_2(){
    let line = ''
    for(let i = 1; i<=10;i++){
        for(let z = 1; z<=10; z++){
            line += `${z*i} `
        }
        console.log(line);
    }
}
Ex3_2()