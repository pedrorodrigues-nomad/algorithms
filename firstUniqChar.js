/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    l = {};
    let arr = s.split("");
  
    for (let [i, item] of arr.entries()) {
      if (l[item] === undefined) {
        l[item] = [i, 1];
      } else {
        l[item][1] += 1;
      }
    }
  
    for (let [key, value] of Object.entries(l)) {
      if (value[1] === 1) {
        return value[0];
      }
    }
  
    return -1;
  };
  
  
  
  console.log(firstUniqChar("leetcode"))
  console.log(firstUniqChar("loveleetcode"))
  console.log(firstUniqChar("aabb"))
  console.log(firstUniqChar(""))
  console.log(firstUniqChar("a"))
  
  