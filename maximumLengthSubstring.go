package algorithms

func maximumLengthSubstring(s string) int {
	start, end, max := 0, 0, -1
	count := 0
	counter := make(map[string]int)
	
	if len(s) == 0 {
		return 0
	}
	
	for end < len(s) {
		if _, ok := counter[string(s[end])]; ok {
			counter[string(s[end])]++
		} else {
			counter[string(s[end])] = 1
		}
		
		for counter[string(s[end])] > 2 {
			counter[string(s[start])]--
			start++
		}
		
		count = end - start + 1
		
		if count > max {
			max = count
			}
		end++
	}

	return max
}
