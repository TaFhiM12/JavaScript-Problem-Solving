
const isVowel = (ch) => {
    const arr = ['a','A','e','E','i','I','o','O','u','U'];
    for(let i = 0; i < arr.length; i++){
        if(ch === arr[i]) return true
    }
    return false;
}

const Count_Vowels_in_a_String = (str) => {
    let cnt = 0;
    for(let i = 0; i < str.length; i++){
        if( isVowel(str[i])) cnt++;
    }
    return cnt;
}

const ans = Count_Vowels_in_a_String('programmingHERO');
console.log(ans)