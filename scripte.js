let currentvalue='';
let previousvalue='';
let operator = '';

function append(value){
    currentvalue=currentvalue+value;
    console.log(currentvalue)
    document.getElementById("ans").innerHTML=previousvalue +operator+currentvalue;
}
function setoperator(opp){
    operator=opp;
    previousvalue=currentvalue;
    currentvalue=''
    console.log(previousvalue)
      document.getElementById("ans").innerHTML=previousvalue +operator+currentvalue
}


function result(){
    let answer;
    previousvalue=parseFloat(previousvalue)
    currentvalue=parseFloat(currentvalue)
    switch (operator){
        case '/':
          answer=previousvalue/currentvalue;
         break;
         case '*':
            answer=previousvalue*currentvalue;
            break;
            case '+':
                answer=previousvalue+currentvalue
                break;
                case '-':
                    answer=previousvalue-currentvalue
                    break;
                    default:
                        answer=error;
    }
    currentvalue=answer
    document.getElementById("ans").innerHTML=currentvalue
    previousvalue=''
    
    operator='';
}
function cleardisplay(){
    currentvalue=''
    previousvalue=''
    operator=''
    console.log(currentvalue)
    console.log(previousvalue)
    console.log(operator)
    document.getElementById("ans").innerHTML= 0

}

