// [ 0 | 1 | 2 ]
// [ 3 | 4 | 5 ]
// [ 6 | 7 | 8 ]
const diceArr1 = [0,1,2,3,5,6,7,8];
const diceArr2 = [0,1,3,4,5,7,8];
const diceArr3 = [0,1,3,5,7,8];
const diceArr4 = [1,3,4,5,7];
const diceArr5 = [1,3,5,7];
const diceArr6 = [1,4,7];
const diceArr9 = [0,1,2,3,4,5,6,7,8]
const diceArray = [diceArr1,diceArr2,diceArr3,diceArr4,diceArr5,diceArr6]
// rzuć kościami 1 i 2 oraz zwróć wynik 

function diceRoll(){
    var playerOne = randomSix();
    var playerTwo = randomSix();

    var playerOneDot = diceArray[playerOne - 1];
    var playerTwoDot = diceArray[playerTwo - 1];

    //set all dots on
    manageDot(1,diceArr9,1);
    manageDot(2,diceArr9,1);
    
    //reset dice position
    moveDice(1,100);
    moveDice(2,100);

    //hide dots on dice
    manageDot(1,playerOneDot,0);
    manageDot(2,playerTwoDot,0);

    //ukryj chcek
    
    showCheck(3);

    if(playerOne>playerTwo){
        moveDice(1,1);
        showCheck(1);
    } else if(playerOne<playerTwo){
        moveDice(2,1);
        showCheck(2);
    } else {
        moveDice(1,0);
        moveDice(2,0);
    }
}


// Random 1-6
function randomSix(){
    var randomNumber = (Math.floor(Math.random()*6)+1);
    return randomNumber;
}


// wybierz kostkę kropki i czy włączyć (1) lub wyłączyć (0)
function manageDot (Dice, DotList,showHide){
    Dice = Dice-1;
    var diceLocal = document.getElementsByClassName("dotGrid")[Dice];

    if(showHide===0){
        for(i=0;i<DotList.length;i++){
            diceLocal.getElementsByClassName("dot")[DotList[i]].style.visibility = "hidden";
        }
    } else if (showHide===1){
        for(i=0;i<DotList.length;i++){
            diceLocal.getElementsByClassName("dot")[DotList[i]].style.visibility = "visible"; 
        }
    }
}

function moveDice(Dice,State){
    var DiceList = ["playerOne","playerTwo"];
    Dice = Dice-1;
    if(State===0){
        document.getElementById(DiceList[Dice]).style.paddingTop = "200px";
    } else if(State===1){
        document.getElementById(DiceList[Dice]).style.paddingTop = "0px";
    } else if(State===100){
        document.getElementById(DiceList[Dice]).style.paddingTop = "100px";
    }
}

//hide show check
function showCheck(Check){
    if(Check===1){
        document.getElementById("check1").style.visibility="visible";
    } else if(Check===2){
        document.getElementById("check2").style.visibility="visible";
    } else{
        document.getElementById("check1").style.visibility="hidden";
        document.getElementById("check2").style.visibility="hidden";
    }
}