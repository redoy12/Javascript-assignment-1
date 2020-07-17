//feetToMile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(15840);
console.log(result);
//feetToMile assignment finished.


//woodCalculator assignment start

function woodCalculator(chair, table, bed){
    var chairWood = chair * 1;  
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var total = woodCalculator(14, 5, 12);
console.log(total);

//assignment woodCalculator finished


//assignment brickCalculator starts here

function brickCalculator(bricks){
    const oneFeet           = 1000;
    const firstTenFloors    = 15;
    const secondTenFloors   = 12;
    const overTwenty        = 10;
    if(bricks <= 10){
        var multiply = bricks * firstTenFloors;
        var result = multiply  * oneFeet;
        return result;
    }else if(bricks <=20){
        var subtract = bricks - 10;
        var multiply = subtract * secondTenFloors;
        var firstTen = 10 * 15;
        var total    = multiply + firstTen;
        var result = total * oneFeet;
        return result;
    }else if(bricks > 20){
        var subtract = bricks - 20;
        var multiply = subtract * overTwenty;
        var firstTen = 10*15;
        var secondTen = 10*12; 
        var total = multiply + firstTen + secondTen;
        var result = total  *oneFeet;
        return result;
    }
}
console.log(brickCalculator(30)); 

//assignment brickCalculator finished here



//assignment tinyFriend starts here

function tinyFriend (nameArray) {
    var smallName = nameArray[0];
    for (var i = 0; i < nameArray.length; i++) {
        var element = nameArray[i];
        if (element.length < smallName.length) {
            smallName = element;
        }
    }
    return smallName;  
} 
var result = tinyFriend (['Billah','Rasel','sourov','jahid']);
console.log(result);

//assignment tinyFriend finished here