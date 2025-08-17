const even = (arr) => {
    const evenArr = [];
    for( let i = 0 ; i < arr.length; i++){
        if( arr[i] % 2 === 0) evenArr.push(arr[i]);
    }
    return evenArr;
}

const arr = [1,2,3,4];
const ans = even(arr);
console.log(ans);