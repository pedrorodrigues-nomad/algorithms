package algorithms

import (
	"unicode"
)

func reverseOnlyLetters(s string) string {
	left, right := 0, len(s)-1
	arr := []byte(s)

	for left < right {
		if unicode.IsLetter(rune(arr[left])) && unicode.IsLetter(rune(arr[right])) {
			arr[left], arr[right] = arr[right], arr[left]
			left++
			right--
		} else if !unicode.IsLetter(rune(arr[left])) {
			left++
		} else if !unicode.IsLetter(rune(arr[right])) {
			right--
		}
	}

	return string(arr)

}
