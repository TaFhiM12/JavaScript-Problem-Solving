const isPalindrome = (str) => {
    let temp = '';
    for(let i = str.length -1; i >= 0; i--){
        temp += str[i];
    }

    return temp === str ? true : false;
}

const ans = isPalindrome('hello');
// const ans = isPalindrome('madam');
console.log(ans)