function reverseOnlyLetters(s) {
    let chars = s.split('');

    let letters = []

    for (let char of chars) {
        if (/^[a-zA-Z]$/.test(char)) {
            letters.push(char)
        }
    } 

    letters.reverse()

    let letterIndex = 0

    for (let i = 0; i < chars.length; i++) {
        if (/^[a-zA-Z]$/.test(chars[i])) {
            chars[i] = letters[letterIndex];
            letterIndex++;
        }
    }

    return chars.join('')
};

console.log(reverseOnlyLetters("ab-cd"))