/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
    let l = 0;
    let max = 0;
    let counter = {};
    let arr = s.split("");
  
    for (let r = 0; r < arr.length; r++) {
      const char = arr[r];
  
      if (counter[char]) {
        counter[char] += 1;
      } else {
        counter[char] = 1;
      }
  
      while (counter[char] > 2) {
        counter[arr[l]] -= 1;
        l++;
      }
  
      if (r - l + 1 > max) {
        max = Math.max(r - l + 1);
      }
  
    }
  
    return max;
  };
  
  console.log(maximumLengthSubstring("aabccbb"));
  console.log(maximumLengthSubstring("abbbb"));
  console.log(maximumLengthSubstring("abccde"));
  console.log(maximumLengthSubstring("a"));
  console.log(maximumLengthSubstring(""));
  