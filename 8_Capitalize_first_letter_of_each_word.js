const capitalize = (str) => {
    let temp = '';
    for(let i = 0; i < str.length; i++){
        if(i === 0 || str[i-1] === ' ') {
            if(str[i] >= 'a' && str[i] <= 'z'){
                temp += String.fromCharCode(str[i].charCodeAt(0) - 32);
            }
            else{
                temp += str[i];
            }
        }
        else {
            temp += str[i];
        }
    }
    return temp;
}

const str = 'hello world';
const ans = capitalize(str);
console.log(ans);