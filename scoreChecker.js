

function scoreChecker(score){
    let result;

    if(score>90){
        result = "Nilai A";
    }else if  (score > 80 && score <90){
        result = "Nilai B";
    }else if (score > 70 && score < 80){
        result = "Nilai C";
    }else if(score > 60 && score < 70){
        result = "Nilai D";
    }else{
        result = "E";
    }

    return result;
}

console.log(scoreChecker(100));