function scoreChecker(...score) {
    
   for(let i=0; i<score.length;i++){
    if(score[i] !== 'number'){
        throw Error ('Ini bukan number')
    }
   }

   const sumScore = score.reduce((acc, scores)=> acc + scores, 0);
   const final = sumScore/score.length

   

  let result;

  if (final > 90) {
    result = "Nilai A";
  } else if (final > 80 && score < 90) {
    result = "Nilai B";
  } else if (final > 70 && score < 80) {
    result = "Nilai C";
  } else if (final > 60 && score < 70) {
    result = "Nilai D";
  } else {
    result = "E";
  }

  return result;
}

console.log(scoreChecker(10,20,50,70));
