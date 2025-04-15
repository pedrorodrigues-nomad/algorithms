package algorithms

func twoSum2(numbers []int, target int) []int {
	left, rigth := 0, len(numbers)-1

	for left < rigth {
		sum := numbers[left] + numbers[rigth]

		if sum > target {
			rigth--
		} else if sum < target {
			left++
		} else {
			return []int{left + 1, rigth + 1}
		}

	}

	return []int{}

}
