
function minimal(a,b){
    if(a == b){
        return a;
    }else if(a<b){
        return a;
    }else{
        return b;
    }
}

let result = minimal(3,5);
console.log(result)

function findIndex(array,number){
    for(let i=0;i<array.length;i++){
        if(array[i] === number){
            return i;
        }
    }
    return -1;
}
console.log(findIndex([1,5,2,5,6,3,2],3));