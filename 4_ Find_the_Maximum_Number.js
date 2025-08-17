const maxValue = (arr) => {
    let mx = arr[0];
    for(let i = 1; i < arr.length; i++){
        if( mx < arr[i]) mx = arr[i];
    }
    return mx;
}

const arr = [5, 1, 9, 3];
const ans = maxValue(arr)
console.log(ans)