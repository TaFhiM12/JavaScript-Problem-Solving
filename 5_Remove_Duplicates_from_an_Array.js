const checkExist = (arr , n) => {
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === n) return false
    }
    return true;
}

const remove_duplicate = (arr) => {
    let finalarr = [];
    for(let i = 0; i < arr.length; i++){
        if(checkExist(finalarr , arr[i])){
            finalarr.push(arr[i]);
        }
    }
    return finalarr;
}

const arr = [1,8,8];
const ans = remove_duplicate(arr);
console.log(ans);