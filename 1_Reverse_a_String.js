const reverse_string = (str) => {
    const n = str.length;
    let ans = '';
    for(let i = n -1; i >= 0; i--){
        ans += str[i];
    }
    return ans;
}

const ans = reverse_string('tafhim')
console.log(ans);